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
        >蜀ICP备2020037206号</el-link
      >
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
    background-size: 50%;
    background-position: center;
    .record {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
