<template>
  <Scroll :nested="nested" class="home" @scroll="handleScroll">
    <div>
      <h1 v-for="i in 100" :key="i" class="p-8">1111{{ i }}</h1>
    </div>
  </Scroll>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import Scroll from '@c/Scroll/index.vue'
import { NestedScrollConfig } from '@better-scroll/nested-scroll'
export default {
  name: 'Home',
  components: { Scroll },
  setup() {
    const a = ref(1)
    const nested = reactive<Partial<NestedScrollConfig>>({
      groupId: 'page'
    })
    const handleScroll = (pos: any) => {
      console.log(pos)
    }
    return { a, nested, handleScroll }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgb(143, 170, 217);
}
</style>
