<template>
  <div>
    <h1>mine</h1>
    <Time />
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'
import Time from '@c/Time/index.vue'
export default {
  name: 'Mine',
  components: { Time },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100%;
  background: rgb(103, 182, 157);
}
</style>
