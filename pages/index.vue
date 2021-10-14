<template>
  <div class="appear">
    <appHeader />
    <scanner v-if="scanner" />
    <div class="h-screenmx-auto">
      <div class="max-w-lg mx-auto text-center">
        <div class="flex flex-col h-screen items-center justify-center px-3">
          <div class="font-bold text-2xl text-gray-800">
            Know the status of a Flippay employee
          </div>
          <div class="my-2">
            This website allows you to find out if someones works at Flippay,
            their status, role at Flippay.
          </div>
          <form @submit.prevent="fetchEmployee" action="">
            <input
              v-model="staffId"
              name="emp-ID"
              class="w-full py-2 px-2 border border-gray-400 rounded my-4"
              placeholder="Type ID here"
              type="text"
            />
            <button
              :class="{
                disabled: loading,
              }"
              class="bg-blue-500 hover:bg-blue-400 p-2 rounded w-10"
            >
              <svg
                class="w-5 mx-auto fill-current"
                viewBox="0 0 451.111 451.111"
              >
                <path
                  d="m257.778 32.222-48.333 48.333 112.778 112.778h-322.223v64.444h322.222l-112.777 112.779 48.333 48.333 193.333-193.333z"
                />
              </svg>
            </button>
          </form>
          <p
            @click="toggleScanner"
            class="my-2 text-blue-500 underline lg:hidden"
          >
            Or scan QR-Code
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import appHeader from '~/components/appHeader'
import scanner from '~/components/scanner'
import { mapMutations } from 'vuex'
import gql from 'graphql-tag'

const findEmployee = gql`
  query findEmployee($empId: String) {
    findEmployee(empId: $empId) {
      emId
    }
  }
`

export default {
  name: 'Search',
  components: { appHeader, scanner },
  data() {
    return {
      staffId: '',
      loading: false,
      scanner: false,
    }
  },
  validations: {
    staffId: {
      required,
    },
  },
  methods: {
    async fetchEmployee() {
      this.staffId = this.staffId.toUpperCase()
      if (!this.$v.staffId.required) {
        this.$notify({
          title: 'Error',
          text: 'Text field is empty',
          type: 'error',
        })
      } else {
        this.loading = true
        const res = await this.$apollo
          .query({
            query: findEmployee,
            variables: {
              empId: this.staffId,
            },
          })
          .then((res) => {
            if (res.data) {
              this.$store.commit('updateEmpId', res.data.findEmployee.emId)
              this.staffId = ''
              this.$router.push('/home')
            }
          })
          .catch((err) => {
            this.$notify({
              title: 'Error',
              text: 'No employee with such ID found! Or check your network and try again',
              type: 'error',
            })
            this.loading = false
          })
      }
    },
    toggleScanner() {
      this.scanner = !this.scanner
    },
  },
}
</script>

<style>
button {
  outline: none;
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.disabled:hover {
  cursor: not-allowed;
}
</style>