<template>
  <main class="p-6">
    <GlassCard width="100%" height="auto" radius="10" class="mx-auto">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </GlassCard>
  </main>
</template>

<script lang='ts' setup>
import GlassCard from '@c/GlassCard.vue'
</script>
