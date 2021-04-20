import loadingImg from '../assets/img/loding.gif'
import '../assets/css/loading.css'

export default {
    install(Vue) {
        let node = document.createElement("div")
        node.id = 'vue_loading_plugin'
        document.body.appendChild(node)
        node.style.background = "url(" + loadingImg + ") center center no-repeat rgb(130,0,0)"

        node.addEventListener("transitionend", () => {
            var o = window.getComputedStyle(node, null).opacity
            if (o == 0) {
                node.style.display = "none"
            }
        })

        Vue.prototype.$showLoading = () => {
            node.style.display = 'block'
            setTimeout(() => {
                node.style.opacity = 1
            }, 16.7)
        }

        Vue.prototype.$hideLoading = () => {
            setTimeout(() => {
                node.style.opacity = 0
            }, 16.7);

            var o = window.getComputedStyle(node, null).opacity
            if (o == 0) {
                node.style.display = "none"
            }
        }
    }
}

