<template>
  <div>
    <div class="downloads">
      <div class="downloads__header">
        <div class="downloads__info">
          <h1>{{ $t('pages.downloads.title') }}</h1>
          <p>
            {{ $t('pages.downloads.description') }}
          </p>
          <UIButton
            :href="latestInstallerRelease.assets.browser_download_url"
            theme="primary"
            size="large"
            >{{ $t('pages.downloads.buttonInstaller') }}</UIButton
          >
          <p
            class="downloads__subinfo"
            v-html="
              $t('pages.downloads.subinfo', [
                latestIrisRelease.tag_name,
                latestInstallerRelease.tag_name,
              ])
            "
          />
        </div>
        <div class="downloads__image">
          <img src="/img/installer.png" />
        </div>
      </div>
    </div>
    <div class="alt-downloads">
      <div class="alt-downloads__header">
        <h1>{{ $t('pages.downloads.manualTitle') }}</h1>
        <div class="alt-downloads__buttons">
          <UIButton href="https://modrinth.com/mod/iris" size="large"
            >Modrinth</UIButton
          >
          <UIButton
            href="https://www.curseforge.com/minecraft/mc-mods/irisshaders"
            size="large"
            >CurseForge</UIButton
          >
          <UIButton
            href="https://github.com/IrisShaders/Iris/releases"
            size="large"
            >GitHub</UIButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Downloads',
  data() {
    return {
      latestIrisRelease: {},
      latestInstallerRelease: {
        assets: {},
      },
    }
  },
  async fetch() {
    this.latestIrisRelease = (
      await this.$axios.get(
        'https://api.github.com/repos/IrisShaders/Iris/releases/latest'
      )
    ).data
    this.latestInstallerRelease = (
      await this.$axios.get(
        'https://api.github.com/repos/IrisShaders/Iris-Installer/releases/latest'
      )
    ).data
    this.latestInstallerRelease.assets = (
      await this.$axios.get(
        'https://api.github.com/repos/IrisShaders/Iris-Installer/releases/44833739/assets'
      )
    ).data[0]
  },
  head() {
    return {
      title: this.$t('pages.downloads.metaTitle').toString(),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('pages.downloads.title').toString(),
        },
        {
          hid: 'og_description',
          name: 'og_description',
          content: this.$t('pages.downloads.title').toString(),
          property: 'og:description',
        },
      ],
    }
  },
})
</script>

<style lang="scss">
.downloads {
  min-height: 60vh;
  @apply m-auto max-w-screen-2xl p-16;
  .downloads__header {
    @apply flex xl:flex-row flex-col-reverse text-center xl:text-justify items-center h-full;
    .downloads__info {
      @apply max-w-xl;
      h1 {
        @apply text-primary-500 mb-4 text-5xl font-semibold;
      }
      p {
        @apply text-2xl font-medium text-opacity-60 text-primary-800;
      }
      .button {
        @apply mt-8 w-full justify-center;
      }
      .downloads__subinfo {
        @apply mt-2 text-center text-base text-opacity-40;
        a {
          @apply text-primary-500;
        }
      }
    }
    .downloads__image {
      @apply xl:ml-auto xl:pl-12 pb-16 xl:pb-0;
      img {
        @apply rounded-2xl shadow-2xl;
      }
    }
  }
}

.alt-downloads {
  min-height: 30vh;
  @apply m-auto max-w-screen-2xl p-6;
  .alt-downloads__header {
    @apply flex flex-col;
    h1 {
      @apply text-primary-500 text-5xl font-semibold text-center;
    }
    .alt-downloads__buttons {
      @apply flex flex-col sm:flex-row mt-16 w-full gap-6;
      .button {
        @apply w-full justify-center;
      }
    }
  }
}

.dark .downloads {
  .downloads__header {
    .downloads__info {
      p {
        @apply text-opacity-90 text-light-100;
      }
    }
  }
}
</style>
