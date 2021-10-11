<template>
  <div class="grid grid-cols-12">
    <mobileNav @toggleView="toggleView" />
    <sidebar @toggleView="toggleView" />
    <div v-if="loading" class="col-start-1 xl:col-start-3 sm:col-start-4 col-end-13 h-screen">
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
        <p class="font-semibold">Fetching Employee Details...</p>
        </div>
      </div>
    </div>
    <div
      v-else-if="showTab === 'home'"
      class="
        appear
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
      <search />
      <staffHome :staffInfo="staffInfo" />
    </div>
    <div
      v-else-if="showTab === 'history'"
      class="
        appear
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
      <search />
      <staffHistory :staffInfo="staffInfo" />
    </div>
  </div>
</template>

<script>
import search from '~/components/search.vue'
import sidebar from '~/components/sidebar'
import staffHome from '~/components/staffHome'
import staffHistory from '~/components/staffHistory'
import mobileNav from '~/components/mobileNav.vue'
import gql from 'graphql-tag'

const fetchEmployeeInfo = gql`
  query findEmployee($empId: String!) {
    findEmployee(empId: $empId) {
      name
      currentR
      email
      emId
      doe
      active
      imageUrl
      history {
        role
        duration
      }
    }
  }
`

export default {
  head: {
    title: 'Staff Info.',
  },
  components: {
    sidebar,
    staffHome,
    staffHistory,
    mobileNav,
    search,
  },
  data() {
    return {
      showTab: 'home',
      staffInfo: '',
      loading: true,
    }
  },
  computed: {
    empId() {
      return this.$store.getters.empId
      // return this.$store.state.empId
    },
  },
  methods: {
    toggleView(data) {
      this.showTab = data
    },
    async fetchEmployeeInfo() {
      this.loading = true
      const res = await this.$apollo
        .query({
          query: fetchEmployeeInfo,
          variables: {
            empId: this.empId,
          },
        })
        .then((res) => {
          this.staffInfo = res.data.findEmployee
          this.loading = false
        })
        .catch(() => {
          console.log('error')
          this.loading = true
        })
    },
  },
  mounted() {
    this.fetchEmployeeInfo()
  },
  middleware: 'validId',
}
</script>

<style>
</style>