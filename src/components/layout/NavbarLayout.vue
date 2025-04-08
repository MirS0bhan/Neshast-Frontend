<script setup lang="ts">
import ButtonUI from '@/components/ui/ButtonUI.vue'
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from 'reka-ui'
</script>

<template>
  <!-- Header -->
  <header class="bg-white shadow-sm">
    <div class="container mx-auto flex items-center justify-between px-4 py-4">
      <h1 class="text-gold text-2xl font-bold">ایونت‌هاب</h1>
      <NavigationMenuRoot>
        <NavigationMenuList class="hidden space-x-6 md:flex">
          <NavigationMenuItem>
            <NavigationMenuTrigger class="hover:text-green text-gray-700">
              خانه
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <!-- محتوای خانه -->
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger class="hover:text-green text-gray-700">
              رویدادها
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <!-- محتوای رویدادها -->
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger class="hover:text-green text-gray-700">
              <RouterLink to="/about" class="hover:text-[rgb(var(--color-gold))]">
              درباره ما
              </RouterLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <!-- محتوای درباره ما -->
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger class="hover:text-green text-gray-700">
              تماس با ما
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <!-- محتوای تماس با ما -->
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>
      <div class="space-x-6">
        <router-link to="/auth/signup">
          <ButtonUI variant="primary" size="md"> ثبت‌نام </ButtonUI>
        </router-link>
        <router-link to="/auth/login">
          <ButtonUI variant="outline" size="md"> ورود </ButtonUI>
        </router-link>
      </div>
    </div>
  </header>
</template>
