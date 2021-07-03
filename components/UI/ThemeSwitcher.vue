<template>
  <div class="switcher" @click="changeTheme">
    <SunIcon v-if="$colorMode.value === 'light'" size="2x" />
    <MoonIcon v-else size="2x" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { SunIcon, MoonIcon } from '@vue-hero-icons/outline'

export default Vue.extend({
  name: 'ThemeSwitcher',
  components: {
    SunIcon,
    MoonIcon,
  },
  methods: {
    changeTheme() {
      if (this.$colorMode.value === 'light') {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    },
  },
})
</script>

<style lang="scss">
.switcher {
  @apply cursor-pointer p-3 sm:p-4 bg-primary-500 text-light-50 rounded-full shadow-2xl;
  svg {
    @apply text-base sm:text-[1em];
  }
}

.dark .switcher {
  background: #080e16;
}
</style>
