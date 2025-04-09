<script setup lang="ts">
// import { defineProps } from 'vue';
import EventCard from '#/EventCard.vue';
import '@/assets/theme.css'

interface Event {
  id: number;
  name: string;
  date: string;
}

const props = defineProps({
  events: {
    type: Array<Event>,
    required: true,
  },
});
</script>

<template>
  <!-- Events Section -->
  <section id="events" class="py-16  mx-auto px-4 bg-[rgb(var(--color-primary))]">
    <h2 class="text-3xl font-bold text-center mb-12 text-white">رویدادهای آینده</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 gap-8">
      <EventCard
        v-for="(event, index) in props.events"
        :key="event.id"
        :event="event"
        :index="index"
      />
    </div>
  </section>
</template>
