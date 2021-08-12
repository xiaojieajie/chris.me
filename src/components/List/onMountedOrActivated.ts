import { nextTick, onMounted, onActivated } from 'vue'
export function onMountedOrActivated(hook: () => void) {
  var mounted = false
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
