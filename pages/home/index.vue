<template>
  <div class="grid grid-cols-12 appear">
    <mobileNav @toggleView="toggleView"/>
    <sidebar @toggleView="toggleView"/>
    <staffHome class="appear" :staffInfo="staffInfo" v-if="showTab === 'home'"/>
    <staffHistory class="appear" :staffInfo="staffInfo" v-if="showTab === 'history'"/>
  </div>
</template>

<script>
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
  },
  data () {
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
          { role: 'Junior Project manager', dateOfEmployment: '01 - March - 2021' },
        ]
      }
    }
  },
  methods: {
    toggleView(data) {
      this.showTab = data
    }
  }
}
</script>

<style>

</style>