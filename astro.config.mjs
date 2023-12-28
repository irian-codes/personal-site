import {defineConfig} from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://irian-codes.github.io',
  base: '/personal-site/', // Always end with trailing slash
});
