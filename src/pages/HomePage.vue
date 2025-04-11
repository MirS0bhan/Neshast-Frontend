<script setup lang="ts">
import Hero from '@/components/layout/HeroLayout.vue';
import BasePublicPage from './BasePublicPage.vue';
import UpcomingsLayout from '@/components/layout/UpcomingLayout.vue';
import NewsletterLayout from '@/components/layout/NewsletterLayout.vue';

import { ref, onMounted } from 'vue'
import EventsRepo from '@/repos/EventsRepo'
import type { Event } from '@/api/models'

const events = ref<Event[]>([])

onMounted(async () => {
  const res = await EventsRepo.getAllFeatured()
  events.value = res.data
})
</script>

<template>
  <BasePublicPage>
    <Hero/>
    <UpcomingsLayout :events="events" />
    <NewsletterLayout/>
  </BasePublicPage>
</template>
