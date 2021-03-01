<template>
  <div class="Cbtn"
       :style="style">
    <div class="content">
      <slot />
    </div>
    <div class="rect">
      <i class="r r1"></i>
      <i class="r r2"></i>
      <i class="r r3"></i>
      <i class="r r4"></i>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import { addUnit } from '/@/utils'
export default defineComponent({
  name: 'Cbtn',
  props: {
    color: {
      type: String,
      default: '#fff'
    },
    beforeBgColor: {
      type: String,
      default: '#fff'
    },
    hoverColor: {
      type: String,
      default: '#d81b60'
    },
    borderWidth: {
      type: [String, Number],
      default: '2px'
    },
    borderStyle: {
      type: String,
      default: 'solid'
    },
    borderColor: {
      type: String,
      default: (props: any) => props.color
    }
  },
  setup(props) {
    const style = computed(() => ({
      border: `${addUnit(props.borderWidth)} ${props.borderStyle} ${
        props.borderColor
      }`,
      '--color': props.color,
      '--borderColor': props.borderColor,
      '--hoverColor': props.hoverColor,
      '--beforeBgColor': props.beforeBgColor
    }))
    return { style }
  }
})
</script>

<style lang='scss' scoped>
.Cbtn {
  transform: matrix(1, 0, 0, 1, 0, 0);
  padding: 15px 26px 15px 33px;
  color: var(--color);
  &:hover {
    color: var(--hoverColor);
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
  }
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    z-index: -1;
    background: var(--beforeBgColor);
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
      background: var(--borderColor);
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
  .content {
    position: relative;
    z-index: 2;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>