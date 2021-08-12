import { Ref } from 'vue'
import { unref } from 'vue'

function isWindow(val: any) {
  return val === window
}

function makeDOMRect(width: number, height: number) {
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  }
}

export var useRect = (
  elementOrRef: Element | Window | Ref<Element | Window | undefined>
) => {
  const element = unref(elementOrRef)

  if (isWindow(element)) {
    const width = (element as Window).innerWidth
    const height = (element as Window).innerHeight
    return makeDOMRect(width, height)
  }

  if (element && (element as Element).getBoundingClientRect) {
    return (element as Element).getBoundingClientRect()
  }

  return makeDOMRect(0, 0)
}
