import _ from 'lodash'
import {h} from 'vue'
import {ElIcon} from "element-plus"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as FaIcon from '@vicons/fa'

/**
 * 渲染图标
 */
export function renderIcon(icon: string) {
    if (!icon) {
        return undefined;
    }
    let component: any = undefined;
    if (typeof icon === 'string') {
        if (icon.startsWith("element ")) {
            icon = icon.substring("element ".length);
            component = ElementPlusIconsVue[icon];

        } else if (icon.startsWith("fa ")) {
            icon = icon.substring("fa ".length);
            component = FaIcon[icon];

        } else {
            component = ElementPlusIconsVue[icon];
            if (!component) component = FaIcon[icon];
        }
    }
    if (!component) {
        // component = AntdIcon["ProfileOutlined"];
        return undefined;
    }
    return () => h(ElIcon, null, {default: () => h(component)});
}