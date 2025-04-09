<template>
  <button
    :class="computedClasses"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <span v-if="loading" class="mr-2 animate-spin">
      <slot name="spinner">
        <i class="ri-loader-4-line" />
      </slot>
    </span>

    <span v-if="$slots.icon && !loading" class="mr-2">
      <slot name="icon" />
    </span>

    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import '@/assets/theme.css'

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
}>()

const {
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
} = props

const baseClasses =
  'inline-flex items-center justify-center font-medium rounded-md transition duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
}

const variantClasses = {
  primary: 'bg-[rgb(var(--color-primary))] text-white hover:bg-[rgb(var(--color-primary)/0.5)]',
  secondary: 'bg-[rgb(var(--color-secondary))] text-white hover:bg-[rgb(var(--color-secondary)/0.8)]',
  danger: 'bg-[rgb(var(--color-danger))] text-white hover:bg-[rgb(var(--color-danger)/0.8)]',
  outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100',
}

const computedClasses = computed(() => {
  return [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
  ].join(' ')
})
</script>
