<script lang="ts" setup>
/** 根据size获取组件的宽高 */
const useSize = (
  size: 'small' | 'medium' | 'large'
): {
  _width: string
  _height: string
} => {
  const sizeEnum = {
    small: ['2rem', '1.125rem'],
    medium: ['2.5rem', '1.375rem'],
    large: ['3rem', '1.625rem']
  }
  return {
    _width: sizeEnum[size][0],
    _height: sizeEnum[size][1]
  }
}

const props = withDefaults(
  defineProps<{
    size?: 'small' | 'medium' | 'large'
    value?: string | number | boolean
    loading?: boolean
    defaultValue?: string | number | boolean
    disabled?: boolean
    bgColor?: string
    bgActiveColor?: string
  }>(),
  {
    size: 'medium',
    defaultValue: false,
    disabled: false,
    bgColor: 'rgba(0, 0, 0, 0.14)',
    bgActiveColor: '#60bc95'
  }
)

const emits = defineEmits<{
  (event: 'change', status: boolean): void
  (event: 'update:value', status: boolean): void
}>()

const status = useVModel(props, 'value', emits)
const { _width, _height } = useSize(props.size)
const _bgColor = computed(() => props.bgColor)
const _bgActiveColor = computed(() => props.bgActiveColor)

const handleClick = () => {
  if (!props.disabled) {
    status.value = !status.value
    emits('change', status.value)
  }
}
</script>

<template>
  <div
    class="switch border-$default"
    :class="[disabled && 'op-50', status && 'active']"
    rounded-full
    overflow-hidden
    border
    relative
    @click="handleClick"
  >
    <div absolute rounded-full class="switch__button bg-[#fff]"></div>
  </div>
</template>

<style lang="scss" scoped>
$dotWidth: calc(v-bind(_height) - 4px);
$dotHeight: calc(v-bind(_height) - 4px);

.switch {
  width: v-bind(_width);
  height: v-bind(_height);
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: v-bind(_bgColor);

  &:focus {
    box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.2);
  }

  &.active {
    background-color: v-bind(_bgActiveColor);
    .switch__button {
      left: calc(100% - $dotWidth - 1px);
    }
  }

  &__button {
    left: 1px;
    top: 1px;
    width: $dotWidth;
    height: $dotHeight;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
}
</style>
