<template>
  <!-- <Aside /> -->
  <div class="p-6">
    <GlassCard width="100%" height="auto" class="mx-auto">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </GlassCard>
  </div>
</template>

<script lang='ts' setup>
import GlassCard from '@c/GlassCard.vue'
</script>
<style lang='scss' scoped>
</style>
