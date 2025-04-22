// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/eslint'],
  components: true, devtools: { enabled: true },
  app: {
    baseURL: '/nuxt-converter/',
    head: {
      title: 'Конвертер валют',
      meta: [{ name: 'description', content: 'Простой конвертер валют' }],
      htmlAttrs: {
        lang: 'ru',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  css: ['~/assets/style/main.css'],
})
