import System from './runtime/System'
import BizMixin from './runtime/BizMixin'
import {renderIcon} from "./utils"
import './main.css'

export * from './components'

window['system'] = new System();

export {
    System,
    BizMixin,
    renderIcon
}