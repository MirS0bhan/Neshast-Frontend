<template>
  <div class="w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg">
    <h2 class="mb-6 text-center text-2xl font-bold">Create an account</h2>

    <form @submit.prevent="handleSignup" class="space-y-4">
      <InputUI
        v-model="name"
        label="Name"
        placeholder="Your full name"
        :error="errorField === 'name' ? errorMessage : ''"
      />

      <InputUI
        v-model="email"
        label="Email"
        type="email"
        placeholder="you@example.com"
        :error="errorField === 'email' ? errorMessage : ''"
      />

      <InputUI
        v-model="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        :error="errorField === 'password' ? errorMessage : ''"
      />

      <ButtonUI type="submit" :loading="loading" class="w-full"> Sign Up </ButtonUI>
    </form>

    <p class="mt-4 text-center text-sm text-gray-600">
      Already have an account?
      <RouterLink to="/login" class="text-blue-600 hover:underline">Log in</RouterLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthRepo from '@/repos/AuthRepo'

import InputUI from '#/ui/InputUI.vue'
import ButtonUI from '#/ui/ButtonUI.vue'

const name = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')
const errorField = ref('')
const router = useRouter()

const handleSignup = async () => {
  loading.value = true
  errorMessage.value = ''
  errorField.value = ''

  try {
    const response = await AuthRepo.register({
      name: name.value,
      email: email.value,
      password: password.value,
    })

    console.log('Signup successful:', response)
    router.push('/dashboard')
  } catch (err: any) {
    const message = err?.response?.data?.message || 'Signup failed'
    errorMessage.value = message

    if (message.toLowerCase().includes('name')) {
      errorField.value = 'name'
    } else if (message.toLowerCase().includes('email')) {
      errorField.value = 'email'
    } else if (message.toLowerCase().includes('password')) {
      errorField.value = 'password'
    }
  } finally {
    loading.value = false
  }
}
</script>
