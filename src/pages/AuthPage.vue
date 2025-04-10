<template>
  <div class="min-h-screen flex items-center justify-center bg-[rgb(var(--color-primary))]">
    <div class="w-full max-w-lg rounded-2xl p-6 max-h-10/12">
      <TabsRoot v-model="activeTab">
        <TabsList class=" bg-white grid grid-cols-2 mb-6 p-4 rounded-2xl">
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

// reka-ui Tabs
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
} from 'reka-ui'

import LoginView from '#/layout/LoginLayout.vue'
import SignupView from '#/layout/SignupLayout.vue'

const activeTab = ref('login')
</script>
