<script setup lang="ts">
import { defineProps } from 'vue'
import temp_thumb from '@/assets/temp-thumb.svg'
// Define the props for this component
import type { Event } from '@/api/models/event'
import ButtonUI from './ui/ButtonUI.vue'

const props = defineProps<{
  event: Event
  index: number
}>()
</script>

<template>
  <div class="overflow-hidden rounded-lg bg-white transition-all duration-300 hover:shadow-lg">
    <div class="h-48 overflow-hidden">
      <img
        :src="props.event.image || temp_thumb"
        :alt="props.event.title"
        class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div class="p-4">
      <h3 class="text-xl font-semibold">{{ props.event.title }}</h3>

      <div class="mt-2 text-gray-600">
        <p>{{ props.event.start_date }} • {{ props.event.end_date }}</p>
        <p>{{ props.event.location }}</p>
      </div>
      <!-- <div class="text-lg font-bold mt-3" :class="props.index % 2 === 0 ? 'text-gold' : 'text-green'">
        {{ props.event.price }}
      </div> -->
    </div>
    <div class="p-4">
      <ButtonUI> رزرو کنید </ButtonUI>
    </div>
  </div>
</template>
