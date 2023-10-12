// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[
    '@nuxtjs/color-mode',
    '@unocss/nuxt'
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
})