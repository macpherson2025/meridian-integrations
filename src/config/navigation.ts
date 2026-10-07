export interface NavLink {
	href: string;
	label: string;
	description?: string;
}

export interface NavGroup {
	label: string;
	links: NavLink[];
}

/** Primary service menu. Network Security is included so that page is reachable with the rest of the network work. */
export const serviceGroups: NavGroup[] = [
	{
		label: 'Digital',
		links: [
			{
				href: '/website-solutions/',
				label: 'Website Solutions',
				description: 'Source-code ownership, speed, and local search',
			},
		],
	},
	{
		label: 'Network & Security',
		links: [
			{
				href: '/unifi-networking/',
				label: 'UniFi Networking',
				description: 'Gateways, switching, and property-wide WiFi',
			},
			{
				href: '/security-cameras/',
				label: 'Security Cameras',
				description: 'Local recording with UniFi Protect',
			},
			{
				href: '/wifi-design/',
				label: 'Professional WiFi',
				description: 'Placement, backhaul, and tuning',
			},
			{
				href: '/wireless-bridges/',
				label: 'Wireless Bridges',
				description: 'Outbuildings without a trench',
			},
			{
				href: '/network-security/',
				label: 'Network Security',
				description: 'Guests, cameras, and devices kept apart',
			},
		],
	},
	{
		label: 'Energy',
		links: [
			{
				href: '/ev-charger-installation/',
				label: 'EV Charger Installation',
				description: 'Level 2 charging planned around the panel',
			},
		],
	},
	{
		label: 'Automation',
		links: [
			{
				href: '/smart-home-automation/',
				label: 'Smart Home Automation',
				description: 'Lighting, shades, and whole-home control',
			},
			{
				href: '/lutron-lighting/',
				label: 'Lutron Lighting',
				description: 'Scenes, keypads, and dimming',
			},
			{
				href: '/motorized-shades/',
				label: 'Motorized Shades',
				description: 'Privacy, daylight, and glare',
			},
		],
	},
];

export const companyNav: NavLink[] = [
	{ href: '/about/', label: 'About' },
	{ href: '/service-area/', label: 'Service Area' },
	{ href: '/contact/', label: 'Contact' },
];

export function flattenServices(): NavLink[] {
	return serviceGroups.flatMap((group) => group.links);
}
