// nuxt.config.js

import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  rootDir: path.join(__dirname, "app/"),
  nitro: {
    output: {
      publicDir: path.join(__dirname, "docs"),
    },
  },
  ssr: false, // spa
  build: {},
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/uipack" : "/",
  },
});
