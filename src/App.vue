<template>
  <n-config-provider :theme-overrides="global">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
  <!-- <test></test> -->
</template>

<script lang="ts" setup>
  import test from './test.vue'
import { NMessageProvider, NConfigProvider } from 'naive-ui'
import global from '@/style/global.json'
</script>

