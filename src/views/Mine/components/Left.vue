<template>
  <GlassCard class="Left" blur="6px">
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
      <!-- <div class="btn-group flex">
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
      </div> -->
      <LinerBtn
        class="linerBtn"
        border-color="#83af9b"
        color="#83af9b"
        before-bg-color="#83af9b"
        hover-color="#fff"
        inner-border-color="#C8C8A9"
        @click="handleRead"
      >
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
      </LinerBtn>
    </div>
  </GlassCard>
</template>

<script lang="ts" setup>
import GlassCard from '@c/GlassCard/index.vue'
import LinerBtn from './linerBtn.vue'
import { inject, onMounted } from 'vue'
interface fn {
  (): void
}
let next: fn
onMounted(() => {
  next = inject('next') as fn
})
const handleRead = () => {
  next()
}
</script>

<style lang="scss" scoped>
.Left {
  position: relative;
  z-index: 2;
  > .content {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .linerBtn {
      .text {
        display: inline-block;
        font-size: 1.4rem;
      }
      .next {
        width: 20px;
        height: 14px;
        margin-left: 40px;
        line {
          stroke: #83af9b;
          stroke-width: 2px;
        }
      }
      &:hover {
        line {
          stroke: var(--hoverColor);
        }
      }
    }

    .stage {
      margin: 2rem 0 4rem;
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
      background-color: #f1f5f9;
      border-radius: 50%;
      border: none;
      outline: none;
      transition: all ease-in-out 0.2s;
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
    }
  }
}
@media screen and (max-width: 991px) {
  .Left {
    flex: 1;
    > .content {
      .stage {
        .avatar {
          width: 10rem !important;
          height: 10rem !important;
        }
      }
      .theme {
        padding: 0.8rem;
        background-color: #f1f5f9;
        border-radius: 50%;
        border: none;
        outline: none;
        transition: all ease-in-out 0.2s;
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
        font-size: 7rem;
        line-height: 1.5;
        .by {
          font-size: 4rem;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .Left {
    flex: 1;
    > .content {
      .stage {
        .avatar {
          width: 10rem !important;
          height: 10rem !important;
        }
      }
      .title {
        font-size: 6rem;
        flex-direction: column;
        line-height: 1.5;
        .by {
          font-size: 3rem;
        }
      }
    }
  }
}
</style>
