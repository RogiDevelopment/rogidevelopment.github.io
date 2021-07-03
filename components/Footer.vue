<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__items">
        <div class="footer__item">
          <h3 class="footer__header">{{ $t('footer.about.title') }}</h3>
          <p>
            {{ $t('footer.about.description') }}
          </p>
        </div>
        <div class="footer__item">
          <h3 class="footer__header">{{ $t('footer.links.title') }}</h3>
          <NuxtLink to="/downloads">{{
            $t('footer.links.items.download_now')
          }}</NuxtLink>
          <a href="https://www.curseforge.com/minecraft/mc-mods/irisshaders">{{
            $t('footer.links.items.curseforge')
          }}</a>
          <a href="https://modrinth.com/mod/iris">{{
            $t('footer.links.items.modrinth')
          }}</a>
        </div>
        <div class="footer__item">
          <h3 class="footer__header">{{ $t('footer.socials.title') }}</h3>
          <a href="https://github.com/IrisShaders/Iris">{{
            $t('footer.socials.items.github')
          }}</a>
          <a href="https://discord.gg/jQJnav2jPu">{{
            $t('footer.socials.items.discord')
          }}</a>
          <a href="https://www.patreon.com/coderbot">{{
            $t('footer.socials.items.patreon')
          }}</a>
        </div>
      </div>
      <div class="footer__copyright">
        <p>{{ $t('footer.copyright[0]') }}</p>
        <p class="flex flex-row items-center">
          <UserCircleIcon size="0.9x" />
          &nbsp;{{ $t('footer.copyright[1]') }}&nbsp;
          <a href="https://github.com/rogi27">Rogi27</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { UserCircleIcon } from '@vue-hero-icons/outline'

export default Vue.extend({
  name: 'Footer',
  components: {
    UserCircleIcon,
  },
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.footer {
  @apply w-full m-auto text-xl px-12 py-12 flex-nowrap text-light-100 bg-primary-500;
  .footer__wrapper {
    @apply max-w-screen-2xl m-auto;
  }
  .footer__copyright {
    @apply flex flex-col text-xl text-light-100 font-medium;
    a {
      @apply transition-colors text-light-100 text-opacity-50 font-medium ease-in-out duration-150 py-0.5;
      &:hover {
        @apply text-light-50;
      }
    }
  }
  .footer__items {
    @apply flex md:flex-row flex-col flex-nowrap justify-between mb-6;
    .footer__item {
      flex: 0 0 20vw;
      @apply flex flex-col mb-6 md:mb-0 text-light-100 text-opacity-50;
      h3 {
        @apply font-medium text-2xl mb-4 text-light-100;
      }
      a {
        @apply transition-colors font-medium ease-in-out duration-150 py-0.5;
        &:hover {
          @apply text-light-50;
        }
      }
    }
  }
}

.dark .footer {
  @apply bg-dark-700;
}
</style>
