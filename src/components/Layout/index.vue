<template>
  <div id="layout">
    <Scroll
      class="outer-wrapper"
      :mouse-wheel="false"
      scroll-x
      :scroll-y="false"
      :slide="slide"
    >
      <div class="outer-content">
        <div class="view">
          <Mine />
        </div>
        <div class="view">
          <div ref="innerRef" class="inner-wrapper">
            <div class="inner-content">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import Scroll from '@c/Scroll/index.vue'
import Mine from '@/views/Mine.vue'
import BScroll, { BScrollInstance } from '@better-scroll/core'
import { SlideConfig } from '@better-scroll/slide'
import NestedScroll from '@better-scroll/nested-scroll'
import MouseWheel from '@better-scroll/mouse-wheel'

BScroll.use(NestedScroll)
BScroll.use(MouseWheel)

export default defineComponent({
  name: 'Layout',
  components: { Scroll, Mine },
  setup() {
    const slide = reactive<Partial<SlideConfig>>({
      loop: false,
      autoplay: false,
      speed: 100
    })
    const innerRef = ref<null | HTMLElement>(null)
    const scroll = ref<null | BScrollInstance>(null)
    onMounted(() => {
      if (innerRef.value) {
        scroll.value = new BScroll(innerRef.value, {
          mouseWheel: true,
          nestedScroll: {
            groupId: 'page'
          }
        })
      }
    })
    onBeforeUnmount(() => {
      scroll.value && scroll.value.destory()
    })
    return { slide, innerRef }
  }
})
</script>

<style lang="scss" scoped>
#layout {
  position: relative;
  height: 100%;
  .outer-wrapper,
  .inner-wrapper {
    height: 100%;
    overflow: hidden;
  }
}
.outer-wrapper {
  > .outer-content {
    height: 100%;
    display: flex;
    .view {
      height: 100%;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
    }
  }
}
</style>
