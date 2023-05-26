import _ from 'lodash'
import {toRaw} from 'vue'

export default {
    props: {
        _input: {
            required: false,
        },
    },
    emits: [
        'ok', 'closeDialog'
    ],
}