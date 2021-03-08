<template>
  <div class="glassCard">
    <div class="glassRadius"></div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'GlassCard',
  props: {},
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.glassCard {
  width: 400px;
  // height: 550px;
  border-radius: 20px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.1)
  );
  backdrop-filter: blur(3px);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  &::before {
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
  &::after {
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
  .glassRaduis {
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
}
</style>
