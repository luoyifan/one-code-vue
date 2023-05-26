import _ from "lodash"
import {nextTick, toRaw, unref} from "vue"
import JSON5 from 'json5'
import localforage from 'localforage'

export interface RestApiResult<T> {
    success: string,
    msg: string,
    data: T
}

export default class System {
    _ = _
    toRaw = toRaw
    unref = unref
    nextTick = nextTick
    defer = _.defer
    extend = _.extend
    cloneDeep = _.cloneDeep
    localforage = localforage

    JSON5 = JSON5
    json5 = JSON5

    /**
     * 全局当前按下的按钮（按下完毕之后会清空）
     */
    globalLoadingButtonInstance: any = null
}