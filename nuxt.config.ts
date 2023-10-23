// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/_main.scss'],
   vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_color.scss" as *;'
        }
      }
    }
  },
    modules: ['@pinia/nuxt'],
})
