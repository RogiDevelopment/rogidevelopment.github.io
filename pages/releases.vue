<template>
  <div class="releases">
    <div class="releases__title">
      <h1>Release Notes</h1>
    </div>
    <div class="releases__list">
      <div v-for="release in releases" :key="release.id" class="release">
        <div class="release__title">
          <h1>{{ release.tag_name }}</h1>
        </div>
        <div class="release__body" v-html="$md.render(release.body)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Releases',
  data() {
    return {
      releases: [],
    }
  },
  async fetch() {
    this.releases = (
      await this.$axios.get(
        'https://api.github.com/repos/IrisShaders/Iris/releases'
      )
    ).data
  },
})
</script>

<style lang="scss">
.releases {
  @apply max-w-screen-2xl mx-auto mb-12 p-6;
  .releases__title {
    h1 {
      @apply my-12 text-center text-5xl font-semibold text-primary-500;
    }
  }
  .releases__list {
    @apply flex flex-col gap-6;
    .release {
      @apply bg-light-100 p-6 rounded-2xl;
      .release__title {
        @apply my-6 text-center text-3xl font-semibold text-primary-500;
      }
      .release__body {
        @apply text-xl font-medium text-opacity-60 text-primary-800;
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          @apply my-6 text-2xl font-semibold text-primary-500;
        }
        p {
          @apply my-4;
        }
        ul {
          li {
            position: relative;
            @apply mr-4;
            code {
              @apply my-6 text-xl font-semibold text-primary-500;
            }
          }
        }
      }
    }
  }
}

.dark .releases .releases__list .release {
  @apply bg-dark-700;
  .release__body {
    @apply text-opacity-90 text-light-100;
  }
}
</style>
