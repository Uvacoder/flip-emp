<template>
  <div class="appear">
    <appHeader />
    <div class="h-screen mt-48 mx-auto">
      <div class="max-w-xs mx-auto text-center">
        <div class="flex flex-col px-3">
          <div class="font-bold text-2xl text-gray-800">
            Know the status of a Flippay employee
          </div>
          <div class="my-2">
            This website allows you to find out if someones works at Flippay their
            status, role at Flippay
          </div>
          <div class="border border-gray-300 px-1 py-1 rounded flex justify-between items-center">
            <form @submit.prevent="fetchStaffInfo" action="">
              <input
                v-model="staffInfo"
                class="py-2"
                placeholder="Type name here"
                type="text"
              />
            </form>
            <div @click="fetchStaffInfo" :class="{ show: $v.staffInfo.required, hide: !$v.staffInfo.required }" class="bg-blue-400 p-2 rounded">
              <svg
                class="w-5 fill-current text-white"
                viewBox="0 0 451.111 451.111"
              >
                <path
                  d="m257.778 32.222-48.333 48.333 112.778 112.778h-322.223v64.444h322.222l-112.777 112.779 48.333 48.333 193.333-193.333z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import appHeader from '~/components/appHeader'
export default {
  components: [
    appHeader
  ],
  data () {
    return {
      searchChange: false,
      staffInfo: ''
    }
  },
  validations: {
    staffInfo: {
      required,
    }
  },
  methods: {
    // setSearchChange () {
    //   if (this.staffInfo !== '') {
    //     this.searchChange = true
    //   } else {
    //     this.searchChange = false
    //   }
    // },
    fetchStaffInfo () {
      this.$router.push('/home')
    }
  },
}
</script>

<style scoped>
input {
  border: none;
}
.show {
  opacity: 1;
  transition: 500ms;
  cursor: pointer;
}
.hide {
  opacity: 0;
  transition: 500ms;
}
</style>