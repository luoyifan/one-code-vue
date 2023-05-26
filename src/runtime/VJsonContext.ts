import _ from 'lodash'

export default class VJsonContext {

    static createRuntime(vueInstance: any): VJsonContext {
        const vcxt = new VJsonContext()
        vcxt.scope = vueInstance
        delete vcxt.data
        delete vcxt.designer
        return vcxt
    }

    readonly runtimeId = _.uniqueId('rt_')
    _slots

    getSlot(slotName: string) {
        return this.runtimeId + "_" + slotName
    }

    setSlots(value) {
        this._slots = value
    }

    getSlotByName(name) {
        return this._slots[name]
    }

    /**
     * [仅运行时有效] vjson 中，用 reference:'xx' 定义过的组件，在这里可以拿到引用
     */
    refs = {}

    /**
     * [仅设计时有效] 数据模型对象
     */
    data = {}

    /**
     * [仅设计时有效] 设计器对象
     */
    designer!: object

    /**
     * 仅运行时有效
     */
    scope!: any
}