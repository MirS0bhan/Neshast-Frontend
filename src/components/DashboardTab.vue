<template>
  <TabsTrigger value="a" class="flex items-center gap-4 p-4 bg-white rounded-2xl min-w-max ">
    <component :is="icon" class="w-6 h-6 text-primary-500" />
    <h2 class="text-xl font-semibold text-gray-800">
      {{ title }}
    </h2>
  </TabsTrigger>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  icon: {
    type: Object,
    required: true
  }
})
</script>
