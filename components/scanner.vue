<template>
  <div v-if="show" class="fixed w-full h-screen bg-black bg-opacity-20 lg:hidden">
    <div class="flex flex-col justify-center items-center">
      <qrcode-stream @decode="onDecode"></qrcode-stream>
      <button @click="cancel">Done</button>
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
      window.location.replace(decodedString);
    }
  }
}
</script>

<style>

</style>