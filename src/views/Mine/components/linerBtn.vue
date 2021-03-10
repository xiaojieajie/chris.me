<template>
  <button class="LinerBtn" :style="style">
    <div class="content">
      <slot />
    </div>
    <div class="rect">
      <i class="r r1"></i>
      <i class="r r2"></i>
      <i class="r r3"></i>
      <i class="r r4"></i>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { addUnit } from '@/utils'
export default defineComponent({
  name: 'LinerBtn',
  props: {
    /** 文字颜色 */
    color: {
      type: String,
      default: '#fff'
    },
    /** hover后 ::before 背景颜色 */
    beforeBgColor: {
      type: String,
      default: '#fff'
    },
    /**
     * hover 文字颜色
     */
    hoverColor: {
      type: String,
      default: '#d81b60'
    },
    /** boder */
    borderWidth: {
      type: [String, Number],
      default: '2px'
    },
    /** boder */
    borderStyle: {
      type: String,
      default: 'solid'
    },
    /** boder */
    borderColor: {
      type: String,
      default: (props: any) => props.color
    },
    /** 后边框颜色 */
    innerBorderColor: {
      type: String,
      default: (props: any) => props.borderColor
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
      '--beforeBgColor': props.beforeBgColor,
      '--innerBorderColor': props.innerBorderColor
    }))
    return { style }
  }
})
</script>

<style lang="scss" scoped>
.LinerBtn {
  transform: matrix(1, 0, 0, 1, 0, 0);
  padding: 15px 26px 15px 33px;
  color: var(--color);
  background: transparent;
  outline: none;
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
      .r1 {
        height: 4px !important;
      }
      .r4 {
        width: 4px !important;
      }
    }
  }
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
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
      z-index: -1;
      background: var(--innerBorderColor);
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
    z-index: 1;
    display: inline-flex;
    align-items: center;
  }
}
</style>
