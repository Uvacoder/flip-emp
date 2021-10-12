<template>
  <div>
    <appHeader />
    <div class="h-screen">
      <div class="flex flex-col items-center justify-center h-screen">
        <div>
          <svg
            style="
              margin: auto;
              background: none;
              display: block;
              shape-rendering: auto;
            "
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              r="0"
              fill="none"
              stroke="#93dbe9"
              stroke-width="2"
            >
              <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                values="0;40"
                keyTimes="0;1"
                keySplines="0 0.2 0.8 1"
                calcMode="spline"
                begin="0s"
              ></animate>
              <animate
                attributeName="opacity"
                repeatCount="indefinite"
                dur="1s"
                values="1;0"
                keyTimes="0;1"
                keySplines="0.2 0 0.8 1"
                calcMode="spline"
                begin="0s"
              ></animate>
            </circle>
            <circle
              cx="50"
              cy="50"
              r="0"
              fill="none"
              stroke="#689cc5"
              stroke-width="2"
            >
              <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                values="0;40"
                keyTimes="0;1"
                keySplines="0 0.2 0.8 1"
                calcMode="spline"
                begin="-0.5s"
              ></animate>
              <animate
                attributeName="opacity"
                repeatCount="indefinite"
                dur="1s"
                values="1;0"
                keyTimes="0;1"
                keySplines="0.2 0 0.8 1"
                calcMode="spline"
                begin="-0.5s"
              ></animate>
            </circle>
          </svg>
          <p class="font-semibold">Fetching Employee Details...{{ empId }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '~/components/appHeader.vue'
import gql from 'graphql-tag'

const findEmployee = gql`
  query findEmployee($empId: String) {
    findEmployee(empId: $empId) {
      emId
    }
  }
`

export default {
  components: {
    appHeader,
  },
  data() {
    return {
      empId: '',
    }
  },
  methods: {
    async fetchEmployerInfo() {
      this.empId = this.$route.params.id.toUpperCase()
      const res = await this.$apollo
        .query({
          query: findEmployee,
          variables: {
            empId: this.empId,
          },
        })
        .then((res) => {
          if (res.data) {
            this.$store.commit('updateEmpId', res.data.findEmployee.emId)
            this.empId = ''
            this.$router.push('/home')
          }
        })
        .catch((err) => {
          this.$router.push('/')
          this.$notify({
            title: 'Error',
            text: 'No employee with such ID found! Or check your network and try again',
            type: 'error',
          })
        })
    },
  },
  mounted() {
    this.fetchEmployerInfo()
  },
}
</script>

<style>
</style>