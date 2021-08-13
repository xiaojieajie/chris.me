import { watch, isRef, unref, onUnmounted, onDeactivated } from 'vue'
import { onMountedOrActivated } from './onMountedOrActivated'
import type { Ref } from 'vue'
export let supportsPassive = false

type TargetRef = EventTarget | Ref<EventTarget | undefined>

interface IOpts {
  target?: TargetRef
  capture?: boolean
  passive?: boolean
}

export function useEventListener(
  type: string,
  listener: () => void,
  options: IOpts
) {
  let { target = window, passive = false, capture = false } = options
  let attached = false

  let add = (target: any) => {
    let element = unref(target)

    if (element && !attached) {
      element.addEventListener(
        type,
        listener,
        supportsPassive
          ? {
              capture,
              passive
            }
          : capture
      )
      attached = true
    }
  }

  let remove = (target: any) => {
    let element = unref(target)

    if (element && attached) {
      element.removeEventListener(type, listener, capture)
      attached = false
    }
  }

  onUnmounted(() => remove(target))
  onDeactivated(() => remove(target))
  onMountedOrActivated(() => add(target))

  if (isRef(target)) {
    watch(target, (val: any, oldVal: any) => {
      remove(oldVal)
      add(val)
    })
  }
}
