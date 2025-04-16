// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  css: ['~/assets/style/main.css']
})