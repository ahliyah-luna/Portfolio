const TODAY = "April 29, 2026";

const lorem =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const projects = [
	{
		slug: "barrio-gonzales",
		title: "Barrio Gonzales",
		category: "Manuscripts",
		date: TODAY,
		description: lorem,
		pdf: "./src/assets/Luna_BarrioGonzales.pdf",
	},
	{
		slug: "we-the-west-village-girls",
		title: "We, the West Village Girls",
		category: "Manuscripts",
		date: TODAY,
		description: lorem,
		pdf: "./src/assets/WeTheWestVillageGirls-FINAL_al.pdf",
	},
	{
		slug: "cafe-de-la-gare-paris",
		title: "Café De La Gare, Paris",
		category: "Fiction",
		date: TODAY,
		description: lorem,
	},
	{
		slug: "capture-the-moment",
		title: "Capture the Moment",
		category: "Fiction",
		date: TODAY,
		description: lorem,
	},
	{
		slug: "living-for-the-hope-of-it-all",
		title: "Living for the hope of it all!",
		category: "Fiction",
		date: TODAY,
		description: lorem,
	},
	{
		slug: "pride-from-the-virtues-of-values",
		title: "Pride, from the virtues of values",
		category: "Fiction",
		date: TODAY,
		description: lorem,
	},
	{
		slug: "spring-2026-fashion-trends",
		title: "Spring 2026 Fashion Trends – Why Maximalism Is Taking Over",
		category: "Articles",
		date: TODAY,
		description: lorem,
		externalUrl: "https://funktasy.com/fashion/spring-2026-fashion-trends/",
	},
	{
		slug: "satire-the-struggle-to-survive",
		title: "Satire – The Struggle to Survive",
		category: "Articles",
		date: TODAY,
		description: lorem,
		externalUrl: "https://funktasy.com/entertainment/satire/",
	},
	{
		slug: "olivia-dean-vs-addison-rae",
		title: "Olivia Dean vs Addison Rae – Minimal vs Maximal Aesthetic Divide",
		category: "Articles",
		date: TODAY,
		description: lorem,
		externalUrl: "https://funktasy.com/fashion/olivia-dean-vs-addison-rae/",
	},
	{
		slug: "oscars-best-picture-one-battle-after-another",
		title: "Oscar’s Best Picture – One Battle After Another",
		category: "Articles",
		date: TODAY,
		description: lorem,
		externalUrl: "https://funktasy.com/entertainment/oscars-best-picture/",
	},
	{
		slug: "new-look-activism",
		title: "New Look Activism – Activism or Performance?",
		category: "Articles",
		date: TODAY,
		description: lorem,
		externalUrl: "https://funktasy.com/fashion/new-look-activism/",
	},
	{
		slug: "method-marketing-and-detachment",
		title: "Method Marketing and Detachment – Everything Is Egotistical",
		category: "Articles",
		date: TODAY,
		description: lorem,
		externalUrl: "https://funktasy.com/entertainment/method-marketing-and-detachment/",
	},
	{
		slug: "sustainability-unpacked-part-2",
		title: "Sustainability Unpacked Part 2 – How The Secondhand Rush Rebuilt Fast Fashion",
		category: "Articles",
		date: TODAY,
		description: lorem,
		externalUrl: "https://funktasy.com/fashion/how-the-secondhand-rush-rebuilt-fast-fashion/",
	},
	{
		slug: "is-punk-dead-or-just-digital",
		title: "Is Punk Dead or Just Digital? The State of Modern Punk",
		category: "Articles",
		date: TODAY,
		description: lorem,
		externalUrl: "https://funktasy.com/entertainment/is-punk-dead-or-just-digital/",
	},
];

export function getProjectBySlug(slug) {
	return projects.find((project) => project.slug === slug) ?? null;
}

