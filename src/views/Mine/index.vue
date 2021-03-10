<template>
  <div id="mine">
    <div class="wrapper flex-center">
      <GlassCard class="info">
        <div class="content">
          <h1 class="title fontzy gradient-text">
            BLOG <span class="by">by</span> CHRIS
          </h1>
          <div class="stage">
            <el-avatar
              class="avatar"
              :size="80"
              src="http://blog.chrisying.cn/avatar.jpg"
            >
            </el-avatar>
          </div>
          <div class="btn-group flex">
            <button class="flex-center theme">
              <svg
                class="dark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 15"
              >
                <path
                  d="M7.707.003a.5.5 0 00-.375.846 6 6 0 01-5.569 10.024.5.5 0 00-.519.765A7.5 7.5 0 107.707.003z"
                ></path>
              </svg>
            </button>
            <button class="flex-center theme">
              <svg
                class="light"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 15"
              >
                <path
                  d="M8 2V0H7v2h1zm-4.793.498L1.5.792.793 1.5 2.5 3.206l.707-.708zm9.293.708L14.207 1.5 13.5.792l-1.707 1.706.707.708zm-5 .791a3.499 3.499 0 100 6.996 3.499 3.499 0 100-6.996zM2 6.995H0v1h2v-1zm13 0h-2v1h2v-1zM1.5 14.199l1.707-1.707-.707-.707-1.707 1.706.707.708zm12.707-.708L12.5 11.785l-.707.707L13.5 14.2l.707-.708zM8 14.99v-1.998H7v1.999h1z"
                ></path>
              </svg>
            </button>
          </div>
          <div class="readBtn">
            <div class="content">
              <span class="text">Read</span>
              <svg
                class="next"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 23 14"
                xml:space="preserve"
              >
                <line x1="22" y1="7" x2="16" y2="1"></line>
                <line x1="22" y1="7" x2="16" y2="13"></line>
                <line x1="0" y1="7" x2="23" y2="7"></line>
              </svg>
            </div>
            <div class="rect">
              <i class="r r1"></i>
              <i class="r r2"></i>
              <i class="r r3"></i>
              <i class="r r4"></i>
            </div>
          </div>
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
    // background: linear-gradient(
    //     234.48deg,
    //     rgba(20, 255, 86, 0.32) 18.43%,
    //     rgba(255, 255, 255, 0) 59.49%
    //   ),
    //   linear-gradient(180deg, #feefff 0%, rgba(255, 255, 255, 0) 100%),
    //   linear-gradient(251.16deg, #cddefd 14.97%, rgba(255, 255, 255, 0) 88.15%),
    //   #deffe5;
    background-size: 50%;
    background-position: center;
    .info {
      > .content {
        padding: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .readBtn {
          transform: matrix(1, 0, 0, 1, 0, 0);
          padding: 15px 26px 15px 33px;
          color: rgba(131, 175, 155, 1);
          border: 2px solid rgba(131, 175, 155, 1);
          transition: border 1s, border-radius 1s;
          &:hover {
            color: #fff;
            overflow: hidden;
            border-radius: 8px;
            border-color: transparent;
            transform: translate(2px, 2px);
            transition: color 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
            cursor: pointer;
            &::before {
              width: 100%;
              transition: width 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
            }
            .rect {
              right: -6px;
              bottom: -6px;
            }
            .next {
              line {
                stroke: #fff !important;
              }
            }
          }
          &::before {
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 100%;
            z-index: -1;
            background: linear-gradient(
              264.51deg,
              #ffe580 4.38%,
              #ff7571 11.51%,
              #ff7270 25.06%,
              #ea5dad 36.04%,
              #c2a0fd 47.63%,
              #9867f0 59.03%,
              #42ba96 69.96%,
              #20c997 83.74%,
              #b2f4b6 95.62%
            );
            background-position: 58% 50%;
            background-size: 800%;
            animation: gradient-shift 25s ease infinite;
            content: '';
            display: block;
            transition: width 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
          }
          .rect {
            position: absolute;
            right: -8px;
            bottom: -8px;
            width: 100%;
            height: 100%;
            .r {
              position: absolute;
              background: rgba(200, 200, 169, 1);
              &.r1 {
                width: 2px;
                height: 6px;
                bottom: 0;
                left: 0;
              }
              &.r2 {
                height: 2px;
                bottom: 0;
                left: 0;
                width: 100%;
              }
              &.r3 {
                width: 2px;
                top: 0;
                height: 100%;
                right: 0;
              }
              &.r4 {
                width: 6px;
                height: 2px;
                right: 0;
                top: 0;
              }
            }
          }

          > .content {
            position: relative;
            z-index: 2;
            display: inline-flex;
            align-items: center;
            .text {
              display: inline-block;
              font-size: 1.5rem;
            }
            .next {
              display: inline-block;
              vertical-align: middle;
              width: 23px;
              height: 14px;
              margin-left: 40px;
              margin-top: 0;
              top: auto;
              right: auto;
              position: relative;
              line {
                stroke: rgba(131, 175, 155, 1);
                stroke-width: 2px;
              }
            }
          }
        }
        .stage {
          font-size: 0;
          .avatar {
            &:hover {
              cursor: pointer;
              animation: run linear 1s;
            }
          }
        }
        .theme {
          padding: 0.8rem;
          background-color: #eaeaea;
          border-radius: 50%;
          border: none;
          outline: none;
          transition: all ease-in-out 0.35s;
          &:hover {
            cursor: pointer;
            background-color: #e2e8f0;
          }
          .dark,
          .light {
            color: rgba($color: #000000, $alpha: 0.75);
            width: 1.6rem;
            height: 1.6rem;
          }
        }
        .title {
          font-size: 8rem;
          color: #fff;
          display: flex;
          align-items: center;
          .by {
            font-size: 2rem;
            margin: 0 2rem;
          }
          // vertical-align: middle;
        }
      }
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
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
