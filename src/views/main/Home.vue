<template>
    <div id="home" class="flex p-4">
        <div class="left flex flex-col justify-between items-center">
            <n-avatar
                class="cursor-pointer"
                round
                :size="40"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
            <n-icon class="cursor-pointer" color="#fff" size="20">
                <MenuOutline />
            </n-icon>
            <div class="flex flex-col items-center">
                <n-a class="mb-4" href="https://github.com/chris-zhu" target="_blank">
                    <n-icon color="#be95c4" size="20">
                        <LogoGithub />
                    </n-icon>
                </n-a>

                <n-icon class="mb-4 cursor-pointer" color="#be95c4" size="20">
                    <LogoGoogle />
                </n-icon>

                <n-popover trigger="hover" placement="right">
                    <template #trigger>
                        <n-icon class="mb-4 cursor-pointer" color="#be95c4" size="20">
                            <Aperture />
                        </n-icon>
                    </template>
                    <span>/* TODO 将跳转我的摄影网站 待开发 */</span>
                </n-popover>

                <n-icon class="cursor-pointer" color="#be95c4" size="20">
                    <LogoWechat />
                </n-icon>
            </div>
        </div>
        <div class="right flex-1 flex flex-col">
            <div class="head flex justify-end items-center">
                <router-link class="mr-8 text-red-50" to="/">HOME</router-link>
                <router-link class="mr-8 text-red-50" to="/">CONTACT</router-link>
                <div
                    style="width: 40px;height:40px;border:1px solid #fff;"
                    class="flex justify-center items-center rounded-full cursor-pointer"
                >
                    <n-icon color="#fff" size="20">
                        <Person />
                    </n-icon>
                </div>
            </div>
            <div class="body flex-1"></div>
        </div>
    </div>
    <!-- <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
            <img class="h-12 w-12" src="@/assets/logo.png" alt="ChitChat Logo" />
        </div>
        <div>
            <div class="text-xl font-medium text-black">ChitChat</div>
            <p class="text-gray-500">You have a new === message!@#$%^&*()</p>
        </div>
    </div>-->

    <!-- <GlassCard v-for="i in 5" class="mx-auto mt-5 p-10">玻璃拟态</GlassCard> -->
</template>

<script lang='ts' setup>
import { ref, reactive } from 'vue'
import { NAvatar, NIcon, NPopover, NA } from 'naive-ui'
import { Aperture, Person, MenuOutline, LogoGoogle, LogoGithub, LogoWechat, LogoOctocat } from '@vicons/ionicons5'

</script>
<style lang='scss' scoped>
#home {
    height: calc(100vh - 3rem);
}
.left {
    width: 40px;
    height: 100%;
}
</style>
