<template>
  <div class="list">
    <slot />
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive } from 'vue'

const props = withDefaults(defineProps<{
  loading?: boolean
  error?: boolean
  finished?: boolean
  errorText?: string
  loadingText?: string
  finishedText?: string
  immediateCheck?: boolean
  offset?: string | number
  direction?: string
}>(), {
  loading: false,
  error: false,
  finished: false,
  errorText: '出错啦',
  loadingText: '加载中',
  finishedText: '完成啦',
  immediateCheck: true,
  offset: 300,
  direction: 'down',
})

</script>
<style lang='scss' scoped>
</style>
