<script setup lang="ts">
import ButtonUI from '@/components/ui/ButtonUI.vue'
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  Label,
} from 'reka-ui'
</script>

<template>
  <!-- Header -->
  <header class="bg-white shadow-sm">
    <div class="container mx-auto flex items-center justify-between px-4 py-4">
      <h1 class="text-gold text-2xl font-bold">ایونت‌هاب</h1>
      <NavigationMenuRoot>
        <NavigationMenuList class="hidden space-x-6 md:flex" dir="rtl">
          <NavigationMenuItem>
            <NavigationMenuTrigger class="hover:text-green text-center text-gray-700">
              <RouterLink to="/" class="hover:text-[rgb(var(--color-primary))]">
                <Label>خانه</Label>
              </RouterLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <!-- محتوای خانه -->
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger class="hover:text-green text-gray-700">
              <RouterLink to="/events" class="hover:text-[rgb(var(--color-primary))]">
                <Label>رویدادها</Label>
              </RouterLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <!-- محتوای رویدادها -->
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger class="hover:text-green text-gray-700">
              <RouterLink to="/about" class="hover:text-[rgb(var(--color-gold))]">
                <Label>درباره ما</Label>
              </RouterLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <!-- محتوای درباره ما -->
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger class="hover:text-green text-gray-700">
              <Label>تماس با ما</Label>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <!-- <p>dsafdsaf</p> -->
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
