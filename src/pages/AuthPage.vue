<template>
  <div class="flex min-h-screen items-center justify-center bg-[rgb(var(--color-primary))]">
    <div class="max-h-10/12 w-full max-w-lg rounded-2xl p-6">
      <TabsRoot v-model="activeTab">
        <TabsList class="mb-6 grid grid-cols-2 rounded-2xl bg-white p-4">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <LoginView />
        </TabsContent>

        <TabsContent value="signup">
          <SignupView />
        </TabsContent>
      </TabsRoot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '@/assets/theme.css'
import { getLastSlug } from '@/utils/utils'
// reka-ui Tabs
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from 'reka-ui'

import LoginView from '#/layout/LoginLayout.vue'
import SignupView from '#/layout/SignupLayout.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeTab = ref< 'login' | 'signup' | undefined >(getLastSlug(route.path))
</script>
