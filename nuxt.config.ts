// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  css: ["~/assets/style/main.css"],
  app: {
    head: {
      title: "Конвертер валют",
      meta: [{ name: "description", content: "Простой конвертер валют" }],
      htmlAttrs: {
        lang: "ru",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
});
