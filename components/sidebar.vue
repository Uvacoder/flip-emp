<template>
  <div class="bg-white min-h-screen hidden sm:flex flex-col col-start-1 col-end-4 xl:col-end-3">
    <div>
      <nuxt-link to="/" class="">
        <img class="mx-auto my-8" src="../assets/logo.svg" alt="" />
      </nuxt-link>
      <div class="flex justify-center">
        <div class="text-gray-500 font-bold w-full pr-4">
          <div
            :class="{ active: tab === 'home' }"
            class="flex items-center mt-4 mb-4 py-2.5 cursor-pointer"
            href=""
            @click="toggleView('home')"
          >
            <div :class="{ visible: tab === 'home' }" class="opacity-0">
              <svg
                width="6"
                height="32"
                viewBox="0 0 6 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0C3.31371 0 6 2.68629 6 6V26C6 29.3137 3.31371 32 0 32V0Z"
                  fill="#007BFF"
                />
              </svg>
            </div>
            <svg
              class="md:ml-6 ml-1 w-6 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0"
              />
            </svg>
            <div>Home</div>
          </div>
          <div
            :class="{ active: tab === 'history' }"
            class="flex items-center my-4 py-2.5 cursor-pointer"
            href=""
            @click="toggleView('history')"
          >
            <div :class="{ visible: tab === 'history' }" class="opacity-0">
              <svg
                width="6"
                height="32"
                viewBox="0 0 6 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0C3.31371 0 6 2.68629 6 6V26C6 29.3137 3.31371 32 0 32V0Z"
                  fill="#007BFF"
                />
              </svg>
            </div>
            <svg
              class="md:ml-6 ml-1 w-6 mr-2 fill-current"
              viewBox="0 0 16 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 12H8M2 2H11H2ZM2 7H14H2Z"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div>Staff History</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tab: 'home',
    }
  },
  methods: {
    toggleView(data) {
      this.$emit('toggleView', data)
      this.tab = data
    },
  },
}
</script>

<style>
.active {
  background: #ecf5ff;
  border-radius: 0 15px 15px 0;
  color: #007bff;
}
.visible {
  opacity: 1;
}
</style>