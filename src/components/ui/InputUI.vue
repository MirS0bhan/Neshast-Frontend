<template>
  <div class="flex flex-col gap-1">
    <label v-if="label" :for="id" class="text-sm font-medium text-gray-700">
      {{ label }}
    </label>

    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :class="computedClasses"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />

    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  label?: string
  error?: string
  type?: string
  id?: string
  placeholder?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
}>()

const emit = defineEmits(['update:modelValue'])

const {
  type = 'text',
  size = 'md',
  disabled = false,
  id = `input-${Math.random().toString(36).substr(2, 9)}`,
} = props

const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
}

const computedClasses = computed(() => {
  return [
    'rounded-md border transition duration-200 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))]',
    disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white',
    props.error ? 'border-red-500' : 'border-gray-300',
    sizeClasses[size],
  ].join(' ')
})
</script>
