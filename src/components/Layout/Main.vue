<template>
  <Aside />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang='ts' setup>
import Aside from './Aside.vue'
</script>
<style lang='scss' scoped>
</style>
