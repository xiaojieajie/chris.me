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
          <img ref="ll0" src="http://blog.chrisying.cn/layer-0.png" alt="" />
          <img
            ref="ll1"
            class="pa"
            src="http://blog.chrisying.cn/layer-1.png"
            alt=""
          />
          <img
            ref="ll2"
            class="pa"
            src="http://blog.chrisying.cn/layer-2.png"
            alt=""
          />
          <img
            ref="ll3"
            class="pa"
            src="http://blog.chrisying.cn/layer-3.png"
            alt=""
          />
          <img
            ref="ll4"
            class="pa"
            src="http://blog.chrisying.cn/layer-4.png"
            alt=""
          />
          <img
            ref="ll5"
            class="pa"
            src="http://blog.chrisying.cn/layer-5.png"
            alt=""
          />
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

function header_parallax() {
  const ll0 = ref<HTMLElement | null>(null)
  const ll1 = ref<HTMLElement | null>(null)
  const ll2 = ref<HTMLElement | null>(null)
  const ll3 = ref<HTMLElement | null>(null)
  const ll4 = ref<HTMLElement | null>(null)
  const ll5 = ref<HTMLElement | null>(null)
  const bound = ref<DOMRect>()

  nextTick(() => {
    if (ll0.value) {
      bound.value = ll0.value.getBoundingClientRect()
    }
  })

  function transform(event: MouseEvent, strength: number) {
    if (bound.value) {
      let tX = ((window.innerWidth - event.pageX) * strength) / 2000
      let tY = ((window.innerHeight - event.pageY) * strength) / 2000
      let sX =
        (0.5 - (event.pageY - bound.value.left) / bound.value.width) * 1.1
      let sY =
        -(0.5 - (event.pageX - bound.value.top) / bound.value.width) * 1.1
      return (
        'translate(' +
        tX +
        'px, ' +
        tY +
        'px) skew(' +
        sX +
        'deg, ' +
        sY +
        'deg)'
      )
    }
    return ''
  }
  function parallax(event: MouseEvent) {
    if (
      ll0.value &&
      ll1.value &&
      ll2.value &&
      ll3.value &&
      ll4.value &&
      ll5.value
    ) {
      ll0.value.style.transform = transform(event, 5)
      ll1.value.style.transform = transform(event, -10)
      ll2.value.style.transform = transform(event, 25)
      ll3.value.style.transform = transform(event, 20)
      ll4.value.style.transform = transform(event, -30)
      ll5.value.style.transform = transform(event, 15)
    }
  }
  return {
    ll0,
    ll1,
    ll2,
    ll3,
    ll4,
    ll5,
    parallax
    // matchMedia: null,
    // bound: null,
    // init() {
    //   this.matchMedia = window.matchMedia('(prefers-reduced-motion: reduce)')
    //   this.bound = this.$refs.ll0.getBoundingClientRect()
    // },
    // transform(event, strength) {
    //   let tX = ((window.innerWidth - event.pageX) * strength) / 2000
    //   let tY = ((window.innerHeight - event.pageY) * strength) / 2000
    //   let sX = (0.5 - (event.pageY - this.bound.left) / this.bound.width) * 1.1
    //   let sY = -(0.5 - (event.pageX - this.bound.top) / this.bound.width) * 1.1
    //   return (
    //     'translate(' +
    //     tX +
    //     'px, ' +
    //     tY +
    //     'px) skew(' +
    //     sX +
    //     'deg, ' +
    //     sY +
    //     'deg)'
    //   )
    // },
    // parallax(event) {
    //   if (
    //     !this.matchMedia ||
    //     this.matchMedia.matches ||
    //     window.innerWidth < 1024
    //   )
    //     return
    //   let el = document.documentElement.classList.contains('dark') ? 'ld' : 'll'
    //   this.$refs[el + 0].style.transform = this.transform(event, 5)
    //   this.$refs[el + 1].style.transform = this.transform(event, -10)
    //   this.$refs[el + 2].style.transform = this.transform(event, 25)
    //   this.$refs[el + 3].style.transform = this.transform(event, 20)
    //   this.$refs[el + 4].style.transform = this.transform(event, -30)
    //   this.$refs[el + 5].style.transform = this.transform(event, 15)
    // }
  }
}

export default {
  name: 'Mine',
  components: { Time, GlassCard },
  setup() {
    return { ...header_parallax() }
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
      padding: 0 4.8rem;
      flex: 1;
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
