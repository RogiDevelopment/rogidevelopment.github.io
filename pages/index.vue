<template>
  <div>
    <div class="intro__wrapper">
      <transition mode="in-out" name="bgChange">
        <div
          v-if="backgroundType == 1"
          :key="1"
          class="intro__background"
          style="background-image: url('/img/b1.png')"
        />

        <div
          v-if="backgroundType == 2"
          :key="2"
          class="intro__background"
          style="background-image: url('/img/b2.png')"
        />

        <div
          v-if="backgroundType == 3"
          :key="3"
          class="intro__background"
          style="background-image: url('/img/b3.png')"
        />
      </transition>
      <div class="intro__authors">
        <p
          v-html="
            $t('pages.index.intro.author_copyright', [
              'High like Jesus#4351',
              `Ro_off#4014`,
              `Arkehtect#9633`,
            ])
          "
        />
      </div>
      <div class="intro">
        <div class="intro__title">
          <h1>{{ $t('pages.index.intro.heading') }}</h1>
          <h2>
            {{ $t('pages.index.intro.description') }}
          </h2>
          <div class="title__buttons">
            <NuxtLink to="/downloads"
              ><UIButton size="medium" theme="primary"
                >{{ $t('pages.index.intro.buttons.downloads') }}
              </UIButton></NuxtLink
            >
            <UIButton href="#features" size="medium" theme="transparent"
              >{{ $t('pages.index.intro.buttons.learn_more') }}
            </UIButton>
          </div>
        </div>
      </div>
    </div>
    <div id="features" class="title-divider">
      <h1>{{ $t('pages.index.features.title') }}</h1>
    </div>
    <div class="features">
      <div class="features__content">
        <div class="features__info">
          <h1>{{ $t('pages.index.features.optifine_parity.title') }}</h1>
          <p>
            {{ $t('pages.index.features.optifine_parity.description') }}
          </p>
        </div>
        <div class="features__image">
          <img
            v-if="$colorMode.value === 'light'"
            src="/img/optifineiris_light.png"
          />
          <img v-else src="/img/optifineiris_dark.png" />
        </div>
      </div>
    </div>
    <div class="features">
      <div class="features__content features__content_reverse">
        <div class="features__info">
          <h1>{{ $t('pages.index.features.sodium_support.title') }}</h1>
          <p>
            {{ $t('pages.index.features.sodium_support.description') }}
          </p>
        </div>
        <div class="features__image">
          <img
            v-if="$colorMode.value === 'light'"
            src="/img/sodiumiris_light.png"
          />
          <img v-else src="/img/sodiumiris_dark.png" />
        </div>
      </div>
    </div>
    <div class="title-divider title-divider_advantages">
      <h1>{{ $t('pages.index.advantages.title') }}</h1>
    </div>
    <div class="advantages">
      <div class="advantages__items">
        <div class="advantages__item">
          <div class="advantages__icon"><EyeIcon size="2x" /></div>
          <h3>{{ $t('pages.index.advantages.advantages[0].title') }}</h3>
          <p>
            {{ $t('pages.index.advantages.advantages[0].description') }}
          </p>
        </div>
        <div class="advantages__item">
          <div class="advantages__icon"><CubeIcon size="2x" /></div>
          <h3>{{ $t('pages.index.advantages.advantages[1].title') }}</h3>
          <p>
            {{ $t('pages.index.advantages.advantages[1].description') }}
          </p>
        </div>
        <div class="advantages__item">
          <div class="advantages__icon"><ChipIcon size="2x" /></div>
          <h3>{{ $t('pages.index.advantages.advantages[2].title') }}</h3>
          <p>
            {{ $t('pages.index.advantages.advantages[2].description') }}
          </p>
        </div>
      </div>
    </div>
    <div class="title-divider">
      <h1>{{ $t('pages.index.download_now.title') }}</h1>
    </div>
    <div class="download-button">
      <NuxtLink to="/downloads"
        ><UIButton size="large" theme="primary">{{
          $t('pages.index.download_now.buttonText')
        }}</UIButton></NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ChipIcon, CubeIcon, EyeIcon } from '@vue-hero-icons/outline'

