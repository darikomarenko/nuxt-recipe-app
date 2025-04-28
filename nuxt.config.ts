// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    scanPageMeta: 'after-resolve',
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: 'within',
    parseErrorData: false,
    pendingWhenIdle: true,
    defaults: {
      useAsyncData: {
        deep: true
      }
    },
  },
  image: {
    provider: 'static',
    domains: ['cdn.dummyjson.com'],
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon'
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  ssr: false,
  nitro: {
    preset: 'static',
  },
})