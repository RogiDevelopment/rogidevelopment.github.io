<template>
  <div class="error">
    <div v-if="error.statusCode === 404">
      <div class="error__icon"><ExclamationIcon size="2x" /></div>
      <h1>This page not found or removed</h1>
      <p>
        Looks like you are trying to access page that we don't have, try to
        check your link for errors!
      </p>
    </div>
    <div v-else>
      <div class="error__icon red"><ExclamationCircleIcon size="2x" /></div>
      <h1>Internal error occured!</h1>
      <p>Something is not right, we recived error #{{ error.statusCode }}.</p>
      <p>Detailed error: {{ error }}</p>
    </div>
    <NuxtLink to="/"
      ><UIButton theme="primary" size="large"
        >Move to Homepage</UIButton
      ></NuxtLink
    >
  </div>
</template>

<script lang="ts">
import { ExclamationCircleIcon, ExclamationIcon } from '@vue-hero-icons/outline'

import Vue from 'vue'
export default Vue.extend({
  components: {
    ExclamationCircleIcon,
    ExclamationIcon,
  },
  props: ['error'],
})
</script>

<style lang="scss" scoped>
.error {
  height: 60vh;
  @apply flex flex-col text-center items-center justify-center max-w-screen-2xl m-auto;
  .error__icon {
    @apply flex justify-center text-6xl text-yellow-500;
    &.red {
      @apply text-red-500;
    }
  }
  h1 {
    @apply text-5xl text-primary-500 font-semibold my-4;
  }
  p {
    @apply text-xl my-4 font-medium;
  }
}

.dark .error {
  p {
    @apply text-light-100;
  }
}
</style>
