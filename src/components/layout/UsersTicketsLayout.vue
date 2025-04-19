<script setup lang="ts">
import { Ticket } from '@/api';
import UserRepo from '@/repos/UserRepo';
import { onMounted, ref } from 'vue';

const data = ref<Ticket[]>()
onMounted(async () => {
  data.value = await UserRepo.getUserTickets()
})
</script>
<template>
  <p>dsfasdf</p>
  <div v-for="item in data" :key="item.id">
    <p>{{ item.event }}</p>
  </div>
</template>
