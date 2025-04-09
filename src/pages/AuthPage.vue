<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
      <TabsRoot v-model="activeTab">
        <TabsList class="grid grid-cols-2 mb-6">
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
