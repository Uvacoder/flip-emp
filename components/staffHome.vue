<template>
  <div class="my-container mt-8 col-start-1 xl:col-start-3 sm:col-start-4 col-end-13 bg-blue-100 py-8 bg-opacity-50">
    <Search />
    <div class="flex flex-col mx-auto items-center max-w-xs">
      <div>
        <img class="w-72 my-5 rounded-lg" src="~/assets/images/avatar.PNG" alt="" />
      </div>
      <h1 class="font-bold text-2xl my-1">{{ staffInfo.name }}</h1>
      <div class="flex justify-between w-full my-1">
        <div class="text-gray-400">Current Role</div>
        <div class="font-semibold">{{ staffInfo.currentRole }}</div>
      </div>
      <div class="flex justify-between w-full my-1">
        <div class="text-gray-400">Email</div>
        <div class="font-semibold">{{ staffInfo.email }}</div>
      </div>
      <div class="flex justify-between w-full my-1">
        <div class="text-gray-400">Employee id</div>
        <div class="font-semibold">{{ staffInfo.employeeId }}</div>
      </div>
      <div class="flex justify-between w-full my-1">
        <div class="text-gray-400">Date of employment</div>
        <div class="font-semibold">{{ staffInfo.dateOfEmployment }}</div>
      </div>
      <div class="flex justify-between w-full my-1">
        <div class="text-gray-400">Status</div>
        <div v-if="staffInfo.status" class="font-semibold">Currently employed</div>
        <div v-else class="font-semibold">Not currently employed</div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '~/components/search.vue'
export default {
  components: {
    Search
  },
  props: ['staffInfo']
}
</script>

<style>
</style>