import lazyLoadingImg from "../assets/img/loding.gif"
export default {
    install(Vue) {
        Vue.directive("lazy", {
            inserted: (el, binding) => {
                el.style.background = "url(" + lazyLoadingImg + ") no-repeat center center"

                function f() {
                    let H = window.innerHeight
                    let st = document.body.scrollTop || document.documentElement.scrollTop
                    let ot = el.offsetTop

                    if (ot < H + st-200) {
                        el.src = binding.value
                        el.onload = function () {
                            el.style.background = "none"
                        }
                        window.removeEventListener("scroll", f)
                    }
                }
                f()
                window.addEventListener("scroll", f)
            }
        })
    }
}