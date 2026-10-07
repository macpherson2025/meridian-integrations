/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_FORM_ENDPOINT?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare module '*.woff2' {
	const src: string;
	export default src;
}
