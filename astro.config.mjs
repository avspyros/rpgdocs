import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import netlify from '@astrojs/netlify';

const localStatic = process.env.LOCAL_STATIC === 'true';

export default defineConfig({
  output: localStatic ? 'static' : 'server',

  integrations: [
    starlight({
      title: 'RPG Docs',
      tableOfContents: false,
      pagination: false,
      logo: {
        src: './src/assets/book-logo.png',
        replacesTitle: true
      },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css']
    })
  ],
  ...(localStatic ? {} : { adapter: netlify() })
});
