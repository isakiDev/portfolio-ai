import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  server: {
    host: true
  },
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@data": "/src/data",
        "@utils": "/src/utils",
        "@assets": "/src/assets",
      },
    },
  },
});
