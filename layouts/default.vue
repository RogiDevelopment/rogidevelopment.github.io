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
  font-size: 5.5rem;
  @apply flex justify-center py-12 font-bold text-primary-500;
  &.title-divider_advantages {
    @apply bg-light-100;
  }
}

.floating-buttons {
  position: fixed;
  right: 0;
  bottom: 0;
  @apply p-6 z-50;
}

.dark .title-divider.title-divider_advantages {
  @apply bg-dark-700;
}
</style>
