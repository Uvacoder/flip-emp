<template>
  <div class="fixed w-full h-0">
    <div
      class="
        sm:hidden
        relative
        z-10
        py-3
        px-3
        bg-white
        shadow
        flex
        justify-between
        top-0
      "
    >
      <nuxt-link to="/"><img src="~/assets/logo.svg" alt="" /></nuxt-link>
      <div>
        <div v-if="!mobile" @click="toggleNav">
          <svg
            class="w-8 fill-current text-blue-500"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
          >
            <g transform="translate(1 1)">
              <g>
                <g>
                  <path
                    d="M255-1C113.618-1-1,113.618-1,255s114.618,256,256,256s256-114.618,256-256S396.382-1,255-1z M255,468.333     c-117.818,0-213.333-95.515-213.333-213.333S137.182,41.667,255,41.667S468.333,137.182,468.333,255S372.818,468.333,255,468.333     z"
                  />
                  <path
                    d="M361.667,148.333H148.333c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333h213.333     c11.782,0,21.333-9.551,21.333-21.333C383,157.885,373.449,148.333,361.667,148.333z"
                  />
                  <path
                    d="M361.667,233.667H148.333C136.551,233.667,127,243.218,127,255s9.551,21.333,21.333,21.333h213.333     c11.782,0,21.333-9.551,21.333-21.333S373.449,233.667,361.667,233.667z"
                  />
                  <path
                    d="M361.667,319H148.333C136.551,319,127,328.551,127,340.333c0,11.782,9.551,21.333,21.333,21.333h213.333     c11.782,0,21.333-9.551,21.333-21.333C383,328.551,373.449,319,361.667,319z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div v-if="mobile" @click="toggleNav">
          <svg
            class="w-8 fill-current text-blue-500"
            viewBox="0 0 340.8 340.8"
            style="enable-background: new 0 0 340.8 340.8"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M170.4,0C76.4,0,0,76.4,0,170.4s76.4,170.4,170.4,170.4s170.4-76.4,170.4-170.4S264.4,0,170.4,0z M170.4,323.6    c-84.4,0-153.2-68.8-153.2-153.2S86,17.2,170.4,17.2S323.6,86,323.6,170.4S254.8,323.6,170.4,323.6z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M182.4,169.6l50-50c3.2-3.2,3.2-8.8,0-12c-3.2-3.2-8.8-3.2-12,0l-50,50l-50-50c-3.2-3.2-8.8-3.2-12,0    c-3.2,3.2-3.2,8.8,0,12l50,50l-50,49.6c-3.2,3.2-3.2,8.8,0,12c1.6,1.6,4,2.4,6,2.4s4.4-0.8,6-2.4l50-50l50,50c1.6,1.6,4,2.4,6,2.4    s4.4-0.8,6-2.4c3.2-3.2,3.2-8.8,0-12L182.4,169.6z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div
      :class="{ showNav: mobile, hideNav: !mobile }"
      class="bg-white sm:hidden flex justify-evenly items-center text-gray-500"
    >
      <div :class="{ active: tab === 'home' }" @click="toggleView('home')" class="flex my-4">
        <svg
          class="w-6 mr-2 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0"
          />
        </svg>
        <div>Home</div>
      </div>
      <div :class="{ active: tab === 'history' }" @click="toggleView('history')" class="flex my-4">
        <svg
          class="w-6 mr-2 fill-current"
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
</template>

<script>
export default {
  data() {
    return {
      mobile: false,
      tab: 'home',
    }
  },
  methods: {
    toggleNav() {
      this.mobile = !this.mobile
    },
    toggleView(data) {
      this.$emit('toggleView', data)
      this.tab = data
      // this.mobile = false
    },
  },
}
</script>

<style scoped>
.active {
  border-radius: 0 15px 15px 0;
  color: #007bff;
  transition: 300ms;
}

.hideNav {
  transform: translateY(-500%);
  transition: 1000ms;
}
.showNav {
  transform: translateY(0);
  transition: 1000ms;
}
</style>