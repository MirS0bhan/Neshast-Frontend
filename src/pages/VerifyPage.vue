<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { AuthRepo } from '@/repos/AuthRepo'
import { useRoute } from 'vue-router'

const route = useRoute()
const message = ref('Verifying...')

onMounted(async () => {
  const verificationCode = route.query.token as string

  if (verificationCode) {
    try {
      await AuthRepo.verify(verificationCode)
      message.value = '✅ Email successfully verified! You can now log in.'
    } catch (err) {
      message.value = '❌ Verification failed. Token may be invalid or expired.'
      console.error(err)
    }
  } else {
    message.value = '⚠️ No verification token found in URL.'
  }
})
</script>

<template>
  <div class="p-4 text-center">
    <p class="text-lg">{{ message }}</p>
  </div>
</template>
