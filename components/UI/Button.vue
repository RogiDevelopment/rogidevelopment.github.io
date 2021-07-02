<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="button"
    :class="{
      'button-default': theme === 'default',
      'button-primary': theme === 'primary',
      'button-transparent': theme === 'transparent',
      'button-sm': size === 'small',
      'button-md': size === 'medium',
      'button-xl': size === 'large',
    }"
  >
    <slot name="icon-left" /> <span><slot /></span>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'medium',
    },
    href: {
      type: String,
    },
  },
})
</script>

<style lang="postcss" scoped>
.button {
  @apply transform-gpu text-center inline-flex flex-nowrap flex-row items-center outline-none rounded-full font-semibold transition-all duration-150 ease-out;
  &:active {
    @apply opacity-80 translate-y-1;
  }
}

.button-default {
  @apply bg-light-100 text-light-400;
  &:hover {
    @apply bg-light-200 text-light-500;
  }
}
.dark .button-default {
  @apply bg-dark-800 text-opacity-90 text-light-100;
  &:hover {
    @apply bg-dark-700 text-opacity-90 text-light-50;
  }
}
.button-primary {
  @apply bg-primary-500 text-white;
  &:hover {
    @apply bg-primary-600 text-white;
  }
}
.button-transparent {
  @apply backdrop-filter backdrop-blur-md bg-light-100 bg-opacity-10 text-white;
  &:hover {
    @apply bg-light-200 bg-opacity-20 text-white;
  }
}

.button-sm {
  @apply px-6 py-2 text-sm;
}
.button-md {
  @apply px-8 py-4 text-base;
}
.button-xl {
  @apply px-8 py-5 text-xl;
}
.button-xl svg {
  @apply -my-5;
  &:first-child {
    @apply mr-3;
  }
  &:last-child {
    @apply ml-3;
  }
}
</style>
