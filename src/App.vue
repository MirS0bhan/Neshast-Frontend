<script setup lang="ts">
// import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Newsletter from '@/components/Newsletter.vue'
import EventSection from '@/components/EventSection.vue';



const events = [
  {
    id: 1,
    title: 'جشنواره موسیقی تابستانی',
    image: '/placeholder.svg?height=200&width=400',
    price: '۴۹.۹۹ دلار',
    date: '۱۵ جولای ۲۰۲۵',
    time: '۴:۰۰ بعدازظهر',
    location: 'پارک مرکزی',
  },
  {
    id: 2,
    title: 'کنفرانس فناوری ۲۰۲۵',
    image: '/placeholder.svg?height=200&width=400',
    price: '۱۴۹.۹۹ دلار',
    date: '۱۰ آگوست ۲۰۲۵',
    time: '۹:۰۰ صبح',
    location: 'مرکز همایش‌ها',
  },
  // سایر رویدادها
];
</script>

<template>
  <Navbar/>
  <div class="min-h-screen bg-gray-50">
    <EventSection :events="events" />

    <Newsletter/>
    <Footer/>
  </div>
</template>


