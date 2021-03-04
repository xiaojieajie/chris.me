<template>
  <div class="container">
    <div ref="outerRef" class="outer-wrapper">
      <div class="outer-content">
        <ul>
          <li
            v-for="(item, index) in outerOpenData"
            :key="index"
            class="outer-list-item"
            @click="handleOuterClick"
          >
            {{ item }}
          </li>
        </ul>
        <!-- <div ref="innerRef" class="inner-wrapper">
          <ul class="inner-content">
            <li
              v-for="(item, index) in innerData"
              :key="index"
              class="inner-list-item"
              @click="handleInnerClick"
            >
              {{ item }}
            </li>
          </ul>
        </div> -->
        <ul>
          <li
            v-for="(item, index) in outerCloseData"
            :key="index"
            class="outer-list-item"
            @click="handleOuterClick"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from '@better-scroll/core'
import NestedScroll from '@better-scroll/nested-scroll'
import MouseWheel from '@better-scroll/mouse-wheel'
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
BScroll.use(NestedScroll)
BScroll.use(MouseWheel)

export default {
  setup() {
    const outerOpenData = reactive([
      '----Outer Start----',
      '👆🏻 outer scroll 👇🏻 ',
      '🙂 🤔 😄 🤨 😐 🙃 ',
      '👆🏻 outer scroll 👇🏻 '
    ])

    const outerCloseData = reactive([
      '👆🏻 outer scroll 👇🏻 ',
      '🙂 🤔 😄 🤨 😐 🙃 ',
      '👆🏻 outer scroll 👇🏻 ',
      '😔 😕 🙃 🤑 😲 😲 ',
      '🙂 🤔 😄 🤨  😐 🙃 ',
      '👆🏻 outer scroll 👇🏻 ',
      '👆🏻 outer scroll 👇🏻 ',
      '😔 😕 🙃 🤑 😲 😲 ',
      '🙂 🤔 😄 🤨  😐 🙃 ',
      '👆🏻 outer scroll 👇🏻 ',
      '👆🏻 outer scroll 👇🏻 ',
      '🙂 🤔 😄 🤨 😐 🙃 ',
      '👆🏻 outer scroll 👇🏻 ',
      '----Outer End----',

      '👆🏻 outer scroll 👇🏻 ',
      '🙂 🤔 😄 🤨 😐 🙃 ',
      '👆🏻 outer scroll 👇🏻 ',
      '😔 😕 🙃 🤑 😲 😲 ',
      '🙂 🤔 😄 🤨  😐 🙃 ',
      '👆🏻 outer scroll 👇🏻 ',
      '👆🏻 outer scroll 👇🏻 ',
      '😔 😕 🙃 🤑 😲 😲 ',
      '🙂 🤔 😄 🤨  😐 🙃 ',
      '👆🏻 outer scroll 👇🏻 ',
      '👆🏻 outer scroll 👇🏻 ',
      '🙂 🤔 😄 🤨 😐 🙃 ',
      '👆🏻 outer scroll 👇🏻 ',
      '----Outer End----'
    ])

    const innerData = reactive([
      '------Inner Start-----',
      '😀 😁 😂 🤣 😃 🙃 ',
      '👆🏻 inner scroll 👇🏻 ',
      '🙂 🤔 😄 🤨 😐 🙃 ',
      '👆🏻 inner scroll 👇🏻 ',
      '😔 😕 🙃 🤑 😲 😐 🙃 ',
      '👆🏻 inner scroll 👇🏻 ',
      '🐣 🐣 🐣 🐣 🐣 🐣 ',
      '👆🏻 inner scroll 👇🏻 ',
      '🐥 🐥 🐥 🐥 🐥 🐥 ',
      '👆🏻 inner scroll 👇🏻 ',
      '🤓 🤓 🤓 🤓 🤓 🤓 ',
      '👆🏻 inner scroll 👇🏻 ',
      '🦔 🦔 🦔 🦔 🦔 🦔 ',
      '👆🏻 inner scroll 👇🏻 ',
      '🙈 🙈 🙈 🙈 🙈 🙈 ',
      '👆🏻 inner scroll 👇🏻 ',
      '🚖 🚖 🚖 🚖 🚖 🚖 ',
      '👆🏻 inner scroll 👇🏻 ',
      '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ',
      '-----Inner End-----'
    ])

    const outerRef = ref()
    const innerRef = ref()
    const outerSc = ref()
    const innerSc = ref()
    onMounted(() => {
      initBScroll()
    })
    const handleOuterClick = () => {
      window.alert('clicked outer item')
    }
    const handleInnerClick = () => {
      window.alert('clicked inner item')
    }
    const initBScroll = () => {
      outerSc.value = new BScroll(outerRef.value, {
        nestedScroll: {
          groupId: 'vertical-nested-scroll' // groupId is a string or number
        },
        mouseWheel: true,
        click: true
      })

      // inner
      innerSc.value = new BScroll(innerRef.value, {
        // please keep the same groupId as above
        // outerScroll and innerScroll will be controlled by the same nestedScroll instance
        nestedScroll: {
          groupId: 'vertical-nested-scroll'
        },
        mouseWheel: true,
        click: true
      })
    }

    onBeforeUnmount(() => {
      outerSc.value.destroy()
      innerSc.value.destroy()
    })

    return {
      outerRef,
      innerRef,
      outerOpenData,
      outerCloseData,
      innerData,
      handleOuterClick,
      handleInnerClick
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.container {
  height: 100%;
}

.outer-wrapper, .inner-wrapper {
  border: 2px solid #62B791;
  border-radius: 5px;
  transform: rotate(0deg);
  position: relative;
  overflow: hidden;
}

.outer-wrapper {
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.inner-wrapper {
  height: 240px;
  background-color: rgba(98, 183, 145, 0.2);
}

.inner-list-item {
  height: 50px;
  line-height: 50px;
  text-align: center;
  list-style: none;
}

.outer-list-item {
  height: 40px;
  line-height: 40px;
  text-align: center;
  list-style: none;
}
</style>
