<template>
  <div class="glassCard" :style="style">
    <div class="glassRadius"></div>
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { addUnit } from '@/utils'
export default defineComponent({
  name: 'GlassCard',
  props: {
    width: {
      type: [String, Number],
      default: '100%'
    },
    height: {
      type: [String, Number],
      default: 'auto'
    },
    radius: {
      type: String,
      default: '2rem'
    },
    blur: {
      type: String,
      default: '3px'
    }
  },
  setup(props) {
    const style = computed(() => ({
      width: addUnit(props.width),
      height: addUnit(props.height),
      borderRadius: props.radius,
      backdropFilter: `blur(${props.blur})`,
      '--radius': props.radius
    }))
    return { style }
  }
})
</script>

<style lang="scss" scoped>
.glassCard {
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.1)
  );
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  &::before {
    content: '';
    display: block;
    width: calc(100% - 2 * var(--radius));
    height: 1px;
    position: absolute;
    top: 0px;
    left: var(--radius);
    background: linear-gradient(to right, #fff, transparent);
    z-index: 2;
  }
  &::after {
    content: '';
    display: block;
    width: 1px;
    height: calc(100% - 2 * var(--radius));
    position: absolute;
    top: var(--radius);
    left: 0px;
    background: linear-gradient(to bottom, #fff, transparent);
    z-index: 2;
  }
  .glassRadius {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(2 * var(--radius));
    height: calc(2 * var(--radius));
    border-radius: 50%;
    border: 1px solid #fff;
    clip: rect(0, var(--radius), var(--radius), 0);
    z-index: -1;
  }
}
</style>
