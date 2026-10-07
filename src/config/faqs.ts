export interface FaqItem {
	question: string;
	answer: string;
}

export const faqs = {
	home: [
		{
			question: 'Do I own the website you build?',
			answer:
				'Yes. Qualifying sites are delivered as source code in a repository you can access, with version history included. You are not left inside a proprietary page builder. Domain names, email, and optional third-party services are separate from that ownership.',
		},
		{
			question: 'Do UniFi cameras require a monthly video subscription?',
			answer:
				'UniFi Protect is built around local recording on equipment at the property. A cloud video subscription is not required to record and review footage. Remote access still depends on the network and the hardware you choose. Advanced detections vary by camera and recorder.',
		},
		{
			question: 'Can you connect a detached garage or workshop?',
			answer:
				'Often, yes. When trenching a cable is costly or disruptive, a point-to-point wireless bridge can extend the main network to another building, if the path between them is suitable. The far building can then support WiFi, cameras, computers, and other networked devices.',
		},
		{
			question: 'Will an EV charger require a panel upgrade?',
			answer:
				'Not always. Charging is a large continuous load, so the service, the panel, and the rest of the house have to be evaluated together. Some properties already have capacity. Others need load management, a different circuit plan, or an electrical upgrade. That is decided by looking at the panel, not by a rule of thumb.',
		},
		{
			question: 'Can lighting and shades work as one system?',
			answer:
				'Yes, when they are specified together. A morning scene can open selected shades and shift the lighting. A movie scene can lower shades and dim the room. Not every combination of products does this on its own. Integration depends on the equipment and the design.',
		},
		{
			question: 'Where do you work?',
			answer:
				'Meridian Integrations primarily serves the Denver Metro and surrounding Colorado communities, including homes, small businesses, and properties with outbuildings. Work farther out is considered when the project is a fit.',
		},
	],
	website: [
		{
			question: 'Do I own my website?',
			answer:
				'Yes. The site is a portable codebase. You can have access to the GitHub repository, including the source files and the history of changes. You are not renting a project that only exists inside someone else’s platform.',
		},
		{
			question: 'Are there really no monthly hosting fees?',
			answer:
				'A qualifying static site on this architecture does not need a traditional monthly web-hosting package. Cloudflare Pages serves the finished site. A domain name, email, analytics, and other third-party services can still have their own costs. Those are not bundled into a claim that everything on the internet is free.',
		},
		{
			question: 'What does GitHub do?',
			answer:
				'GitHub stores the website’s source code and its history. Each change is recorded, so the work can be reviewed, updated, or returned to an earlier version. It is the workshop. Visitors still reach the site at your domain.',
		},
		{
			question: 'What does Cloudflare do?',
			answer:
				'Cloudflare Pages publishes the built site and delivers it from locations closer to your visitors. HTTPS certificates for the site are issued automatically. That is the delivery network, not a traditional hosting account with a database to maintain.',
		},
		{
			question: 'Can the website be moved later?',
			answer:
				'Yes. Because you hold the source code and the site is built as static files, it is not locked to one vendor’s page builder. It can be hosted on another static platform if you ever choose to leave.',
		},
		{
			question: 'Can you help with SEO?',
			answer:
				'Sites are structured for search from the start: clear pages, sensible headings, metadata, fast delivery, and room for local relevance. Ongoing writing and search work can be part of a project when it is useful. No one can honestly guarantee a specific ranking.',
		},
	],
	unifi: [
		{
			question: 'Is this only for large commercial buildings?',
			answer:
				'No. The same design habits help a house with thick walls, a restaurant with a crowded dining room, a home office, and a property with a barn or workshop. The equipment changes. The idea does not: place the network for the way the building is used.',
		},
		{
			question: 'Do you only install a single WiFi access point?',
			answer:
				'Sometimes one well-placed access point is enough. Often it is not. Homes and businesses with multiple rooms, clients, cameras, or a second building need a plan for switching, power, Ethernet, and where the signal actually has to land.',
		},
		{
			question: 'Can UniFi cover a large property?',
			answer:
				'It can, when the design accounts for distance and construction. That may mean wired access points, a wireless bridge to an outbuilding, and cameras on their own part of the network. Coverage is planned. It is not assumed.',
		},
		{
			question: 'Will I be locked into a monitoring subscription?',
			answer:
				'The network itself is equipment you own and a configuration that can be documented. UniFi Protect recording does not require a mandatory cloud video subscription. Some optional remote or account features depend on the hardware and Ubiquiti’s current services, and those should be confirmed for the system you select.',
		},
	],
	cameras: [
		{
			question: 'Do UniFi cameras require a monthly subscription?',
			answer:
				'No mandatory cloud video subscription is required to record with UniFi Protect. Footage is stored on a recorder or console at the property. Optional account features for remote access should be confirmed for the specific equipment. This is different from consumer cameras that stop recording useful history when a subscription lapses.',
		},
		{
			question: 'Is footage stored locally?',
			answer:
				'Yes, when the system includes UniFi Protect storage. Video stays on equipment you control rather than only in a consumer cloud account. Retention depends on the recorder’s capacity, the number of cameras, and the recording settings.',
		},
		{
			question: 'Can I view cameras remotely?',
			answer:
				'Secure remote viewing can be set up for the people who should have it. How that access works depends on the gateway, the recorder, and the network. Remote viewing is a design choice, not an afterthought and not an open door.',
		},
		{
			question: 'Does every camera include facial recognition or license plate detection?',
			answer:
				'No. Advanced detection capabilities depend on the selected UniFi camera and Protect hardware. Person and vehicle detection, smart search, and license plate recognition are available on supported equipment, not on every model.',
		},
	],
	wifi: [
		{
			question: 'Will more access points fix weak WiFi?',
			answer:
				'Sometimes they are part of the answer. Extra access points in the wrong places, or without a proper Ethernet connection back to the network, can add interference instead of coverage. Placement, construction, and channel use matter as much as the hardware.',
		},
		{
			question: 'What is involved in a WiFi site survey?',
			answer:
				'A survey looks at the signal clients actually receive, how crowded the air is, and what the building is made of. The goal is to put access points where they help, and to see whether a room needs cable rather than another radio.',
		},
		{
			question: 'Do access points need Ethernet?',
			answer:
				'A wired connection back to the switch is the reliable design. Wireless uplinks have a place in difficult spots, but they share airtime and are easier to get wrong. Cameras and busy rooms are better on cable.',
		},
		{
			question: 'Can guests use WiFi without reaching our computers?',
			answer:
				'Yes. A guest network can offer internet access while firewall rules keep guests off computers, cameras, and other private devices. That separation is part of the design, not a password written on a whiteboard.',
		},
	],
	bridges: [
		{
			question: 'Do I need to trench a cable?',
			answer:
				'Not always. A wireless bridge is an alternative when the path and the distance are workable. Some sites are still better with fiber or Ethernet in conduit, especially if the view between buildings is poor. The consultation is where that choice is made.',
		},
		{
			question: 'How far can a wireless bridge work?',
			answer:
				'Distance depends on the radios, the antennas, line of sight, weather, and how much performance the far building needs. A clear path matters more than a single number on a spec sheet. 60 GHz systems favor shorter, very clean paths and high throughput. Other frequencies are considered when the span is longer or partly obstructed.',
		},
		{
			question: 'Does a 60 GHz bridge require line of sight?',
			answer:
				'A clear line of sight is the reliable case, and it matters even more at 60 GHz. Trees, roofs, and seasonal foliage can weaken or block the link. If the path is marginal, that should be said before any equipment is ordered.',
		},
		{
			question: 'What can the other building run once it is connected?',
			answer:
				'A solid link can support WiFi, computers, security cameras, voice, smart-home devices, a local switch, and ordinary internet use. The right expectation depends on the capacity of the bridge and what is actually installed at the far end.',
		},
	],
	security: [
		{
			question: 'Why not put everything on one WiFi network?',
			answer:
				'A guest, a thermostat, a camera, and a work laptop do not need to see each other. One flat network is simpler to set up and easier for a problem to cross. Segmentation keeps each group on the part of the network it actually needs.',
		},
		{
			question: 'What is a VLAN, in plain language?',
			answer:
				'A VLAN is a way of dividing one physical network into separate logical networks. Devices can share switches and cabling while staying in different groups. Firewall rules then decide which groups may talk, and which may only reach the internet.',
		},
		{
			question: 'Should cameras be on the same network as our computers?',
			answer:
				'Usually they should not. Cameras and the recorder belong on their own segment, with only the access required for viewing and management. That limits how far a compromised device can reach.',
		},
		{
			question: 'Will segmentation make the network harder to use?',
			answer:
				'Day to day, it should not. Phones still join the right WiFi, guests still get internet, and cameras still record. The complexity sits in the design, not in a new chore for the people who live or work there.',
		},
	],
	ev: [
		{
			question: 'Do I need a panel upgrade?',
			answer:
				'Not every property does. EV charging is a significant, continuous load, so service capacity, the main panel, existing loads, and the charger’s amperage all have to be evaluated. Some homes have room. Others need load management, a different charging configuration, or an electrical upgrade.',
		},
		{
			question: 'How fast will my EV charge?',
			answer:
				'Level 2 charging is substantially faster than a standard 120-volt outlet. An exact rate depends on the vehicle, the charger, the circuit, and the electrical system. A specific speed is not quoted until those are known.',
		},
		{
			question: 'Can the charger be installed outside?',
			answer:
				'Often, yes, with equipment rated for the location and a circuit installed to code. Distance from the panel, how the conductors are run, mounting, and weather exposure are part of the plan.',
		},
		{
			question: 'Can I charge two EVs?',
			answer:
				'Many households can, with two circuits, a charger meant for more than one vehicle, or a schedule that shares capacity. Whether the panel can support it is a load question. Future vehicles are worth discussing before the first circuit is installed.',
		},
	],
	smartHome: [
		{
			question: 'What is Lutron?',
			answer:
				'Lutron builds lighting and shade systems used in professionally installed homes. In this work it means keypads, dimmers, and scenes designed with the house, rather than a collection of unrelated smart bulbs.',
		},
		{
			question: 'Can lighting and shades work together?',
			answer:
				'Yes, when they are designed as one system. Morning can raise selected shades and ease the lighting into daytime levels. Evening and movie scenes can do the reverse. The result depends on the equipment specified for the project.',
		},
		{
			question: 'What is Josh.ai?',
			answer:
				'Josh.ai is an optional control layer for professionally integrated homes. It provides natural voice and app control across compatible systems such as lighting, shades, climate, and entertainment. It is not required for a Lutron system to be useful on its own.',
		},
		{
			question: 'Do smart-home systems require internet?',
			answer:
				'Many in-home lighting and shade scenes continue to run without an internet connection. Remote access, voice services, and some integrations do need a working connection. A reliable network is what makes that distinction boring, in the best way.',
		},
		{
			question: 'Can everything be controlled from one interface?',
			answer:
				'That is the aim of an integrated plan, and it is realistic for systems chosen to work together. Universal control of every brand and every device is not a promise. Integration capabilities depend on the selected equipment and system design.',
		},
	],
	lutron: [
		{
			question: 'Is this different from smart bulbs?',
			answer:
				'Yes. The dimmers, keypads, and scenes are part of the house. A guest can use a keypad without an app. Scenes recall a room, not a single lamp. The lighting is designed, then it stays out of the way.',
		},
		{
			question: 'Can we still use switches if the network is down?',
			answer:
				'Local control is a reason to use a professional lighting system. Keypads and dimmers in the rooms are there so daily life does not depend on a phone. Remote features are separate from walking into a room and setting the light.',
		},
		{
			question: 'Do you integrate shades with the lighting?',
			answer:
				'When shades are part of the project, scenes can coordinate both. Lighting-only projects do not imply shade control. If shades matter, they should be in the design from the start.',
		},
		{
			question: 'Does Lutron require a particular voice assistant?',
			answer:
				'No. A Lutron system is useful from its own keypads and app. Josh.ai or another control system can sit on top when the home should respond to natural voice across more than lighting. Compatibility depends on the equipment selected.',
		},
	],
	shades: [
		{
			question: 'Are motorized shades only for home theaters?',
			answer:
				'Theaters are one use. The more common reasons are privacy, glare on a screen or a table, hard-to-reach windows, and large glass that is tiresome to operate by hand. Schedules can handle the windows you would otherwise forget.',
		},
		{
			question: 'Can shades move with the lighting?',
			answer:
				'Yes, in a coordinated design. Shades can rise as morning lighting eases off, lower as interior lights come up, and close when a room is set for a film. That coordination is specified. It is not assumed of every product pairing.',
		},
		{
			question: 'Will this cut my energy bills?',
			answer:
				'Shades can manage daylight and glare, and that changes how a room feels. This site does not promise a specific energy saving. Comfort, privacy, and convenience are the reasons to do the work.',
		},
		{
			question: 'What happens if the network is unavailable?',
			answer:
				'Shades in a professional system are meant to remain operable from their controls in the house. Remote and scheduled features depend on the processors and the network being available. The design should make the everyday controls obvious.',
		},
	],
	serviceArea: [
		{
			question: 'Do you work only in Denver?',
			answer:
				'Denver is part of the service area, not the boundary of it. The practice focuses on the Denver Metro and surrounding Colorado communities. Projects outside that area are considered when the scope and the travel make sense.',
		},
		{
			question: 'Do you take on properties with outbuildings?',
			answer:
				'Yes. Detached garages, workshops, guest houses, barns, and small remote offices are a normal part of the work, especially when the network or cameras need to reach them without an unnecessary trench.',
		},
	],
} as const satisfies Record<string, readonly FaqItem[]>;
