<template>
  <div
    class="
      my-container
      mt-8
      sm:mt-0
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
      <div
        class="
          flex
          md:flex-row
          flex-col
          items-center
          md:items-start
          lg:w-6/12
          mb-5
        "
      >
        <div>
          <img
            class="w-32 rounded-lg md:mr-4"
            src="~/assets/images/avatar.PNG"
            alt=""
          />
        </div>
        <div class="md:ml-4 text-sm sm:text-base text-center md:text-left">
          <div class="font-bold sm:text-2xl my-1">{{ staffInfo.name }}</div>
          <div class="flex-col items-center md:items-start">
            <div class="my-1 font-semibold flex items-center">
              <div>
                <svg class="w-2.5 fill-current text-gray-400 mr-1" viewBox="0 -31 512 512">
                  <path d="m211 240h90v30h-90zm0 0" />
                  <path
                    d="m415.378906 270h-84.378906v15c0 8.289062-6.710938 15-15 15h-120c-8.289062 0-15-6.710938-15-15v-15h-84.378906c-19.394532 0-36.546875-12.363281-42.6875-30.761719l-53.933594-161.828125v327.589844c0 24.8125 20.1875 45 45 45h422c24.8125 0 45-20.1875 45-45v-327.578125l-53.9375 161.816406c-6.136719 18.398438-23.289062 30.761719-42.683594 30.761719zm0 0"
                  />
                  <path
                    d="m316 0h-120c-24.8125 0-45 20.1875-45 45v15h-125.191406l56.574218 169.746094c2.050782 6.136718 7.777344 10.253906 14.238282 10.253906h84.378906v-15c0-8.289062 6.710938-15 15-15h120c8.289062 0 15 6.710938 15 15v15h84.378906c6.460938 0 12.1875-4.117188 14.238282-10.253906l56.578124-169.746094h-125.195312v-15c0-24.8125-20.1875-45-45-45zm-135 60v-15c0-8.277344 6.722656-15 15-15h120c8.277344 0 15 6.722656 15 15v15zm0 0"
                  />
                </svg>
              </div>
              <div>
                {{ staffInfo.currentRole }}
              </div>
            </div>
            <div
              v-if="staffInfo.status"
              class="font-semibold flex items-center"
            >
              <svg
                class="w-2.5 mr-1 fill-current text-green-300"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512"
              >
                <g>
                  <g>
                    <path
                      d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                    />
                  </g>
                </g>
              </svg>
              <div>Currently employed</div>
            </div>
            <div v-else class="font-semibold flex items-center">
              <div>
                <svg
                  class="w-2.5 mr-1 fill-current text-red-300"
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div>Not currently employed</div>
            </div>
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