<template>
  <BasePublicPage>
    <div class="flex min-w-max min-h-44 items-center justify-center bg-[rgb(var(--color-primary))]">
      <div class="m-7 max-w-5xl min-w-3xl rounded-2xl bg-white p-7">
        <form @submit.prevent="submit" class="space-y-4">
          <InputUI v-model="form.name" label="نام سازمان" required />

          <!-- Textarea با برچسب فارسی -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-700">توضیحات</label>
            <textarea
              v-model="form.description"
              class="rounded-md border border-gray-300 bg-white px-4 py-2 text-base transition duration-200 focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:outline-none"
              placeholder="توضیحاتی درباره سازمان وارد کنید"
            />
          </div>

          <InputUI v-model="form.email" label="ایمیل سازمان" type="email" />
          <InputUI v-model="form.address" label="نشانی" />
          <InputUI v-model="form.website" label="وب‌سایت" type="url" />

          <ButtonUI type="submit">ثبت اطلاعات</ButtonUI>
        </form>
      </div>
    </div>
  </BasePublicPage>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BasePublicPage from './BasePublicPage.vue'
import ButtonUI from '@/components/ui/ButtonUI.vue'
import InputUI from '@/components/ui/InputUI.vue'
import type { Organization } from '@/api'
import '@/assets/theme.css'

const form = ref<Organization>({
  name: '',
  description: '',
  email: '',
  address: '',
  website: '',
})

function submit() {
  console.log('اطلاعات فرم ارسال شد:', form.value)
  // اینجا می‌تونید اطلاعات رو به API ارسال کنید
}
</script>
