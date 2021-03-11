<template>
  <div id="mine">
    <div class="wrapper flex-center">
      <Left />
      <Right />
      <el-link
        type="info"
        :underline="false"
        class="record"
        href="http://beian.miit.gov.cn/"
        target="_blank"
        >© 2021 Chris. 蜀ICP备2020037206号</el-link
      >
      <div>
        <img
          class="pic1"
          src="http://blog.chrisying.cn/float-1.png"
          alt="failed"
        />
        <img
          class="pic2"
          src="http://blog.chrisying.cn/float-2.png"
          alt="failed"
        />
        <img
          class="pic3"
          src="http://blog.chrisying.cn/float-5.png"
          alt="failed"
        />
        <img
          class="pic4"
          src="http://blog.chrisying.cn/float-6.png"
          alt="failed"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Left from './components/Left.vue'
import Right from './components/Right.vue'
</script>

<style lang="scss" scoped>
#mine {
  height: 100%;
  .wrapper {
    position: relative;
    height: 100%;
    padding: 3.2rem;
    background-image: url('http://blog.chrisying.cn/splatter.png');
    background-size: 1100px 1000px;
    background-position: center;
    .record {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
    }
    .pic1 {
      position: absolute;
      top: 0.5rem;
      left: 0;
      width: 10rem;
    }
    .pic2 {
      position: absolute;
      bottom: 0.5rem;
      right: 0;
      width: 10rem;
    }
    .pic3 {
      position: absolute;
      bottom: 0.5rem;
      left: 0;
      width: 10rem;
    }
    .pic4 {
      position: absolute;
      top: -3.5rem;
      right: 0;
      width: 10rem;
    }
  }
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
