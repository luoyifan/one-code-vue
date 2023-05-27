import VeCheckbox from './ve-checkbox';
import VeCheckboxGroup from './ve-checkbox-group';
import VeContextmenu from './ve-contextmenu';
import VeDropdown from './ve-dropdown';
import VeIcon from './ve-icon';
import VeLoading from './ve-loading';
import VeLocale from './ve-locale';
import VePagination from './ve-pagination';
import VeRadio from './ve-radio';
import VeSelect from './ve-select';
import VeTable from './ve-table';
import mitt from 'mitt'

const version = '2.27.1';
const components = [
    VeCheckbox,
    VeCheckboxGroup,
    VeContextmenu,
    VeDropdown,
    VeIcon,
    VeLoading,
    VeLocale,
    VePagination,
    VeRadio,
    VeSelect,
    VeTable
];

const install = Vue => {
    components.forEach(Component => {
        Vue.use(Component);
    });

    Vue.config.globalProperties.$veLoading = VeLoading;
    Vue.config.globalProperties.$veLocale = VeLocale;
};

/* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue);
// }

export {
    install,
    version,
    VeCheckbox,
    VeCheckboxGroup,
    VeContextmenu,
    VeDropdown,
    VeIcon,
    VeLoading,
    VeLocale,
    VePagination,
    VeRadio,
    VeSelect,
    VeTable
};

export default {
    install,
    version,
    VeCheckbox,
    VeCheckboxGroup,
    VeContextmenu,
    VeDropdown,
    VeIcon,
    VeLoading,
    VeLocale,
    VePagination,
    VeRadio,
    VeSelect,
    VeTable
};
