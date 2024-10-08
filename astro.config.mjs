import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'RPG Docs',
      tableOfContents: false,
      pagination: false,
      logo: {
        src: './src/assets/skull-logo.png',
        replacesTitle: true
      }
    })
  ]
});
