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

const base = 'inline-flex items-center justify-center font-medium rounded-2xl transition duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
  outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100',
  danger: 'bg-red-600 text-white hover:bg-red-700',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
}

const computedClasses = computed(() => {
  return [base, variantClasses[variant], sizeClasses[size]].join(' ')
})
</script>
