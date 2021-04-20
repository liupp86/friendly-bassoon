import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const Index = () => import('../views/index.vue')
const Detail = () => import('../views/detail.vue')
const Register = () => import('../views/register.vue')
const Login = () => import('../views/login.vue')
const List = () => import('../views/list.vue')
const Search = () => import('../views/search.vue')
const ShopCart = () => import('../views/shopping_cart.vue')

const routes = [{
  path: "/",
  component: Index,
  name: "Index"
}, {
  path: "*",
  redirect: "/"
}, {
  path: '/list',
  component: List,
  name: "list"
}, {
  path: '/register',
  component: Register,
  name: "register"
}, {
  path: '/login',
  component: Login,
  name: "login"
}, {
  path: '/search',
  component: Search,
  name: "search",
}, {
  path: "/detail/:id",
  component: Detail,
  name: "detail"
}, {
  path: '/shopping_cart',
  component: ShopCart,
  name: 'shopCart',
}]

const router = new VueRouter({
  // 使用 history 路由
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router