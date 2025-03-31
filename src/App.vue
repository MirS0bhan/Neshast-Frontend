<script setup lang="ts">
import { ref, onMounted } from 'vue'

const data = ref<any>(null)

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:8000/organization/1")
    data.value = await response.json()
  } catch (error) {
    console.error("Failed to fetch data:", error)
  }
})
</script>

<template>
  <h1>Hello sobhan</h1>
  <pre>{{ data }}</pre>
</template>

<style scoped>
</style>