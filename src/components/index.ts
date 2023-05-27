import ElementPlus from 'element-plus'
import VJsonContext from "../runtime/VJsonContext"
import YvVjsonButton from "./button/yv-vjson-button.vue"
import YvVjsonDiv from './div/yv-vjson-div.jsx'
// import YvVjsonHstable from "./hstable/yv-vjson-hstable.vue"
import YvVjsonEzgrid from "./ezgrid/yv-vjson-ezgrid.vue"

export const install = function (Vue) {
    Vue.use(ElementPlus)
    YvVjsonEzgrid.install(Vue)

    Vue.component('yv-vjson-button', YvVjsonButton)
    Vue.component('yv-vjson-div', YvVjsonDiv)
    Vue.component('yv-vjson-ezgrid', YvVjsonEzgrid)
}

export {
    VJsonContext
}