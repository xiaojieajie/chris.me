<template>
  <div class="Right" @mousemove="parallax">
    <div class="box">
      <img
        v-for="(src, i) in realImgs"
        :key="src"
        :ref="i === 0 ? 'img_0_ref' : ''"
        v-lazy="src"
        :class="i !== 0 ? 'pa' : ''"
        :style="imgStyles[i]"
        alt="loading fail"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, nextTick } from 'vue'
const ligthImgs = [
  'http://blog.chrisying.cn/layer-0.png',
  'http://blog.chrisying.cn/layer-1.png',
  'http://blog.chrisying.cn/layer-2.png',
  'http://blog.chrisying.cn/layer-3.png',
  'http://blog.chrisying.cn/layer-4.png',
  'http://blog.chrisying.cn/layer-5.png'
]
const drakImgs = [
  'http://blog.chrisying.cn/layer-0-dark.png',
  'http://blog.chrisying.cn/layer-1-dark.png',
  'http://blog.chrisying.cn/layer-2-dark.png',
  'http://blog.chrisying.cn/layer-3-dark.png',
  'http://blog.chrisying.cn/layer-4-dark.png',
  'http://blog.chrisying.cn/layer-5-dark.png'
]
const theme = ref(localStorage.getItem('theme') as string)
const realImgs = reactive(theme.value === 'dark' ? drakImgs : ligthImgs)

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
</script>

<style lang="scss" scoped>
.Right {
  position: relative;
  z-index: 1;
  user-select: none;
  width: 52%;
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
@media screen and (max-width: 991px) {
  .Right {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    width: 80vw;
  }
}
@media screen and (max-width: 768px) {
  .Right {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    width: 95vw;
  }
}
</style>
