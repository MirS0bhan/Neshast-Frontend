<script setup lang="ts">
import Hero from '@/components/layout/HeroLayout.vue';
import BasePublicPage from './BasePublicPage.vue';
import UpcomingsLayout from '@/components/layout/UpcomingLayout.vue';
import NewsletterLayout from '@/components/layout/NewsletterLayout.vue';

import EventRepo from '@/repos/EventsRepo'
import { ref } from 'vue';

interface Event {
  id: number;
  name: string;
  date: string;
}
// Using .then() to handle the promise and assign it to a constant
const events = ref({}); // Declare a variable outside

EventRepo.getAllUpcomings()
  .then(data => {
    events.value = data; // Assign the resolved data to the variable
    console.log(events); // Now events contains the resolved data
  })
  .catch(error => {
    console.error('Error fetching events:', error);
  });
</script>

<template>
  <BasePublicPage>
    <Hero/>
    <UpcomingsLayout :events="events" />
    <NewsletterLayout/>
  </BasePublicPage>
</template>
