<template>
  <div id="mine">
    <div class="wrapper flex-center">
      <GlassCard>
        <div class="content">
          <Time />
        </div>
      </GlassCard>
      <div class="icon">
        <div class="box">
          <img src="http://blog.chrisying.cn/layer-0.png" alt="" srcset="" />
          <img
            class="pa"
            src="http://blog.chrisying.cn/layer-1.png"
            alt=""
            srcset=""
          />
          <img
            class="pa"
            src="http://blog.chrisying.cn/layer-2.png"
            alt=""
            srcset=""
          />
          <img
            class="pa"
            src="http://blog.chrisying.cn/layer-3.png"
            alt=""
            srcset=""
          />
          <img
            class="pa"
            src="http://blog.chrisying.cn/layer-4.png"
            alt=""
            srcset=""
          />
          <img
            class="pa"
            src="http://blog.chrisying.cn/layer-5.png"
            alt=""
            srcset=""
          />
          <!-- <img src="http://blog.chrisying.cn/hero.png" alt="" srcset="" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'
import Time from '@c/Time/index.vue'
import GlassCard from '@c/GlassCard/index.vue'
export default {
  name: 'Mine',
  components: { Time, GlassCard },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#mine {
  height: 100%;
  .wrapper {
    height: 100%;
    padding: 3.2rem;
    background: url('http://blog.chrisying.cn/splatter.png');
    background-size: 50%;
    background-position: center;
    .icon {
      max-width: 900px;
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
.card {
  width: 400px;
  height: 550px;
  border-radius: 20px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.1)
  );
  backdrop-filter: blur(3px);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
}

.card .radius {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #fff;
  clip: rect(0, 20px, 20px, 0);
  z-index: -1;
}

.card::before {
  content: '';
  display: block;
  width: calc(100% - 40px);
  height: 1px;
  position: absolute;
  top: 0px;
  left: 20px;
  background: linear-gradient(to right, #fff, transparent);
  z-index: 2;
  border-radius: 20px;
}

.card::after {
  content: '';
  display: block;
  width: 1px;
  height: calc(100% - 40px);
  position: absolute;
  top: 20px;
  left: 0px;
  background: linear-gradient(to bottom, #fff, transparent);
  z-index: 2;
  border-radius: 20px;
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
