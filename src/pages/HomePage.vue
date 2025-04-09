<script setup lang="ts">
import Hero from '@/components/layout/HeroLayout.vue';
import BasePublicPage from './BasePublicPage.vue';
import EventSection from '@/components/EventSection.vue';
import NewsletterLayout from '@/components/layout/NewsletterLayout.vue';

const events = [{}]

</script>

<template>
  <BasePublicPage>
    <Hero/>
    <EventSection :events="events" />
    <NewsletterLayout/>
  </BasePublicPage>
</template>
