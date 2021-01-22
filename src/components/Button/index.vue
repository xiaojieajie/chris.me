<template>
  <div class="cbutton">
    <span>All features</span>
    <svg class="next"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         x="0px"
         y="0px"
         viewBox="0 0 23 14"
         xml:space="preserve">
      <line x1="22"
            y1="7"
            x2="16"
            y2="1"></line>
      <line x1="22"
            y1="7"
            x2="16"
            y2="13"></line>
      <line x1="0"
            y1="7"
            x2="23"
            y2="7"></line>
    </svg>
    <div class="rect">
      <i class="r1"></i>
      <i class="r2"></i>
      <i class="r3"></i>
      <i class="r4"></i>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
  name: 'button',
  props: {
    type: {
      type: String,
      default: 'I'
    }
  },
  components: {},
  setup() {
    return {}
  }
})
</script>

<style lang='scss' scoped>
.cbutton {
  transform: matrix(1, 0, 0, 1, 0, 0);
  background: 0 0;
  border: 2px solid #fff;
  padding: 15px 26px 15px 33px;
  color: #fff;
  &:hover {
    color: #d81b60;
    transform: translate(2px, 2px);
    transition: color 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    cursor: pointer;
    &::before {
      width: 100%;
      transition: width 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    z-index: -1;
    background: #c2185b;
    content: '';
    display: block;
    transition: width 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .rect {
    width: 100%;
    height: 100%;
    position: absolute;
    right: -8px;
    bottom: -8px;
    .r1,
    .r2,
    .r3,
    .r4 {
      position: absolute;
      background: #fff;
    }
    .r1 {
      width: 2px;
      height: 6px;
      bottom: 0;
      left: 0;
    }
    .r2 {
      height: 2px;
      bottom: 0;
      left: 0;
      width: 100%;
    }
    .r3 {
      width: 2px;
      top: 0;
      height: 100%;
      right: 0;
    }
    .r4 {
      width: 6px;
      height: 2px;
      right: 0;
      top: 0;
    }
  }
  span {
    position: relative;
    z-index: 2;
    display: inline-block;
    vertical-align: middle;
  }
  svg {
    display: inline-block;
    vertical-align: middle;
    width: 23px;
    height: 14px;
    z-index: 2;
    margin-left: 35px;
    margin-top: 0;
    top: auto;
    right: auto;
    position: relative;
    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    line {
      stroke: #fff;
      stroke-width: 2px;
    }
  }
}
</style>