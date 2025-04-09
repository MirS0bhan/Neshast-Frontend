<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
      <h2 class="text-2xl font-bold mb-6 text-center">Login to your account</h2>

      <form @submit.prevent="handleLogin" class="space-y-4">
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

        <ButtonUI
          :loading="loading"
          class="w-full"
          type="submit"
        >
          Login
        </ButtonUI>
      </form>

      <p class="mt-4 text-center text-sm text-gray-600">
        Don’t have an account?
        <RouterLink to="/register" class="text-blue-600 hover:underline">Sign up</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthRepo from '@/repos/AuthRepo'

import InputUI from '#/ui/InputUI.vue'
import ButtonUI from '#/ui/ButtonUI.vue'

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')
const errorField = ref('')
const router = useRouter()

const handleLogin = async () => {
  loading.value = true
  errorMessage.value = ''
  errorField.value = ''

  try {
    const response = await AuthRepo.login({
      email: email.value,
      password: password.value,
    })

    console.log('Login successful:', response)
    router.push('/dashboard')
  } catch (err: any) {
    const message = err?.response?.data?.message || 'Login failed'
    errorMessage.value = message

    if (message.toLowerCase().includes('email')) {
      errorField.value = 'email'
    } else if (message.toLowerCase().includes('password')) {
      errorField.value = 'password'
    }
  } finally {
    loading.value = false
  }
}
</script>
