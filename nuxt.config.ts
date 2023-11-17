// nuxt.config.js

import path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  rootDir: path.join(__dirname, "guide/"),
  ssr: false, // spa
});
