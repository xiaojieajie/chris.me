<template>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
            <img class="h-12 w-12" src="@/assets/logo.png" alt="ChitChat Logo" />
        </div>
        <div>
            <div class="text-xl font-medium text-black">ChitChat</div>
            <p class="text-gray-500">You have a new === message!@#$%^&*()</p>
        </div>
    </div>

    <GlassCard v-for="i in 5" class="mx-auto mt-5 p-10">玻璃拟态</GlassCard>
</template>

<script lang='ts' setup>
import GlassCard from '@c/GlassCard.vue'
import { ref, reactive } from 'vue'

</script>
<style lang='scss' scoped>
</style>
