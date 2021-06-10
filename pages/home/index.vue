<template>
  <div class="grid grid-cols-12 appear">
    <mobileNav @toggleView="toggleView" />
    <sidebar @toggleView="toggleView" />
    <div
      v-if="showTab === 'home'"
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
      v-if="showTab === 'history'"
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
export default {
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
      staffInfo: {
        name: 'David Adeyemi',
        currentRole: 'Project manager',
        email: 'Dave@flippay.co',
        employeeId: '12 - 42355 FP',
        dateOfEmployment: '01 - March - 2021',
        status: true,
        staffHistory: [
          { role: 'Project manager', duration: '3 years and 6 days' },
          { role: 'Junior Project manager', duration: '4 months and 6 days' },
          {
            role: 'Junior Project manager',
            dateOfEmployment: '01 - March - 2021',
          },
        ],
      },
    }
  },
  methods: {
    toggleView(data) {
      this.showTab = data
    },
  },
}
</script>

<style>
</style>