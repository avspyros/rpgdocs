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
        src: './src/assets/book-logo.png',
        replacesTitle: true
      },
      customCss: ['./src/styles/custom.css']
    })
  ],
  output: 'server'
});
