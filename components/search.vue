<template>
  <div>
    <scanner v-if="scanner" />
    <div class="flex flex-col items-center my-5">
      <form @submit.prevent="fetchEmployeeInfo">
        <input
          v-model="empId"
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
          type="text"
        />
      </form>
      <p @click="toggleScanner" class="my-2 text-blue-500 underline lg:hidden">Or scan QR-Code</p>
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
    scanner
  },
  data() {
    return {
      empId: '',
      scanner: false
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
        const res = await this.$apollo
          .query({
            query: findEmployee,
            variables: {
              empId: this.empId,
            },
          })
          .then((res) => {
            this.$store.commit('updateEmpId', res.data.findEmployee.emId)
            this.empId = ''
            console.log(res)
          })
          .catch((err) => {
            this.$notify({
              title: 'Error',
              text: 'No employee with such ID found! Or check your network and try again',
              type: 'error',
            })
            this.empId = ''
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