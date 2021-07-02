<template>
  <nav class="navbar" :class="{ navbar_intro: $route.name == 'index' }">
    <div class="navbar-inner">
      <div class="flex flex-grow-0 navbar-logo">
        <NuxtLink to="/"> <img class="h-14" src="/logo.png" /> </NuxtLink>
      </div>
      <div class="flex flex-row items-center ml-auto">
        <NuxtLink
          v-for="item in navbarItems"
          :key="item.string"
          :to="item.url"
          class="hidden navbar-item lg:inline-block"
          >{{ $t(`navigation.${item.string}`) }}</NuxtLink
        >
        <NuxtLink to="/downloads"
          ><UIButton
            class="hidden navbar-item lg:inline-block"
            theme="primary"
            >{{ $t(`navigation.download`) }}</UIButton
          ></NuxtLink
        >
        <a
          href="javascript:void(0)"
          class="inline-block navbar-item lg:hidden"
          @click="mobileMenu = !mobileMenu"
          ><MenuIcon size="2x"
        /></a>
      </div>
    </div>
    <transition name="menuToggle">
      <div v-if="mobileMenu" class="navbar-mobile">
        <div class="absolute top-0 right-0 z-50 p-12 text-light-50">
          <a href="javascript:void(0)" @click="mobileMenu = !mobileMenu"
            ><XIcon size="2.5x" />
          </a>
        </div>
        <div class="navbar-mobile__container">
          <NuxtLink
            v-for="item in navbarItems"
            :key="item.string"
            :to="item.url"
            class="navbar-item navbar-item_mobile"
            >{{ $t(`navigation.${item.string}`) }}</NuxtLink
          >
        </div>
      </div>
    </transition>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { MenuIcon, XIcon } from '@vue-hero-icons/outline'

export default Vue.extend({
  name: 'Navbar',
  components: {
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      mobileMenu: false,
      navbarItems: [
        {
          string: 'introduction',
          url: '/',
        },
        {
          string: 'faq',
          url: '/faq',
        },
        {
          string: 'gallery',
          url: '/gallery',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.navbar {
  @apply w-full transition-all relative z-40 m-auto py-6 flex-nowrap;

  .navbar-inner {
    @apply px-6 max-w-screen-2xl m-auto flex flex-nowrap items-center;
  }
  .navbar-item {
    @apply transition-colors duration-300 ease-in-out text-xl font-semibold text-light-300 ml-12 tracking-normal;
    &:hover {
      @apply text-primary-500;
    }
    &.button {
      @apply text-xl font-semibold ml-8 py-2.5 px-9 tracking-normal text-light-100;
    }
  }

  .navbar-mobile {
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;

    @apply transition p-6 ease-out transform-gpu z-50 backdrop-filter backdrop-blur-sm bg-dark-600 bg-opacity-80 fixed;
  }
  .navbar-mobile__container {
    @apply flex flex-col flex-shrink items-center h-full justify-center;
  }

  .navbar-item_mobile {
    @apply transition-all ease-out duration-100 text-4xl font-semibold text-light-100 tracking-normal p-2 w-3/4 sm:w-1/2;
    &:hover {
      @apply text-primary-500 ml-12;
    }
  }

  &.navbar_intro {
    .navbar-item {
      @apply text-light-100;
      &:hover {
        @apply text-opacity-50;
      }
    }
  }
}

.menuToggle-enter-active,
.menuToggle-leave-active {
  @apply transition-all ease-out;
}
.menuToggle-enter,
.menuToggle-leave-to {
  opacity: 0;
  @apply transform-gpu scale-110 translate-y-12 origin-top;
}
</style>
