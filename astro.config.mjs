// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/config/site.ts';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	trailingSlash: 'always',
	integrations: [
		sitemap({
			filter: (page) => !page.includes('/robots.txt'),
		}),
	],
	prefetch: {
		prefetchAll: false,
		defaultStrategy: 'hover',
	},
	build: {
		inlineStylesheets: 'never',
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
