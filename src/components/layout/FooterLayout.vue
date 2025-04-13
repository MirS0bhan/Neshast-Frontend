<script setup lang="ts">
import '@/assets/theme.css'
</script>

<template>
  <footer class="bg-[rgb(var(--color-primary-dark))] py-12 text-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 class="text-gold mb-4 text-xl font-bold">ایونت‌هاب</h3>
          <p class="text-gray-300">مقصد نهایی شما برای کشف و رزرو رویدادهای شگفت‌انگیز.</p>
        </div>
        <div>
          <h3 class="text-green mb-4 text-xl font-bold">لینک‌های سریع</h3>
          <ul class="space-y-2 text-gray-300">
            <li><a href="#" class="hover:text-gold">خانه</a></li>
            <li><a href="#" class="hover:text-gold">رویدادها</a></li>
            <li><a href="#" class="hover:text-gold">درباره ما</a></li>
            <li><a href="#" class="hover:text-gold">تماس با ما</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-gold mb-4 text-xl font-bold">تماس با ما</h3>
          <address class="text-gray-300 not-italic">
            <p>خیابان ایونت ۱۲۳</p>
            <p>تهران، ایران</p>
            <p class="mt-2">info@eventhub.com</p>
            <p>۰۲۱-۱۲۳۴۵۶۷۸</p>
          </address>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-700 pt-8 text-center text-gray-300">
        <p>© ۲۰۲۵ ایونت‌هاب. تمامی حقوق محفوظ است.</p>
      </div>
    </div>
  </footer>
</template>
