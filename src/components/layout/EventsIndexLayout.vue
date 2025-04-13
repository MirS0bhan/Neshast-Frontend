<script setup lang="ts">
// import { defineProps } from 'vue';
import EventCard from '#/EventCard.vue';
import { Event } from '@/api';
import '@/assets/theme.css'


const props = defineProps({
  events: {
    type: Array<Event>,
    required: true,
  },
});
</script>

<template>
    <h2 class="text-3xl font-bold text-center mb-12 text-white">رویدادهای آینده</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
    <EventCard
      v-for="(event, index) in props.events"
      :key="event.id"
      :event="event"
      :index="index"
    />
  </div>
</template>
