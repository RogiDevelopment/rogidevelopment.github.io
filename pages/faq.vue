<template>
  <div>
    <div class="faq">
      <div class="faq__title">
        <h1>{{ $t('pages.faq.title') }}</h1>
      </div>
      <div class="faq__items">
        <UISpoiler v-for="item in $t('pages.faq.solutions')" :key="item.title">
          <template slot="question">{{ item.title }}</template>
          <template slot="answer">
            <p v-for="line in item.description" :key="line" v-html="line" />
          </template>
        </UISpoiler>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FAQ',
})
</script>

<style lang="scss" scoped>
.faq {
  @apply max-w-screen-2xl mx-auto mb-12 p-6;
  .faq__title {
    h1 {
      @apply my-12 text-center text-5xl font-semibold text-primary-500;
    }
  }
  .faq__items {
    @apply flex flex-col gap-6;
  }
}
</style>
