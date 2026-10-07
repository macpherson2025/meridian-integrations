import type { FaqItem } from './faqs';

/**
 * Future city pages live at /{slug}/ — for example /boulder-co/.
 *
 * Leave `published` false, and leave this array empty, until a page has
 * real local content: how properties in that place tend to be built, the
 * project types that matter there, useful questions, and internal links.
 * Do not generate a page that only swaps the city name.
 */
export interface LocationContent {
	/** URL slug without slashes, e.g. "boulder-co". Must not match an existing page. */
	slug: string;
	name: string;
	published: boolean;
	title: string;
	description: string;
	/** Opening argument: why this place is a distinct context, not a keyword variant. */
	intro: string;
	/** Construction, lots, outbuildings, business streets, elevation, or other local conditions. */
	propertyCharacter: string;
	projectTypes: { title: string; text: string }[];
	faqs: FaqItem[];
	/** Links to nearby published location pages or core service pages. */
	nearby: { href: string; label: string }[];
}

export const locations: LocationContent[] = [];

/**
 * Example shape for a future page. Do not set published: true on a sketch.
 *
 * {
 *   slug: 'boulder-co',
 *   name: 'Boulder',
 *   published: false,
 *   title: 'Technology integration in Boulder',
 *   description: '...unique description...',
 *   intro: '...',
 *   propertyCharacter: '...',
 *   projectTypes: [{ title: 'Foothill homes', text: '...' }],
 *   faqs: [{ question: '...', answer: '...' }],
 *   nearby: [{ href: '/louisville-co/', label: 'Louisville' }],
 * }
 */
