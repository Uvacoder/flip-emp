<template>
  <div class="appear">
    <appHeader />
    <scanner v-if="scanner"/>
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
              class="w-full py-2 px-2 border border-gray-400 rounded my-4"
              placeholder="Type name here"
              type="text"
            />
          </form>
          <div class="flex gap-x-2">
            <button
              @click="fetchEmployee"
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
            <button
              @click="toggleScanner"
              :class="{
                disabled: loading,
              }"
              class="
                bg-blue-200 bg-opacity-0 hover:bg-opacity-100
                border-2 border-blue-500
                p-2
                rounded
                w-10
                lg:hidden
              "
            >
              <svg
                class="w-5 mx-auto fill-current text-blue-500"
                viewBox="0 0 100 125"
                enable-background="new 0 0 100 100"
              >
                <g>
                  <g>
                    <path
                      d="M50.5,35.435h4.943v6.179h2.472V24.312h-2.472v8.65h-4.375v-2.471h-4.943v2.472H50.5V35.435z M75.216,26.784h-9.887v9.886    h9.887V26.784z M50.5,39.142h0.568V36.67h-4.943v2.472h-0.568v-14.83h-2.472v17.301H50.5V39.142z M52.472,27.278h-4.943v2.472    h4.943V27.278z M62.857,44.085v2.471h-4.942v2.472h9.886v-4.943H62.857z M80.159,58.915v-2.472h-4.943v2.472H80.159z     M77.688,53.972V51.5h2.472v-4.943h-2.472v-2.471h-7.415v4.943h4.943V51.5h-2.472v2.472h-2.472v-4.943h-2.472v9.887h4.943v-2.472    h2.472v-2.472H77.688z M65.329,63.858h4.943v-2.472h-4.943V63.858z M10.955,13.932h15.818V9.978H7V29.75h3.955V13.932z     M80.159,21.841H60.387v19.773h19.772V21.841z M77.688,39.142h-14.83v-14.83h14.83V39.142z M60.387,76.216h4.942v-2.472h-4.942    V76.216z M25.784,36.67h9.886v-9.886h-9.886V36.67z M50.5,73.744h-4.943v4.943H50.5v2.472h4.943v-2.472h2.472v2.472h4.942v-2.472    h-2.471v-2.472H50.5V73.744z M74.228,9.978v3.954h15.817V29.75H94V9.978H74.228z M80.159,81.159v-9.887h-4.943v4.943h-2.472    v-2.472h-2.472v-2.472h4.943V66.33h2.472v-2.472h2.472v-2.472h-4.943v2.472h-2.472v2.472h-4.943v2.471h-2.472V66.33h-9.886v-2.472    h2.472v-2.472h2.472v-2.472h2.471v-4.943h-2.471V51.5h-7.415v4.943H50.5v9.887h-2.472v-4.943h-4.943v4.943h2.472v4.942h7.415    v2.472h7.415v-4.943h2.471v2.472h2.472v2.472h2.472v2.472h2.472v2.472h2.472v2.472H80.159z M52.972,58.915h2.472v2.472h-2.472    V58.915z M55.443,49.028v-4.943H35.67v2.471h-2.472v-2.471h-7.415v4.943h4.943V51.5h-2.472v2.472h-2.472v-4.943h-4.943v9.887    h7.415v-2.472h2.472v-2.472h2.471V51.5h2.472v-2.472h2.472v-2.472h2.472V51.5h-2.472v2.472h4.943v-4.943h2.472v7.415H33.199v2.472    h14.83v-2.472H50.5v-7.415H55.443z M20.841,81.159h19.773V61.387H20.841V81.159z M23.312,63.858h14.83v14.829h-14.83V63.858z     M20.841,41.614h19.773V21.841H20.841V41.614z M23.312,24.312h14.83v14.83h-14.83V24.312z M10.955,73.25H7v19.772h19.772v-3.954    H10.955V73.25z M25.784,76.216h9.886V66.33h-9.886V76.216z M90.045,89.068H74.228v3.954H94V73.25h-3.955V89.068z"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </div>
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
              text: 'No employee with such ID found!',
              type: 'error',
            })
            this.loading = false
          })
      }
    },
    toggleScanner () {
      this.scanner = !this.scanner
    }
  },
}
</script>

<style scoped>
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