export default Vue.extend({
  components: {
    ChipIcon,
    CubeIcon,
    EyeIcon,
  },
  data() {
    return {
      backgroundType: 1,
    }
  },
  head() {
    return {
      title: this.$t('pages.index.metaTitle').toString(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.index.intro.description').toString(),
        },
        {
          hid: 'og_description',
          name: 'og_description',
          content: this.$t('pages.index.intro.description').toString(),
          property: 'og:description',
        },
      ],
    }
  },
  mounted() {
    const changeBackground = () => {
      if (this.$data.backgroundType >= 3) {
        this.$data.backgroundType = 1
      } else {
        this.$data.backgroundType += 1
      }
    }

    setInterval(changeBackground, 5 * 1000)
  },
})
</script>

<style lang="scss" scoped>
.intro__wrapper {
  margin-top: -104px; // Compensate Navbar height, be sure to change it when navbar height changes.
  @apply relative bg-dark-500 overflow-hidden;

  * {
    @apply transition-all ease-out;
  }

  .intro__authors {
    @apply text-light-100 text-opacity-30 absolute p-4 bottom-0 z-30;
    b {
      @apply text-light-50 text-opacity-40;
    }
  }
  .intro__background {
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
    inset: -32px;
    filter: brightness(30%);
    background-size: cover;
    background-position: center center;
    @apply absolute;
  }
  .intro {
    @apply flex flex-nowrap flex-row h-[calc(100vh+1.5rem)] relative max-w-screen-2xl mx-auto justify-center p-8 -mt-6;
  }
  .intro__title {
    @apply text-center relative my-auto z-20;
  }
  .intro__title h1 {
    @apply font-bold text-6xl sm:text-[5.5rem] text-primary-500;
  }
  .intro__title h2 {
    max-width: 60rem;
    @apply relative mt-6 font-medium text-xl sm:text-3xl text-light-100;
  }
  .title__buttons {
    @apply flex flex-col sm:flex-row mt-6 gap-2 sm:gap-6 text-xl;
    .button,
    a {
      @apply text-xl justify-center w-full;
    }
  }
}

.features {
  @apply flex my-16 p-8 justify-center flex-col max-w-screen-2xl mx-auto;

  .features__content {
    @apply flex flex-col sm:flex-row w-full gap-6 items-center;
  }
  .features__content_reverse {
    @apply sm:flex-row-reverse;
    .features__image {
      @apply mr-auto ml-0;
    }
  }
  .features__image {
    @apply ml-auto;
  }
  .features__info h1 {
    @apply font-bold text-4xl leading-tight md:text-[4rem] mb-6 text-primary-500;
  }
  .features__info p {
    @apply max-w-screen-sm font-medium text-2xl text-opacity-50 text-primary-800;
  }
}

.dark .features {
  .features__info p {
    @apply text-opacity-90 text-light-100;
  }
}

.advantages {
  @apply bg-light-100 py-16 p-8;
  .advantages__items {
    @apply flex flex-col gap-6 md:flex-row justify-between max-w-screen-2xl mx-auto;
    .advantages__item {
      flex: 0 1 352px;
      .advantages__icon {
        @apply inline-flex p-2 rounded-2xl bg-light-200 text-primary-500 mb-4 text-4xl;
      }
      h3 {
        @apply text-primary-500 font-semibold text-4xl;
      }
      p {
        @apply text-opacity-60 text-primary-700 my-2 text-2xl;
      }
    }
  }
}

.dark .advantages {
  @apply bg-dark-700;
  .advantages__item {
    .advantages__icon {
      @apply bg-dark-600;
    }
    p {
      @apply text-opacity-80 text-light-100;
    }
  }
}

.download-button {
  @apply max-w-4xl mx-auto mb-12 p-8;
  .button {
    @apply w-full justify-center;
  }
}

.bgChange-enter-active,
.bgChange-leave-active {
  transition: opacity 0.5s;
}
.bgChange-enter,
.bgChange-leave-to {
  opacity: 0;
}
</style>
