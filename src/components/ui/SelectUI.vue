<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import '@/assets/theme.css'
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectViewport,
} from 'reka-ui'

type OptionItem = {
  label: string
  value: string | number
  disabled?: boolean
}

const props = defineProps<{
  modelValue: string | number | null
  options: OptionItem[]
  label?: string
  id?: string
  placeholder?: string
}>()

const emit = defineEmits(['update:modelValue'])

const modelValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>

<template>
  <div class="p-2">
    <label v-if="label" :for="id" class="mb-1 block text-sm text-gray-700">
      {{ label }}
    </label>

    <SelectRoot v-model="modelValue">
      <SelectTrigger
        :id="id"
        class="inline-flex h-[40px] w-full items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-900 hover:bg-[rgb(var(--color-primary))] focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
        aria-label="Select"
        dir="rtl"
      >
        <Icon icon="radix-icons:chevron-down" class="h-4 w-4" />
        <SelectValue :placeholder="placeholder || 'Select an option...'" />
      </SelectTrigger>

      <SelectPortal>
        <SelectContent
          class="z-[100] min-w-[180px] rounded-lg border bg-white shadow-md"
          :side-offset="5"
        >
          <SelectViewport class="p-1">
            <SelectItem
              v-for="item in options"
              :key="item.value"
              :value="item.value"
              :disabled="item.disabled"
              class="custom-select-item"
            >
              <SelectItemIndicator class="indicator-icon">
                <Icon icon="radix-icons:check" />
              </SelectItemIndicator>
              <SelectItemText>{{ item.label }}</SelectItemText>
            </SelectItem>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </div>
</template>

<!-- <style scoped>
.custom-select-item {
  @apply relative flex items-center rounded-md pr-8 pl-6 text-sm text-gray-800 select-none data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[highlighted]:bg-green-600 data-[highlighted]:text-white data-[highlighted]:outline-none;
}

.indicator-icon {
  @apply absolute left-0 inline-flex w-6 items-center justify-center;
}
</style> -->
