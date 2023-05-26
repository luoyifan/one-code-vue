import _ from "lodash";
import VJsonContext from "../runtime/VJsonContext";

/**
 * 公共混入方法
 */
export default {
    props: {
        vjson: Object,
        vcxt: VJsonContext,
        dialogScope: Object,
        parentComponent: {type: Object, required: false},
        parentList: {type: Array, required: false},
        indexOfParentList: {type: Number, required: false},
    },
    data() {
        return {
            _destroyed: true,
            // _timeId: _.uniqueId('_time')
        }
    },
    created() {
        // console.time(this._timeId)
        this._destroyed = false
        const reference = this.vjson.reference
        if (reference) {
            // 在模型中挂接实体类
            _.set(this.vcxt.scope.$data, 'refs.' + reference, this)
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.runEvent('afterrender')
        })
    },
    unmounted() {
        this._destroyed = true
        this.$nextTick(() => {
            this.runEvent('destory')
        })
    },
    computed: {
        calcClass() {
            return ''
        },

        calcStyle() {
            return ''
        },
    },
    methods: {
        /**
         * 在运行时，运行 VJson 的对应事件, vjson 对事件的定义有两种方法
         * {
         *     xtype: 'button',
         *     listeners: {
         *         click: '{btn1_click}',   // 自动替换为下面
         *         click: 'this.btn1_click()',  // 直接运行 EVAL
         *     }
         * }
         *
         *
         * @param eventName 事件名称
         * @param args 事件参数
         */
        runEvent(eventName, ...args) {
            console.log('runEvent', this.vjson, eventName, ...args)
        }
    }
}