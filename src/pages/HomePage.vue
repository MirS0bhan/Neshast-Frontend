<script setup lang="ts">
import Navbar from '@/components/layout/NavbarLayout.vue'
import Footer from '@/components/layout/FooterLayout.vue'
</script>

<template>
  <Navbar />
  <div class="min-h-screen bg-gray-50">
    <!-- <EventSection :events="events" /> -->

    <Newsletter/>

  </div>
  <Footer />
</template>
