import { site, absoluteUrl, SITE_URL } from './site';
import type { FaqItem } from './faqs';

export interface Crumb {
	name: string;
	path: string;
}

export function businessNode(): Record<string, unknown> {
	const node: Record<string, unknown> = {
		'@type': 'ProfessionalService',
		'@id': `${SITE_URL}/#business`,
		name: site.name,
		description: site.description,
		url: `${SITE_URL}/`,
		image: `${SITE_URL}/og.png`,
		slogan: site.tagline,
		areaServed: [
			{ '@type': 'City', name: 'Denver' },
			{ '@type': 'AdministrativeArea', name: 'Denver Metropolitan Area' },
			{ '@type': 'State', name: 'Colorado' },
		],
		knowsAbout: [
			'Business website design',
			'UniFi network installation',
			'UniFi Protect cameras',
			'Professional WiFi design',
			'Point-to-point wireless bridges',
			'Level 2 EV charger installation',
			'Lutron lighting control',
			'Motorized shades',
			'Josh.ai integration',
		],
	};

	if (site.email) node.email = site.email;
	if (site.phoneTel) node.telephone = site.phoneTel;

	if (site.address.street && site.address.city) {
		node.address = {
			'@type': 'PostalAddress',
			streetAddress: site.address.street,
			addressLocality: site.address.city,
			addressRegion: site.address.region,
			postalCode: site.address.postalCode,
			addressCountry: site.address.country,
		};
	}

	if (site.social.length > 0) {
		node.sameAs = site.social.map((item) => item.href);
	}

	return node;
}

export function websiteNode(): Record<string, unknown> {
	return {
		'@type': 'WebSite',
		'@id': `${SITE_URL}/#website`,
		url: `${SITE_URL}/`,
		name: site.name,
		description: site.description,
		publisher: { '@id': `${SITE_URL}/#business` },
		inLanguage: 'en-US',
	};
}

export function webPageNode(opts: {
	title: string;
	description: string;
	path: string;
}): Record<string, unknown> {
	const url = absoluteUrl(opts.path);
	return {
		'@type': 'WebPage',
		'@id': `${url}#webpage`,
		url,
		name: opts.title,
		description: opts.description,
		isPartOf: { '@id': `${SITE_URL}/#website` },
		about: { '@id': `${SITE_URL}/#business` },
		inLanguage: 'en-US',
	};
}

export function serviceNode(opts: {
	name: string;
	serviceType: string;
	description: string;
	path: string;
}): Record<string, unknown> {
	const url = absoluteUrl(opts.path);
	return {
		'@type': 'Service',
		'@id': `${url}#service`,
		name: opts.name,
		serviceType: opts.serviceType,
		description: opts.description,
		url,
		provider: { '@id': `${SITE_URL}/#business` },
		areaServed: {
			'@type': 'AdministrativeArea',
			name: 'Denver Metropolitan Area, Colorado',
		},
	};
}

export function breadcrumbNode(items: Crumb[]): Record<string, unknown> {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: absoluteUrl(item.path),
		})),
	};
}

export function faqNode(items: readonly FaqItem[]): Record<string, unknown> {
	return {
		'@type': 'FAQPage',
		mainEntity: items.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	};
}
