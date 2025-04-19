<template>
  <div>
    <div class="flex flex-col gap-1">
      <Label v-if="label" :for="id" class="mb-1 block">{{ label }}</Label>
      <textarea
        :id="id"
        v-bind="$attrs"
        v-model="modelValue"
        class="rounded-md border border-gray-300 bg-white px-4 py-2 text-base transition duration-200 focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:outline-none"
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder="توضیحاتی درباره سازمان وارد کنید"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Label } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  label?: string
  id?: string
}>()

const modelValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const emit = defineEmits(['update:modelValue'])
</script>
