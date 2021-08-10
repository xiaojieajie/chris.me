<template>
    <div id="post" class="p-6 divide-y divide-gray-200">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <n-h1
                prefix="bar"
                type="info"
                class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl md:text-[4rem] md:leading-[3.5rem]"
            >Article</n-h1>
            <n-p class="text-lg">
                <n-text>All the latest Tailwind CSS news, straight from the team.</n-text>
            </n-p>
        </div>
        <ul class="divide-y divide-gray-200">
            <li v-for="i in 10" class="py-12">
                <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                        <dt class="sr-only">Published on</dt>
                        <dd class="text-base font-medium text-gray-500">
                            <time datetime="2021-07-29T12:00:00.000Z">July 29, 2021</time>
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
                                    <p>
                                        We just released Headless UI v1.4, which includes a brand new
                                        <n-text code>Tab</n-text>component, and new APIs for manually closing
                                        <n-text code>Popover</n-text>and
                                        <n-text code>Disclosure</n-text>components more easily.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="text-base font-medium">
                            <a
                                class="text-teal-600 hover:text-teal-700"
                                aria-label="Read &quot;Headless UI v1.4: The One With Tabs&quot;"
                                href="/headless-ui-v1-4"
                            >Read more →</a>
                        </div>
                    </div>
                </article>
            </li>
        </ul>
    </div>
</template>

<script lang='ts' setup>
import { ref, reactive } from 'vue'
import { NH1, NP, NText } from 'naive-ui'

</script>
<style lang='scss' scoped>
</style>
