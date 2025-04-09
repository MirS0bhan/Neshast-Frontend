<script setup lang="ts">
import Navbar from '@/components/layout/NavbarLayout.vue'
import Footer from '@/components/layout/FooterLayout.vue'
</script>

<template>
  <Navbar />
    <slot></slot>
  <Footer />
</template>
