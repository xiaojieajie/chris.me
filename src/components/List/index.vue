<template>
  <div class="list" ref="root">
    <slot />
    <!-- loading -->
    <div class="flex justify-center items-center" key="loading">
      <n-spin :size="12" />
      <NGradientText class="ml-2">{{ loadingText }}</NGradientText>
    </div>
    <!-- error -->
    <div class="text-center" key="error">
      <div class="flex justify-center items-center" @click="clickErrorText">
        <n-icon :size="14" color="#D54562">
          <WarningOutline />
        </n-icon>
        <NGradientText type="error" class="ml-2">{{ errorText }}</NGradientText>
      </div>
    </div>
    <!-- finish -->
    <div class="flex justify-center items-center" key="finish">
      <NGradientText type="info" class="ml-2">{{ finishedText }}</NGradientText>
    </div>
    <!-- placeholder -->
    <div class="h-0" ref="placeholder"></div>
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive, nextTick, onUnmounted, onMounted, watch, onUpdated } from 'vue'
import { NSpin, NGradientText, NIcon } from 'naive-ui'
import { WarningOutline } from '@vicons/ionicons5'
import { useScrollParent, isHidden } from './useScrollParent'
import { useRect } from './useRect'
import { useEventListener } from './useEventListener'

interface IProps {
  loading?: boolean
  error?: boolean
  finished?: boolean
  errorText?: string
  loadingText?: string
  finishedText?: string
  immediateCheck?: boolean
  offset?: string | number
  direction?: string
}



const props = withDefaults(defineProps<IProps>(), {
  loading: false,
  error: false,
  finished: false,
  errorText: '出错啦···',
  loadingText: '加载中···',
  finishedText: '没有更多数据啦···',
  immediateCheck: true,
  offset: 300,
  direction: 'down',
})

const emit = defineEmits(['load', 'update:error', 'update:loading'])

defineExpose({ check })

const root = ref<HTMLElement>()
const placeholder = ref<HTMLElement>()

const loading = ref(false)
const scrollParent = useScrollParent(root)

function check() {
  // 监听组件的状态
  nextTick(() => {
    if (loading.value || props.finished || props.error) {
      return
    }
    const { offset, direction } = props
    const scrollParentRect = useRect(scrollParent)
    if (!scrollParentRect.height || isHidden(root)) {
      return;
    }
    let isReachEdge = false;
    const placeholderRect = useRect(placeholder)

    if (direction === 'up') {
      isReachEdge = scrollParentRect.top - placeholderRect.top <= offset;
    } else {
      isReachEdge = placeholderRect.bottom - scrollParentRect.bottom <= offset;
    }

    if (isReachEdge) {
      loading.value = true;
      emit('update:loading', true);
      emit('load');
    }
  })
}

function clickErrorText() {
  emit('update:error', false)
  check()
}

useEventListener('scroll', check, {
  target: scrollParent
})

watch([() => props.loading, () => props.finished, () => props.error], check)

onMounted(() => {
  if (props.immediateCheck) {
    check()
  }
})

onUpdated(() => {
  loading.value = props.loading
})

</script>
