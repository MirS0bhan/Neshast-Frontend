<script setup lang="ts">
import {
  PopoverArrow,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
  Separator,
} from 'reka-ui'
import { AvatarFallback, AvatarImage, AvatarRoot } from 'reka-ui'

import '@/assets/theme.css'

import UserRepo from '@/repos/UserRepo'
import { onMounted, ref } from 'vue'
import { UserME } from '@/api'
import ButtonUI from '../ui/ButtonUI.vue'

const user = ref<UserME>()

onMounted(async () => {
  user.value = await UserRepo.getMe()
})
</script>

<template>
  <div class="flex gap-6">
    <PopoverRoot>
      <PopoverTrigger class="" aria-label="Update dimensions">
        <AvatarRoot
          class="bg-blackA3 inline-flex h-[45px] w-[45px] items-center justify-center overflow-hidden rounded-full align-middle select-none"
        >
          <AvatarImage
            class="h-full w-full rounded-[inherit] object-cover"
            :src="user?.profile_picture"
            alt="Colm Tuite"
          />
          <AvatarFallback
            class="text-grass11 flex h-full w-full items-center justify-center bg-white text-sm leading-1 font-medium dark:bg-stone-800 dark:text-stone-300"
            :delay-ms="600"
          >
            {{ user?.last_name }}
          </AvatarFallback>
        </AvatarRoot>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          side="bottom"
          :side-offset="5"
          class="data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade ml-4 w-[260px] rounded-lg bg-white p-5 shadow-sm will-change-[transform,opacity]"
        >
          <p>سازمان ها</p>
          <div v-for="org in user?.organizations || []" :key="org.id">
            <div>
              <RouterLink :to="'/dashboard/organization/' + org.id">{{ org.name }}</RouterLink>
            </div>
            <Separator
              class="my-[15px] bg-stone-300/50 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
            />
          </div>

          <div><RouterLink to="/dashboard/organization/new">سازمان جدید</RouterLink></div>

          <PopoverArrow class="fill-white stroke-gray-200" />
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
    <RouterLink to="/events/new"><ButtonUI variant="outline">افزودن رویداد</ButtonUI></RouterLink>
  </div>
</template>
