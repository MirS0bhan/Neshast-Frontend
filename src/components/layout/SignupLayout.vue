<template>
  <div class="w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg">
    <h2 class="mb-6 text-center text-2xl font-bold">حسابتو بساز</h2>

    <form @submit.prevent="handleSignup" class="space-y-4" dir="rtl">
      <InputUI
        v-model="username"
        label="نام کاربری"
        placeholder="misano"
        :error="errorField === 'name' ? errorMessage : ''"
      />

      <InputUI
        v-model="email"
        label="رایانامه"
        type="email"
        placeholder="you@example.com"
        :error="errorField === 'email' ? errorMessage : ''"
      />

      <InputUI
        v-model="password"
        label="رمزعبور"
        type="password"
        placeholder="••••••••"
        :error="errorField === 'password' ? errorMessage : ''"
      />

      <ButtonUI type="submit" :loading="loading" class="w-full">عضویت</ButtonUI>
    </form>

    <p class="mt-4 text-center text-sm text-gray-600">
      همینجوری حساب داری؟
      <RouterLink to="/login" class="text-blue-600 hover:underline">ورود</RouterLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {AuthRepo} from '@/repos/AuthRepo'
import type { UserRegistration } from '@/api'

import InputUI from '#/ui/InputUI.vue'
import ButtonUI from '#/ui/ButtonUI.vue'

const username = ref('')
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
    const us: UserRegistration = {
      username: username.value,
      email: email.value,
      password: password.value,
    }
    const response = await AuthRepo.signup(us)

    console.log('Signup successful:', response)
    router.push('/dashboard')
  } catch (err: any) {
    const message = err?.response?.data?.message || 'Signup failed'
    errorMessage.value = message

    if (message.toLowerCase().includes('username')) {
      errorField.value = 'nusernameame'
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
