<template>
  <div id="layout">
    <Scroll :slide="slide" :nested="nested" class="wrapper">
      <div class="layout">
        <Mine />
        <div class="content">
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
      speed: 300
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
  height: 100%;
}
.wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.layout {
  .content {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
