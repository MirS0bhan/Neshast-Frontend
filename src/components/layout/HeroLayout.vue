<script setup lang="ts">
import ButtonUI from '#/ui/ButtonUI.vue'
</script>

<template>
  <section class="from-gold to-gold-dark bg-gradient-to-r py-16 text-gray-800">
    <div class="container mx-auto px-4 text-center">
      <h2 class="mb-4 text-4xl font-bold md:text-5xl">کشف رویدادهای شگفت‌انگیز</h2>
      <p class="mx-auto mb-8 max-w-2xl text-xl">
        بهترین رویدادهای شهر خود را پیدا کرده و رزرو کنید. از کنسرت‌ها تا کارگاه‌ها، ما همه را پوشش
        می‌دهیم.
      </p>
      <div class="flex justify-center gap-4">
        <ButtonUI variant="primary"> مشاهده رویدادها </ButtonUI>
        <ButtonUI variant="outline">بیشتر بدانید</ButtonUI>
      </div>
    </div>
  </section>
</template>
