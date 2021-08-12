import { watch, isRef, unref, onUnmounted, onDeactivated } from 'vue'
import { onMountedOrActivated } from './onMountedOrActivated'
import { inBrowser } from '@/utils'
import type { Ref } from 'vue'
export var supportsPassive = false

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
  if (!inBrowser) {
    return
  }

  var { target = window, passive = false, capture = false } = options
  var attached = false

  var add = (target: any) => {
    var element = unref(target)

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

  var remove = (target: any) => {
    var element = unref(target)

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
