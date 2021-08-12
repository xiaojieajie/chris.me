import { ref, onMounted } from 'vue'
import { inBrowser } from '@/utils'
import { Ref, unref } from 'vue'
const overflowScrollReg = /scroll|auto/i
const defaultRoot = inBrowser ? window : undefined

function isElement(node: Element) {
  const ELEMENT_NODE_TYPE = 1
  return (
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === ELEMENT_NODE_TYPE
  )
}

export function getScrollParent(
  el: Element,
  root = defaultRoot
): Window | Element | undefined {
  let node = el

  while (node && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node)

    if (overflowScrollReg.test(overflowY)) {
      return node
    }

    node = node.parentNode as Element
  }

  return root
}

export function useScrollParent(
  el: Ref<Element | undefined>,
  root = defaultRoot
) {
  let scrollParent = ref()
  onMounted(() => {
    if (el.value) {
      scrollParent.value = getScrollParent(el.value, root)
    }
  })
  return scrollParent
}

export function isHidden(
  elementRef: HTMLElement | Ref<HTMLElement | undefined>
): boolean {
  const el = unref(elementRef)

  if (!el) {
    return false
  }

  const style = window.getComputedStyle(el)
  const hidden = style.display === 'none' // offsetParent returns null in the following situations:
  // 1. The element or its parent element has the display property set to none.
  // 2. The element has the position property set to fixed

  const parentHidden = el.offsetParent === null && style.position !== 'fixed'
  return hidden || parentHidden
}
