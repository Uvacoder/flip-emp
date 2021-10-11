<template>
  <div class="my-container">
    <div class="flex flex-col mx-auto items-center max-w-xs">
      <div>
        <img
          class="w-72 my-5 rounded-lg"
          src="~/assets/images/avatar.PNG"
          alt=""
        />
      </div>
      <h1 class="font-bold text-2xl my-1">{{ staffInfo.name }}</h1>
      <div class="flex justify-between w-full my-1">
        <div class="text-gray-400">Current Role</div>
        <div class="font-semibold">{{ staffInfo.currentR }}</div>
      </div>
      <div class="flex justify-between w-full my-1">
        <div class="text-gray-400">Email</div>
        <div class="font-semibold">{{ staffInfo.email }}</div>
      </div>
      <div class="flex justify-between w-full my-1">
        <div class="text-gray-400">Employee id</div>
        <div class="font-semibold">{{ staffInfo.emId }}</div>
      </div>
      <div class="flex justify-between w-full my-1">
        <div class="text-gray-400">Date of employment</div>
        <div class="font-semibold">{{ staffInfo.doe }}</div>
      </div>
      <div class="flex justify-between w-full my-1">
        <div class="text-gray-400">Status</div>
        <div v-if="staffInfo.active" class="font-semibold flex items-center">
          <div>
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
          </div>
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
</template>

<script>
import Search from '~/components/search.vue'
export default {
  components: {
    Search,
  },
  props: ['staffInfo'],
}
</script>

<style>
</style>