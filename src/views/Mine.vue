<template>
  <div id="mine">
    <div class="wrapper flex-center">
      <GlassCard class="info" :width="400">
        <div class="content">
          <Time />
          <img class="test" src="@/assets/logo.png" alt="" />
        </div>
      </GlassCard>
      <div class="icon" @mousemove="parallax">
        <div class="box">
          <img
            v-for="(src, i) in realImgs"
            :key="src"
            :ref="i === 0 ? 'img_0_ref' : ''"
            :src="src"
            :class="i !== 0 ? 'pa' : ''"
            :style="imgStyles[i]"
            alt="loading fail"
          />
          <!-- <template v-for="(src, i) in realImgs" :key="src">
            <img
              v-if="i === 0"
              ref="img_0_ref"
              :src="src"
              :style="imgStyles[i]"
              alt="loading fail"
            />
            <img
              v-else
              :src="src"
              :style="imgStyles[i]"
              class="pa"
              alt="loading fail"
            />
          </template> -->
          <!-- <img src="http://blog.chrisying.cn/hero.png" alt=""  /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, nextTick } from 'vue'
import Time from '@c/Time/index.vue'
import GlassCard from '@c/GlassCard/index.vue'

function handleParallax() {
  const img_0_ref = ref<HTMLElement | null>(null)
  const imgStyles = reactive([
    {
      transform: ''
    },
    {
      transform: ''
    },
    {
      transform: ''
    },
    {
      transform: ''
    },
    {
      transform: ''
    },
    {
      transform: ''
    }
  ])
  const bound = ref<DOMRect>()

  nextTick(() => {
    if (img_0_ref.value) {
      bound.value = img_0_ref.value.getBoundingClientRect()
    }
  })

  function transform(event: MouseEvent, strength: number) {
    let tX = ((window.innerWidth - event.pageX) * strength) / 2000
    let tY = ((window.innerHeight - event.pageY) * strength) / 2000
    let sX =
      (0.5 -
        (event.pageY - (bound.value as DOMRect).left) /
          (bound.value as DOMRect).width) *
      1.1
    let sY =
      -(
        0.5 -
        (event.pageX - (bound.value as DOMRect).top) /
          (bound.value as DOMRect).width
      ) * 1.1
    return (
      'translate(' + tX + 'px, ' + tY + 'px) skew(' + sX + 'deg, ' + sY + 'deg)'
    )
  }
  function parallax(event: MouseEvent) {
    imgStyles[0].transform = transform(event, 5)
    imgStyles[1].transform = transform(event, -10)
    imgStyles[2].transform = transform(event, 25)
    imgStyles[3].transform = transform(event, 20)
    imgStyles[4].transform = transform(event, -30)
    imgStyles[5].transform = transform(event, 15)
  }
  return {
    img_0_ref,
    imgStyles,
    parallax
  }
}

export default {
  name: 'Mine',
  components: { Time, GlassCard },
  setup() {
    const ligthImgs = reactive([
      'http://blog.chrisying.cn/layer-0.png',
      'http://blog.chrisying.cn/layer-1.png',
      'http://blog.chrisying.cn/layer-2.png',
      'http://blog.chrisying.cn/layer-3.png',
      'http://blog.chrisying.cn/layer-4.png',
      'http://blog.chrisying.cn/layer-5.png'
    ])
    const drakImgs = reactive([
      'http://blog.chrisying.cn/layer-0-dark.png',
      'http://blog.chrisying.cn/layer-1-dark.png',
      'http://blog.chrisying.cn/layer-2-dark.png',
      'http://blog.chrisying.cn/layer-3-dark.png',
      'http://blog.chrisying.cn/layer-4-dark.png',
      'http://blog.chrisying.cn/layer-5-dark.png'
    ])
    const theme = ref(localStorage.getItem('theme') as string)
    const realImgs = theme.value === 'dark' ? drakImgs : ligthImgs
    return { ...handleParallax(), theme, realImgs }
  }
}
</script>

<style lang="scss" scoped>
#mine {
  height: 100%;
  .wrapper {
    height: 100%;
    padding: 3.2rem;
    background-image: url('http://blog.chrisying.cn/splatter.png');
    background-size: 50%;
    background-position: center;
    .info {
      width: 300px !important;
    }
    .icon {
      user-select: none;
      max-width: 52%;
      margin-left: 7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .box {
        position: relative;
        width: 100%;
        .pa {
          position: absolute;
          top: 0;
          left: 0;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      }
    }
  }
}
.content {
  padding: 50px;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
