import { defineConfig, envField } from 'astro/config';

import vercelAdapter from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';

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

  adapter: vercelAdapter(),

  integrations: [expressiveCode({ themes: ['tokyo-night'] })],
});