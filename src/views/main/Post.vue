<template>
    <div id="post" ref="containerRef" class="relative p-6 divide-y divide-gray-200">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <n-h1
                prefix="bar"
                type="info"
                class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl md:text-[4rem] md:leading-[3.5rem]"
            >Article</n-h1>
            <n-p class="text-lg">All the latest Tailwind CSS news, straight from the team.</n-p>
        </div>
        <div class="flex">
            <div class="left flex-shrink-0 mr-8 py-12 w-1/5">
                <GlassCard class="sticky top-32" height="auto">
                    <div class="h-20"></div>
                </GlassCard>
            </div>
            <List
                class="flex-1"
                v-model:loading="state.loading"
                v-model:error="state.error"
                :finished="state.finished"
                @load="onLoad"
            >
                <ul class="divide-y divide-gray-200">
                    <li v-for="i in state.list" class="py-12">
                        <article
                            class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"
                        >
                            <dl>
                                <dt class="sr-only">Published on</dt>
                                <dd class="text-base font-medium text-gray-500">
                                    <time>July 29, 2021</time>
                                </dd>
                            </dl>
                            <div class="space-y-5 xl:col-span-3">
                                <div class="space-y-6">
                                    <h2 class="text-2xl font-bold tracking-tight">
                                        <a
                                            class="text-gray-900"
                                            href="/headless-ui-v1-4"
                                        >Headless UI v1.4: The One With Tabs</a>
                                    </h2>
                                    <div class="prose max-w-none text-gray-500">
                                        <div class="prose max-w-none">
                                            <n-ellipsis
                                                expand-trigger="click"
                                                line-clamp="3"
                                                :tooltip="false"
                                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, cum rem porro eaque aperiam esse quia libero tempora modi, nulla et autem expedita quo tempore, consequatur fuga minus nostrum sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis veritatis error quia, corrupti vel assumenda vero unde minima beatae sunt aliquam accusantium provident perspiciatis adipisci molestiae suscipit? Beatae, sed animi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus et consequuntur soluta! Enim a pariatur exercitationem! Reprehenderit eum voluptatum expedita voluptas, quo aspernatur ducimus laudantium necessitatibus nisi porro veniam.</n-ellipsis>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-base font-medium">
                                    <router-link
                                        to="/"
                                        class="text-white hover:text-teal-700"
                                    >Read more →</router-link>
                                </div>
                            </div>
                        </article>
                    </li>
                </ul>
            </List>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { ref, reactive } from 'vue'
import { NH1, NP, NEllipsis } from 'naive-ui'
import GlassCard from '@c/GlassCard.vue'
import List from '@/components/List/index.vue'
import { Base } from '@/api'

const state = reactive<{
    list: any[],
    loading: boolean,
    finished: boolean,
    error: boolean
}>({
    list: [],
    loading: false,
    finished: false,
    error: false
})

const onLoad = () => {
    setTimeout(() => {
        for (let i = 0; i < 5; i++) {
            state.list.push(state.list.length + 1);
        }

        // 加载状态结束
        state.loading = false;
        // 数据全部加载完成
        if (state.list.length == 10) {
            state.error = true;
        }

        // 数据全部加载完成
        if (state.list.length >= 20) {
            state.finished = true;
        }
    }, 1000);
};

// const containerRef = ref<HTMLElement | null>(null)


// const fnRef = () => containerRef.value



// // a.js
// const fn = () => ({ a: 1, b: 2 })


// const obj = fn()

// //  module.exports = obj   正确

// // export default obj   错误


// // b.js
// import { a } from './a'















</script>
<style lang='scss' scoped>
</style>
