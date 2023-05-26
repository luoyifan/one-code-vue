import ElementPlus from 'element-plus'
import VJsonContext from "../runtime/VJsonContext"
import YvVjsonButton from "./button/yv-vjson-button.vue"

export const install = function (Vue) {
    Vue.use(ElementPlus)

    Vue.component('yv-vjson-button', YvVjsonButton)
}

export {
    VJsonContext
}