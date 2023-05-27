import VeLoading from "./src/index.js";

VeLoading.install = function (Vue) {
    Vue.config.globalProperties.$veLoading = VeLoading;
};

export default VeLoading;
