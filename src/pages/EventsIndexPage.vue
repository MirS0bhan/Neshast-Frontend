<script setup lang="ts">
import EventsRepo from '@/repos/EventsRepo'
import { onMounted, ref } from 'vue'
import BasePublicPage from './BasePublicPage.vue'
import EventsIndexLayout from '@/components/layout/EventsIndexLayout.vue'

const events = ref()
onMounted(async () => {
  const res = await EventsRepo.getAllEvents()
  events.value = res.data
})


</script>

<template>
  <BasePublicPage>
    <div class="min-h-screen p-5 pt-0">
      <EventsIndexLayout :events="events" />
    </div>
  </BasePublicPage>
</template>
