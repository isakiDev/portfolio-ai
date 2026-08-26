import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },

  env: {
    schema: {
      GITHUB_TOKEN: envField.string({ context: 'server', access: 'secret'}),
      SPOTIFY_CLIENT_ID: envField.string({ context: 'server', access: 'secret' }),
      SPOTIFY_CLIENT_SECRET: envField.string({ context: 'server', access: 'secret' }),
      SPOTIFY_REFRESH_TOKEN: envField.string({ context: 'server', access: 'secret' }),
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: node({
    mode: 'standalone'
  })
});