<template>
  <div class="faq-item">
    <h1 class="faq-item__title" @click="collapsed = !collapsed">
      <span class="faq-item__chevron" :class="{ open: !collapsed }"
        ><ChevronUpIcon size="1.5x" /></span
      ><slot name="question" />
    </h1>
    <div v-if="!collapsed" class="faq-item__answer">
      <slot name="answer" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ChevronUpIcon } from '@vue-hero-icons/outline'
import smoothReflow from 'vue-smooth-reflow'

export default Vue.extend({
  name: 'Spoiler',
  components: {
    ChevronUpIcon,
  },
  mixins: [smoothReflow],
  data() {
    return { collapsed: true }
  },
  mounted() {
    if (this.$smoothReflow !== undefined) {
      this.$smoothReflow({
        el: '.faq-item',
      })
    }
  },
})
</script>

<style lang="scss">
.faq-item {
  @apply bg-light-200 rounded-2xl;
  .faq-item__title {
    @apply p-6 cursor-pointer;
    .faq-item__chevron {
      @apply transition-all duration-200 ease-in-out transform-gpu rotate-0 mr-2;
      &.open {
        @apply rotate-180;
      }
    }
    @apply flex flex-row items-center text-primary-500 text-2xl font-semibold;
  }
  .faq-item__answer {
    @apply p-6 pt-0;
    p {
      @apply text-xl font-medium text-opacity-60 text-primary-800;
    }
    a {
      @apply text-primary-500;
    }
  }
}

.dark .faq-item {
  @apply bg-dark-700;
  .faq-item__answer {
    p {
      @apply text-opacity-90 text-light-100;
    }
  }
}
</style>
