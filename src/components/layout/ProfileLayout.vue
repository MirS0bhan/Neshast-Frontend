<script setup lang="ts">
import { PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
import { AvatarFallback, AvatarImage, AvatarRoot } from 'reka-ui'

import '@/assets/theme.css'

import UserRepo from '@/repos/UserRepo'
import { onMounted, ref } from 'vue'
import { UserME } from '@/api'

const user = ref<UserME>()

onMounted(async () => {
  user.value = await UserRepo.getMe()
})
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger class="" aria-label="Update dimensions">
      <AvatarRoot
        class="bg-blackA3 inline-flex h-[45px] w-[45px] items-center justify-center overflow-hidden rounded-full align-middle select-none"
      >
        <AvatarImage
          class="h-full w-full rounded-[inherit] object-cover"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <AvatarFallback
          class="text-grass11 flex h-full w-full items-center justify-center bg-white text-sm leading-1 font-medium dark:bg-stone-800 dark:text-stone-300"
          :delay-ms="600"
        >
          CT
        </AvatarFallback>
      </AvatarRoot>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        side="bottom"
        :side-offset="5"
        class="data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade w-[260px] rounded-lg bg-white p-5 shadow-sm will-change-[transform,opacity] ml-4"
      >
        <p>سازمان ها</p>
        <div v-for="org in user?.organizations || []" :key="org.id">
          <div><RouterLink :to="'/dashboard/organization/'+org.id">{{ org.name }}</RouterLink></div>
        </div>

        <div><RouterLink to="/dashboard/organization/new">سازمان جدید</RouterLink></div>

        <PopoverArrow class="fill-white stroke-gray-200" />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
  <div class="flex gap-5"></div>
</template>
