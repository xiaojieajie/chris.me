<template>
  <div id="home">
    <h1 v-for="i in 100" :key="i">{{ i }}</h1>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import BScroll, { BScrollInstance } from '@better-scroll/core'
import NestedScroll from '@better-scroll/nested-scroll'
import MouseWheel from '@better-scroll/mouse-wheel'
BScroll.use(NestedScroll)
BScroll.use(MouseWheel)
export default {
  name: 'Home',
  setup() {
    const wrapperRef = ref<null | HTMLElement>(null)
    const scroll = ref<null | BScrollInstance>(null)
    onMounted(() => {
      if (wrapperRef.value) {
        scroll.value = new BScroll(wrapperRef.value, {
          mouseWheel: true,
          nestedScroll: {
            groupId: 'page'
          }
        })
      }
    })
    return {
      wrapperRef
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  background: rgb(143, 170, 217);
  padding: 40px;
}
</style>
