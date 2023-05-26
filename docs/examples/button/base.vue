<template>
  <yv-vjson-button :vjson="designJs"/>
</template>

<script setup lang="ts">
import {reactive} from "vue";

const designJs = reactive({
  text: '这是第一个按钮'
})
</script>