import { nextTick, onMounted, onActivated } from 'vue'
export function onMountedOrActivated(hook: () => void) {
  let mounted = false
  onMounted(() => {
    hook()
    nextTick(() => {
      mounted = true
    })
  })
  onActivated(() => {
    if (mounted) {
      hook()
    }
  })
}
