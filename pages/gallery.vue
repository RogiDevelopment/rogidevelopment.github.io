<template>
  <div>
    <transition name="pageChange">
      <div v-if="currentImage !== null" class="overlay">
        <img :src="`/img/gallery/${currentImage}.png`" />
        <div class="overlay__author">
          <p>
            {{ $t('pages.gallery.photo_copyright') }} <b>{{ currentImage }}</b>
          </p>
        </div>
        <div class="overlay__exit">
          <p @click="currentImage = null"><XIcon size="2x" /></p>
        </div>
      </div>
    </transition>
    <div class="gallery">
      <div class="gallery__title">
        <h1>{{ $t('pages.gallery.title') }}</h1>
      </div>
      <div class="gallery__images">
        <div
          v-for="item in images"
          :key="item"
          class="gallery__image"
          @click="currentImage = item"
        >
          <img :src="`/img/gallery/${item}.png`" />
          <div class="gallery__author">
            <p>
              {{ $t('pages.gallery.photo_copyright') }} <b>{{ item }}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { XIcon } from '@vue-hero-icons/outline'

import Vue from 'vue'
export default Vue.extend({
  name: 'Gallery',
  components: {
    XIcon,
  },
  data() {
    return {
      currentImage: null,
      images: [
        'editid',
        'FluffyPets',
        'Guardian',
        'H3153N',
        'Hauntedpasta1',
        'jauchland',
        'Jayce',
        'kinzuu_music',
        'llrluis',
        'Ultra',
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.gallery {
  @apply max-w-screen-2xl mx-auto mb-12 p-6;
  .gallery__title {
    h1 {
      @apply my-12 text-center text-5xl font-semibold text-primary-500;
    }
  }
  .gallery__images {
    @apply flex flex-wrap xl:flex-row flex-col justify-center gap-6;
    .gallery__image {
      flex: 0 0 25vw;
      @apply transform-gpu transition-all duration-100 cursor-pointer relative overflow-hidden rounded-2xl;
      &:hover {
        @apply scale-105;
      }
      img {
        @apply h-full;
      }
      .gallery__author {
        bottom: 0;
        left: 0;
        @apply absolute m-2 font-medium text-light-50 rounded-2xl backdrop-filter backdrop-blur-md bg-dark-900 bg-opacity-40 px-12 py-2;
      }
    }
  }
}

.overlay {
  @apply fixed flex justify-center inset-0 backdrop-filter backdrop-blur-md bg-dark-700 bg-opacity-60 z-50;
  img {
    height: fit-content;
    width: 100%;
    @apply m-auto;
  }
  .overlay__author {
    @apply absolute text-light-50 left-0 top-0 m-6;
  }
  .overlay__exit {
    @apply text-2xl text-light-50 absolute right-0 top-0 m-6;
    p {
      @apply cursor-pointer;
    }
  }
}
</style>
