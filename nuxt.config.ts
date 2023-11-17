// nuxt.config.js
//x
import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  rootDir: path.join(__dirname, "app/"),
  /*  nitro: {
    output: {
      publicDir: path.join(__dirname, "docs"),
    },
  }, */
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/uipack/" : "/",
  },
  ssr: false,
});
