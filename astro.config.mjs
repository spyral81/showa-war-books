import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://senso-wo-yomu.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
