<template>
  <div id="home">
    <Scroll class="container">
      <div class="content">
        <h1 v-for="i in 100" :key="i">{{ i }}</h1>
      </div>
    </Scroll>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
import Scroll from '@c/Scroll/index.vue'
import BScroll from '@better-scroll/core'
import NestedScroll, { NestedScrollConfig } from '@better-scroll/nested-scroll'
import MouseWheel from '@better-scroll/mouse-wheel'
BScroll.use(NestedScroll)
BScroll.use(MouseWheel)
export default {
  name: 'Home',
  components: { Scroll },
  setup() {
    const nested = reactive<Partial<NestedScrollConfig>>({
      groupId: 'page'
    })
    return { nested }
  }
}
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  padding: 40px;

  .container {
    position: relative;
    overflow: hidden;
    .content {
      width: 100%;
      background: rgb(143, 170, 217);
    }
  }
}
</style>
