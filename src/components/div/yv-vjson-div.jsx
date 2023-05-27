import _ from 'lodash'
import baseVjsonMix from "../baseVjsonMix";

export default {
    mixins: [baseVjsonMix],
    data() {
        return {
            c: 0,
            aa: 'abc'
        }
    },
    methods: {
        clickMe() {
            this.aa = 'abc' + this.c++
        }
    },
    render() {
        const vjson = this.vjson
        const clickMe = this.clickMe

        return (
            <div onClick={clickMe}>
                {vjson.text}
            </div>
        )
    }
}