<template>
  <div>
    <transition name="pageChange">
      <div v-if="languagePopup" class="languages-overlay">
        <div class="languages-overlay__list">
          <a
            v-for="locale in availableLocales"
            :key="locale.code"
            href="#"
            @click.prevent.stop="applyLocale(locale.code)"
            >{{ locale.name }}</a
          >
        </div>
        <div class="languages-overlay__exit">
          <p @click="languagePopup = !languagePopup"><XIcon size="2x" /></p>
        </div>
      </div>
    </transition>
    <div class="language-switcher" @click="languagePopup = !languagePopup">
      <TranslateIcon size="2x" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateIcon, XIcon } from '@vue-hero-icons/outline'

export default Vue.extend({
  name: 'LanguageSwitcher',
  components: {
    TranslateIcon,
    XIcon,
  },
  data() {
    return {
      languagePopup: false,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
  methods: {
    applyLocale(locale) {
      this.$i18n.setLocale(locale)
      this.$data.languagePopup = !this.$data.languagePopup
    },
  },
})
</script>

<style lang="scss">
.languages-overlay {
  @apply fixed backdrop-filter backdrop-blur-md bg-dark-800 bg-opacity-60 inset-0 z-50;
  .languages-overlay__list {
    @apply h-full flex flex-col items-center justify-center;
    a {
      @apply transition-all duration-100 text-4xl font-semibold text-light-50 my-2;
      &:hover {
        @apply text-5xl;
      }
    }
  }
  .languages-overlay__exit {
    @apply text-2xl text-light-50 absolute right-0 top-0 m-6;
    p {
      @apply cursor-pointer;
    }
  }
}

.language-switcher {
  @apply cursor-pointer p-4 bg-primary-500 text-light-50 rounded-full shadow-2xl;
}

.dark .language-switcher {
  background: #080e16;
}
</style>
