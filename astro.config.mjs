// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.meridianintegrations.com',
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
