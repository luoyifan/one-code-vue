<template>
  <el-button v-if="!hidden"
             :type="type"
             :size="size"
             :plain="plain"
             :round="round"
             :circle="circle"
             :icon="icon"
             :disabled="disabled"
             :link="link"
             :loading="loading"
             :class="['yv-button', calcClass]"
             :style="calcStyle"
             @click="_onClick">{{ text }}</el-button>
</template>

<script>
import _ from 'lodash'
import {Button} from '../Defaults'
import baseVjsonMix from "../baseVjsonMix"
import {renderIcon} from "../../utils"

export default {
  mixins: [baseVjsonMix],
  data() {
    const vjson = _.defaults(this.vjson, Button)

    return {
      type: vjson.type,
      size: vjson.size,
      plain: vjson.plain,
      round: vjson.round,
      circle: vjson.circle,
      iconCls: vjson.iconCls,
      disabled: vjson.disabled,
      link: vjson.link,
      loading: vjson.loading,
      text: vjson.text,
      hidden: vjson.hidden,
    }
  },
  computed: {
    icon() {
      return renderIcon(this.iconCls)
    },
  },
  methods: {
    _onClick(evt) {
      system.globalLoadingButtonInstance = this
      this.runEvent('click', ...arguments)
      // getListener(this.vjson, 'click', this.vcxt)(this, this.vcxt.scope)
      system.globalLoadingButtonInstance = null
    }
  }
}
</script>