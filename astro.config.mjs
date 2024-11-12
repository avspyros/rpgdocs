import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import netlify from '@astrojs/netlify';

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
      favicon: '/favicon.png',
      customCss: ['./src/styles/custom.css']
    })
  ],
  output: 'server',
  adapter: netlify(),
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '~': '/src'
      }
    }
  }
});
