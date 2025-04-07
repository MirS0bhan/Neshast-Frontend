<script setup lang="ts">
import { defineProps } from 'vue';
import EventCard from './EventCard.vue'; // Import EventCard component

// Define the props for this component
const props = defineProps({
  events: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <!-- Events Section -->
  <section id="events" class="py-16 container mx-auto px-4">
    <!-- <h2 class="text-3xl font-bold text-center mb-12">رویدادهای آینده</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <EventCard
        v-for="(event, index) in props.events"
        :key="event.id"
        :event="event"
        :index="index"
      />
    </div> -->
  </section>
</template>
