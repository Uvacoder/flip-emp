<template>
  <div
    class="
      my-container
      mt-8
      col-start-1
      xl:col-start-3
      sm:col-start-4
      col-end-13
      bg-blue-100
      py-8
      bg-opacity-50
    "
  >
    <Search />
    <div class="flex flex-col lg:flex-row items-center lg:items-start lg:px-12">
      <div class="flex md:flex-row flex-col items-center md:items-start lg:w-6/12 mb-5">
        <div>
          <img
            class="w-32 rounded-lg mr-4"
            src="~/assets/images/avatar.PNG"
            alt=""
          />
        </div>
        <div class="ml-4 text-sm sm:text-base text-center md:text-left">
          <div class="font-bold sm:text-2xl my-1">{{ staffInfo.name }}</div>
          <div class="grid grid-cols-2 md:grid-cols-none md:flex-col items-center md:items-start">
            <div class="my-1 font-semibold">
              {{ staffInfo.currentRole }}
            </div>
            <div v-if="staffInfo.status" class="font-semibold">
              Currently employed
            </div>
            <div v-else class="">Not currently employed</div>
          </div>
        </div>
      </div>
      <div>
        <div class="w-96 px-10" v-for="(milestone, i) in staffHistory" :key="i">
          <div v-if="milestone.duration" class="bg-white p-4 mb-3 rounded-lg">
            <div class="font-semibold">{{ milestone.role }}</div>
            <div class="flex justify-between mt-3">
              <div class="text-gray-400">Duration</div>
              <div class="font-semibold text-blue-800">
                {{ milestone.duration }}
              </div>
            </div>
          </div>
          <div
            v-else-if="milestone.dateOfEmployment"
            class="bg-white p-4 mb-3 rounded-lg"
          >
            <div class="font-semibold">{{ milestone.role }}</div>
            <div class="flex justify-between mt-3">
              <div class="text-gray-400">Employment date</div>
              <div class="font-semibold text-blue-800">
                {{ milestone.dateOfEmployment }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '~/components/search.vue'
export default {
  components: {
    Search,
  },
  props: ['staffInfo'],
  data() {
    return {
      staffHistory: this.staffInfo.staffHistory,
    }
  },
  methods: {
    print() {
      console.log(this.staffHistory)
    },
  },
}
</script>

<style>
</style>