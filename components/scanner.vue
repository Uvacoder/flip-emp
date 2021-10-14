<template>
  <div v-if="show" class="fixed w-full h-screen bg-black bg-opacity-20 lg:hidden">
    <div class="flex flex-col justify-center items-center p-3">
      <qrcode-stream @decode="onDecode"></qrcode-stream>
      <button class="my-3" @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    cancel () {
      this.show = !this.show
    },
    onDecode (decodedString) {
      // window.location.replace(decodedString);
      // console.log(decodedString.slice(26))
      this.$router.push(`/scan/${decodedString.slice(26)}`)
    }
  }
}
</script>

<style>

</style>