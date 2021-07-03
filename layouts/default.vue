<template>
  <div class="app">
    <div class="floating-buttons">
      <UILanguageSwitcher class="mb-4" />
      <UIThemeSwitcher />
    </div>
    <Navbar />
    <Nuxt class="content" />
    <Footer />
  </div>
</template>

<style lang="scss">
.title-divider {
  @apply flex text-5xl sm:text-[5.5rem] text-center justify-center px-6 py-12 font-bold text-primary-500;
  &.title-divider_advantages {
    @apply bg-light-100;
  }
}

.floating-buttons {
  position: fixed;
  right: 0;
  bottom: 0;
  @apply flex flex-col items-center p-4 sm:p-6 z-50;
}

.dark .title-divider.title-divider_advantages {
  @apply bg-dark-700;
}
</style>
