<template>
  <div>
    <scanner v-if="scanner" />
    <div class="flex flex-col items-center my-5">
      <form @submit.prevent="fetchEmployeeInfo">
        <input
          v-model="empId"
          name="emp-ID"
          class="
            block
            mx-auto
            border border-gray-300
            text-xs
            pl-2
            py-3
            rounded-lg
            w-72
          "
          placeholder="Search for a staff"
        />
        <button
          :class="{
            disabled: loading,
          }"
          class="bg-blue-500 hover:bg-blue-400 p-2 rounded w-10 mx-auto block my-2"
        >
          <svg class="w-5 mx-auto fill-current" viewBox="0 0 451.111 451.111">
            <path
              d="m257.778 32.222-48.333 48.333 112.778 112.778h-322.223v64.444h322.222l-112.777 112.779 48.333 48.333 193.333-193.333z"
            />
          </svg>
        </button>
      </form>
      <p @click="toggleScanner" class="my-2 text-blue-500 underline lg:hidden">
        Or scan QR-Code
      </p>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import scanner from '~/components/scanner.vue'
import { mapMutations } from 'vuex'
import gql from 'graphql-tag'

const findEmployee = gql`
  query findEmployee($empId: String!) {
    findEmployee(empId: $empId) {
      emId
    }
  }
`

export default {
  components: {
    scanner,
  },
  data() {
    return {
      empId: '',
      scanner: false,
      loading: false,
    }
  },
  validations: {
    empId: {
      required,
    },
  },
  methods: {
    async fetchEmployeeInfo() {
      this.empId = this.empId.toUpperCase()
      if (!this.$v.empId.required) {
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
              empId: this.empId,
            },
          })
          .then((res) => {
            this.$router.push(`/scan/${res.data.findEmployee.emId}`)
          })
          .catch((err) => {
            this.loading = false
            this.$notify({
              title: 'Error',
              text: 'No employee with such ID found! Or check your network and try again',
              type: 'error',
            })
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
</style>