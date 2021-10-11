<template>
  <div>
    <div>
      <form @submit.prevent="fetchEmployeeInfo">
        <input
          v-model="empId"
          class="
            block
            mx-auto
            mb-10
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
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
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
  data() {
    return {
      empId: '',
    }
  },
  validations: {
    empId: {
      required,
    },
  },
  methods: {
    async fetchEmployeeInfo() {
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
              text: err.message,
              type: 'error',
            })
            this.empId = ''
          })
      }
    },
  },
}
</script>

<style>
</style>