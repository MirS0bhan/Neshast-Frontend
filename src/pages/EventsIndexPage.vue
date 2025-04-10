<script setup lang="ts">
import EventsRepo from '@/repos/EventsRepo'
import { ref } from 'vue'
import BasePublicPage from './BasePublicPage.vue'
import EventsIndexLayout from '@/components/layout/EventsIndexLayout.vue'

const events = ref({})

EventsRepo.getPublicEvents()
  .then((data) => {
    events.value = data
    console.log(events)
  })
  .catch((error) => {
    console.error('Error fetching events:', error)
  })
</script>

<template>
  <BasePublicPage>
    <div class="min-h-screen p-5 pt-0">
      <EventsIndexLayout :events="events" />
    </div>
  </BasePublicPage>
</template>
