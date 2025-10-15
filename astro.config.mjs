// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  site: 'https://toniramos.github.io/personal-curriculum/',
  base: '/personal-curriculum',
  output: 'static',
});
