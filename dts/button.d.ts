interface button {

    /**
     * 按钮的图标样式
     */
    iconCls: string

    /**
     * 按钮文本
     */
    text: string

    /**
     * 隐藏
     */
    hidden: boolean

    /**
     * 禁用
     */
    disabled: boolean

    /**
     * 加载
     */
    loading: boolean

    /**
     * 类型
     * 可选值: 'primary'| 'success'| 'warning'| 'danger'| 'info'| 'text'(delete)
     */
    type: 'primary' | 'success' | 'warning' | 'danger' | 'info'

    /**
     * 是否为朴素按钮
     */
    plain: boolean

    /**
     * 是否为圆角按钮
     */
    round: boolean

    /**
     * 是否为圆形按钮
     */
    circle: boolean

    /**
     * 是否为链接按钮
     */
    link: boolean

    /**
     * 尺寸
     * 可选值: 'large'| 'default'| 'small'
     */
    size: 'large' | 'default' | 'small'

    /**
     * 模拟点击
     */
    performClick()
}