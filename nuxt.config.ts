import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "nuxt-swiper",
  ],

  devServer: {
    port: 3002,
  },
  fonts: {
    families: [{ name: "Space Grotesk", provider: "google" }],
  },
  i18n: {
    defaultLocale: "en",
    locales: [{ code: "en", name: "English", file: "en.json" }],
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    server: {
      allowedHosts: ["1bc9addd6540.ngrok-free.app"],
    },
    plugins: [tailwindcss()],
  },
});