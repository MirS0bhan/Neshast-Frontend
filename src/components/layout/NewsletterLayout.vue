<script setup lang="ts">
import ButtonUI from '../ui/ButtonUI.vue';

</script>

<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4 text-center">
      <h2 class="mb-4 text-3xl font-bold">مشترک شوید</h2>
      <p class="mx-auto mb-8 max-w-2xl">
        برای دریافت آخرین به‌روزرسانی‌های رویدادهای آینده، در خبرنامه ما مشترک شوید.
      </p>
      <div class="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
        <input
          type="email"
          placeholder="ایمیل شما"
          class="flex-grow rounded-md border border-gray-300 px-4 py-2"
        />
        <ButtonUI variant="outline">عضویت</ButtonUI>
      </div>
    </div>
  </section>
</template>
