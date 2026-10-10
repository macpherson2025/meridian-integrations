/**
 * Meridian Integrations — central site configuration.
 *
 * Update every value marked UPDATE before launch. Do not invent phone
 * numbers, email addresses, street addresses, license numbers, or
 * certifications. Leave a field blank until the real value exists.
 *
 * Form delivery is configured with the PUBLIC_FORM_ENDPOINT environment
 * variable (see .env.example), not in this file. Never put API keys,
 * tokens, or mailbox passwords anywhere in the repository.
 */

/** UPDATE: production origin, no trailing slash. Used for canonical URLs, Open Graph, sitemap, and robots.txt. */
export const SITE_URL = 'https://www.meridianintegrations.com';

export const site = {
	name: 'Meridian Integrations',
	tagline: 'Technology, Integrated.',
	disciplines: 'Website · Network · Security · Energy · Automation',
	description:
		'Meridian Integrations designs websites, UniFi networks, security cameras, EV charging, and smart-home systems for Colorado homes and businesses.',
	url: SITE_URL,
	locale: 'en_US',
	/** UPDATE: public phone, formatted for display. Example shape: (303) 555-0100 — use the real number. */
	phoneDisplay: '',
	/** UPDATE: tel link, digits and leading plus only. Example shape: +13035550100 */
	phoneTel: '',
	/** UPDATE: public email address. */
	email: '',
	/**
	 * UPDATE: publish a street address only when the business wants it public.
	 * City and region can stay blank until then. Do not use a fake address.
	 */
	address: {
		street: '',
		city: '',
		region: 'CO',
		postalCode: '',
		country: 'US',
	},
	serviceArea:
		'Denver Metro and surrounding Colorado communities',
	/**
	 * UPDATE: add license labels only when they should be published.
	 * Example: { label: 'Electrical contractor', value: 'EC.0000000' }
	 */
	licenses: [] as { label: string; value: string }[],
	/** UPDATE: { label: 'LinkedIn', href: 'https://...' } */
	social: [] as { label: string; href: string }[],
	/**
	 * Set to true only after qualified counsel has reviewed privacy and terms.
	 * Until then, those pages show a draft notice.
	 */
	legalReviewed: false,
	legalDraftDate: 'October 6, 2026',
} as const;

export function absoluteUrl(path: string): string {
	const base = site.url.replace(/\/$/, '');
	if (!path || path === '/') return `${base}/`;
	const withSlash = path.startsWith('/') ? path : `/${path}`;
	return `${base}${withSlash.endsWith('/') ? withSlash : `${withSlash}/`}`;
}
