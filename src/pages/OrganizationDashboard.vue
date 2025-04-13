<template>
  <NavbarLayout />
  <div class="min-h-screen bg-[rgb(var(--color-primary))]">
    <TabsRoot v-model="activeTab" class="flex gap-5 p-7" dir="rtl">
      <TabsList class="flex-1 gap-1 rounded-2xl bg-white pt-4 pl-7">
        <DashboardTab value="a" title="رویداد ها" :icon="TestIcon" />
        <DashboardTab value="a" title="Featured" :icon="TestIcon" />
        <DashboardTab value="a" title="Featurefdgsdfghsdd" :icon="TestIcon" />
        <DashboardTab value="a" title="Featured" :icon="TestIcon" />
        <DashboardTab value="a" title="Featured" :icon="TestIcon" />
        <DashboardTab value="a" title="Featured" :icon="TestIcon" />
        <DashboardTab value="a" title="Featured" :icon="TestIcon" />
        <DashboardTab value="a" title="Featured" :icon="TestIcon" />
      </TabsList>
      <div class="min-h-screen flex-2/3 rounded-2xl bg-white p-10">
        <TabsContent value="a">
          <p>test</p>
        </TabsContent>
        <TabsContent value="b">
          <p>test 213</p>
        </TabsContent>
      </div>
    </TabsRoot>
  </div>
</template>

<script setup lang="ts">
import { TabsRoot, TabsList, TabsContent } from 'reka-ui'

import '@/assets/theme.css'
import NavbarLayout from '@/components/layout/NavbarLayout.vue'
import { ref } from 'vue'
import DashboardTab from '@/components/DashboardTab.vue'
import TestIcon from '@/components/icons/TestIcon.vue'

const activeTab = ref('b')
</script>
