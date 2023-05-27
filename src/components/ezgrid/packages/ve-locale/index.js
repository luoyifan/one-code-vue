// import Vue from "vue";
import {reactive} from "vue"
import _ from "lodash";
import defaultLang from "../src/locale/lang/en-US";

const {merge, cloneDeep} = _

// 请将下面Vue2的代码改为Vue3的代码
// const { defineReactive } = Vue.util;
// const proto = Vue.prototype;
//
// proto.$veTableMessages = proto.$veTableMessages || {};
//
// defineReactive(
//     proto,
//     "$veTableMessages",
//     cloneDeep({
//         lang: defaultLang,
//     }),
// );
const proto = {};
proto.$veTableMessages = reactive(cloneDeep({
        lang: defaultLang,
    }),
)

export default {
    install(Vue) {
        Vue.config.globalProperties.$veTableMessages = proto.$veTableMessages
    },
    getMessage() {
        return proto.$veTableMessages.lang;
    },
    use(lang) {
        this.update(lang);
    },
    update(lang = {}) {
        merge(proto.$veTableMessages.lang, lang);
    },
};
