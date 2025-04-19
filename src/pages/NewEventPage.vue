<template>
  <BasePublicPage>
    <div
      class="flex min-h-screen items-center justify-center bg-[rgb(var(--color-primary))] px-4 py-10"
    >
      <div class="w-full max-w-4xl space-y-6 rounded-2xl bg-white p-8 shadow-md">
        <h1 class="mb-6 text-center text-2xl font-bold text-gray-800">ایجاد رویداد جدید</h1>

        <form @submit.prevent="handleSubmit" class="space-y-5">
          <AspectRatio
            :ratio="16 / 9"
            class="block rounded-xl border-2 border-dashed border-t-black py-[45px] text-center text-sm text-stone-700 select-none"
          >
            <div class=""></div>
          </AspectRatio>

          <Input v-model="form.title" label="عنوان رویداد" />
          <Textarea v-model="form.description" label="توضیحات" />
          <div class="flex items-center justify-center gap-6">
            <Select
              v-model="selected"
              :options="categories"
              label="دسته‌بندی"
              placeholder="موضوعات"
              id="categories-select"
            />

            <Select
              v-model="selected"
              :options="organizationOptions"
              label="سازمان"
              placeholder="سازمان شما"
              id="organization-select"
            />
          </div>

          <Input v-model="form.image" label="آدرس تصویر" />

          <div class="grid grid-cols-1 sm:grid-cols-2">
            <div class="flex flex-col gap-2">
              <Label class="text-sm text-stone-700 dark:text-white" for="birthday">
                Birthday
              </Label>
              <DateFieldRoot
                id="birthday"
                v-slot="{ segments }"
                :is-date-unavailable="(date) => date.day === 19"
                class="text-green10 flex w-36 items-center rounded-lg border bg-white p-1 text-center shadow-sm select-none data-[invalid]:border-red-500"
              >
                <template v-for="item in segments" :key="item.part">
                  <DateFieldInput v-if="item.part === 'literal'" :part="item.part">
                    {{ item.value }}
                  </DateFieldInput>
                  <DateFieldInput
                    v-else
                    :part="item.part"
                    class="data-[placeholder]:text-green9 rounded p-0.5 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
                  >
                    {{ item.value }}
                  </DateFieldInput>
                </template>
              </DateFieldRoot>
            </div>
            <div class="flex flex-col gap-2">
              <Label class="text-sm text-stone-700 dark:text-white" for="birthday">
                Birthday
              </Label>
              <TimeFieldRoot
                id="birthday"
                v-slot="{ segments }"
                class="text-green10 flex w-36 items-center rounded-lg border bg-white p-1 text-center shadow-sm select-none data-[invalid]:border-red-500"
              >
                <template v-for="item in segments" :key="item.part">
                  <TimeFieldInput v-if="item.part === 'literal'" :part="item.part">
                    {{ item.value }}
                  </TimeFieldInput>
                  <TimeFieldInput
                    v-else
                    :part="item.part"
                    class="data-[placeholder]:text-green9 rounded p-0.5 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
                  >
                    {{ item.value }}
                  </TimeFieldInput>
                </template>
              </TimeFieldRoot>
            </div>
          </div>
          <Input v-model="form.location" label="محل برگزاری" />
          <SeparatorUI />
          <div class="space-y-4 pt-4">
            <h2 class="text-lg font-semibold text-gray-700">انواع بلیت</h2>

            <div
              v-for="(ticket, index) in form.ticket_types"
              :key="index"
              class="grid grid-cols-1 items-end gap-4 rounded-md bg-gray-50 p-4 sm:grid-cols-3"
            >
              <Input v-model="ticket.title" label="عنوان بلیت" />
              <Textarea v-model="ticket.description" label="توضیحات بلیت" />
              <Input type="number" v-model="ticket.max_participants" label="حداکثر شرکت‌کنندگان" />

              <Button
                variant="ghost"
                class="col-span-full justify-self-end text-red-500 hover:text-red-700"
                @click="removeTicketType(index)"
              >
                حذف بلیت
              </Button>
            </div>

            <Button type="button" variant="outline" @click="addTicketType">
              افزودن نوع بلیت
            </Button>
          </div>

          <!-- ارسال -->
          <div class="pt-4 text-center">
            <Button type="submit" class="w-full sm:w-auto">ایجاد رویداد</Button>
          </div>
        </form>
      </div>
    </div>
  </BasePublicPage>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Input from '#/ui/InputUI.vue'
import Button from '#/ui/ButtonUI.vue'
import Select from '#/ui/SelectUI.vue'
import Textarea from '#/ui/TextAreaUI.vue'
import BasePublicPage from './BasePublicPage.vue'
import SeparatorUI from '@/components/ui/SeparatorUI.vue'
import { Organization } from '@/api'
import { computed } from 'vue'
import { onMounted } from 'vue'
import UserRepo from '@/repos/UserRepo'
import { AspectRatio, DateFieldInput, DateFieldRoot, TimeFieldInput, TimeFieldRoot } from 'reka-ui'

const categories = ref([
  { value: 1, label: 'کنفرانس' },
  { value: 2, label: 'کارگاه آموزشی' },
])

const form = ref({
  title: '',
  description: '',
  organization: null,
  image: '',
  category: null,
  start_date: '',
  end_date: '',
  location: '',
  ticket_types: [
    {
      title: '',
      description: '',
      max_participants: null,
    },
  ],
})

function addTicketType() {
  form.value.ticket_types.push({
    title: '',
    description: '',
    max_participants: null,
  })
}

function removeTicketType(index: number) {
  form.value.ticket_types.splice(index, 1)
}

function handleSubmit() {
  console.log('ارسال فرم:', form.value)
  // اضافه کردن فراخوانی API در اینجا
}

const selected = ref(null)

const rawOrganizations = ref<Organization[]>([])

const organizationOptions = computed(() =>
  rawOrganizations.value.map((org) => ({
    value: org.id,
    label: org.name,
  })),
)

onMounted(async () => {
  rawOrganizations.value = await UserRepo.getOrganization()
})
</script>
