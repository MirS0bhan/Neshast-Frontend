<script setup lang="ts">
import { defineProps } from 'vue';

// Define the props for this component
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white rounded-lg">
    <div class="h-48 overflow-hidden">
      <img
        :src="props.event.image || '/placeholder.svg'"
        :alt="props.event.title"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div class="p-4">
      <h3 class="text-xl font-semibold">{{ props.event.title }}</h3>

      <div class="text-gray-600 mt-2">
        <p>{{ props.event.date }} • {{ props.event.time }}</p>
        <p>{{ props.event.location }}</p>
      </div>
      <div class="text-lg font-bold mt-3" :class="props.index % 2 === 0 ? 'text-gold' : 'text-green'">
        {{ props.event.price }}
      </div>
    </div>
    <div class="p-4">
      <button
        class="w-full px-4 py-2 rounded"
        :class="props.index % 2 === 0 ? 'bg-gold hover:bg-gold-dark text-gray-800' : 'bg-green hover:bg-green-dark text-white'"
      >
        رزرو کنید
      </button>
    </div>
  </div>
</template>
