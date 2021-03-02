<template>
  <div class="layout">
    <div ref="pageRef" class="page">
      <div class="page-wrapper">
        <div class="page-mine" style="background: rgb(103, 182, 157)">
          <Mine />
        </div>
        <div ref="contentRef" class="page-content">
          <div class="content-wrapper">
            <div class="page-content" style="background: rgb(143, 170, 217)">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue'
import BScroll, { BScrollInstance, Options } from '@better-scroll/core'
import NestedScroll from '@better-scroll/nested-scroll'
import MouseWheel from '@better-scroll/mouse-wheel'
import Slide from '@better-scroll/slide'
import Mine from '@/views/Mine.vue'
BScroll.use(NestedScroll)
BScroll.use(MouseWheel)
BScroll.use(Slide)

function _init(elm: HTMLElement | string, option: Options): BScrollInstance {
  const scroll = new BScroll(elm, { ...option })
  return scroll
}

export default defineComponent({
  name: 'Layout',
  components: { Mine },
  props: {},
  setup() {
    const pageRef = ref<null | HTMLElement>(null)
    const contentRef = ref<null | HTMLElement>(null)
    const pageScroll = ref<null | BScrollInstance>(null)
    const contentScroll = ref<null | BScrollInstance>(null)
    nextTick(() => {
      if (pageRef.value) {
        // 外层控制slide
        pageScroll.value = _init(pageRef.value, {
          probeType: 3,
          click: false,
          scrollX: false,
          scrollY: true,
          mouseWheel: true,
          slide: {
            loop: false,
            autoplay: false,
            speed: 350
          },
          momentum: false,
          bounce: false,
          stopPropagation: true,
          nestedScroll: {
            groupId: 'triple-nested-scroll' // groupId is a string or number
          }
        })
      }
      if (contentRef.value) {
        contentScroll.value = _init(contentRef.value, {
          probeType: 3,
          click: false,
          scrollX: false,
          scrollY: true,
          mouseWheel: true,
          momentum: false,
          bounce: false,
          stopPropagation: true,
          nestedScroll: {
            groupId: 'triple-nested-scroll' // groupId is a string or number
          }
        })
      }
    })
    return { pageRef, contentRef }
  }
})
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  div {
    height: 100%;
    overflow: hidden;
  }
}
</style>
