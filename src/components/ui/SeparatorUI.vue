<script setup lang="ts">
import { Separator } from 'reka-ui'
import { computed } from 'vue'

const props = defineProps<{
  orientation?: 'horizontal' | 'vertical'
  class?: string
}>()

const separatorClass = computed(() => {
  return [
    'bg-stone-300/50',
    'my-1',
    props.orientation === 'vertical'
      ? 'h-full w-px'
      : 'h-px w-full',
    props.class || ''
  ].join(' ')
})
</script>

<template>
  <Separator
    :orientation="orientation"
    :class="separatorClass"
  />
</template>
