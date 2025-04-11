<template>
  <div class="w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg">
    <h2 class="mb-6 text-center text-2xl font-bold">وارد حساب خود شوید</h2>

    <form @submit.prevent="handleLogin" class="space-y-4" dir="rtl">
      <InputUI
        v-model="username"
        label="نام‌کاربری"
        type="username"
        placeholder="میسانو"
        :error="errorField === 'username' ? errorMessage : ''"
      />

      <InputUI
        v-model="password"
        label="رمز عبور"
        type="password"
        placeholder="••••••••"
        :error="errorField === 'password' ? errorMessage : ''"
      />

      <ButtonUI :loading="loading" class="w-full" type="submit"> ورود </ButtonUI>
    </form>

    <p class="mt-4 text-center text-sm text-gray-600">
      حسابی ندارید؟
      <RouterLink to="/register" class="text-blue-600 hover:underline">عضویت</RouterLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type {TokenObtainPair} from '@/api'

import { AuthRepo }  from '@/repos/AuthRepo'

import InputUI from '#/ui/InputUI.vue'
import ButtonUI from '#/ui/ButtonUI.vue'

const username = ref('')
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
    const top: TokenObtainPair = {
    username: username.value,
    password: password.value,
};

    const response = await AuthRepo.login(top)

    console.log('Login successful:', response)
    router.push('/dashboard')
  } catch (err: any) {
    const message = err?.response?.data?.message || 'Login failed'
    errorMessage.value = message

    if (message.toLowerCase().includes('username')) {
      errorField.value = 'username'
    } else if (message.toLowerCase().includes('password')) {
      errorField.value = 'password'
    }
  } finally {
    loading.value = false
  }
}
</script>
