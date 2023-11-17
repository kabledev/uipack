// nuxt.config.js
//x
import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  rootDir: path.join(__dirname, "app/"),
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/uipack/" : "/",
  },
});
