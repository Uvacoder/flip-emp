<template>
  <div>
    <!-- <appHeader /> -->
    <Nuxt />
    <notifications animation-type="velocity"/>
    <appFooter />
  </div>
</template>

<script>
import appHeader from '../components/appHeader'
import appFooter from '../components/appFooter'
export default {
  components: {
    appHeader,
    appFooter
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

button {
  @apply bg-blue-500;
  @apply px-3;
  @apply py-2;
  @apply rounded-md;
  @apply text-white;
}

input:focus {
  @apply outline-none;
}

/* .appear {
  animation-name: appear;
  animation-duration: 1000ms;
} */

@keyframes appear {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

.my-container {
  @apply px-3;
  @apply w-full;
}
</style>
