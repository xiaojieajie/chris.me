<template>
  <div id="layout">
    <Scroll
      class="wrapper"
      scroll-x
      :scroll-y="false"
      :mouse-wheel="false"
      :slide="slide"
      :nested="nested"
    >
      <div class="content">
        <div class="view">
          <Mine />
        </div>
        <div class="view">
          <router-view />
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Scroll from '@c/Scroll/index.vue'
import Mine from '@/views/Mine.vue'
import { SlideConfig } from '@better-scroll/slide'
import { NestedScrollConfig } from '@better-scroll/nested-scroll'

export default defineComponent({
  name: 'Layout',
  components: { Scroll, Mine },
  setup() {
    const slide = reactive<Partial<SlideConfig>>({
      loop: false,
      autoplay: false,
      speed: 100
    })
    const nested = reactive<Partial<NestedScrollConfig>>({
      groupId: 'page'
    })
    return { slide, nested }
  }
})
</script>

<style lang="scss" scoped>
#layout {
  position: relative;
  height: 100%;
  .wrapper {
    height: 100%;
    overflow: hidden;
    .content {
      height: 100%;
      display: flex;
      .view {
        height: 100%;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
      }
    }
  }
}
</style>
