import {
	mobile,
	backend,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	docker,
	threejs,
	wordpress,
	octoville,
	pharmanews,
	folobuy,
	eurovision,
	foodhunters,
	laundryexpress,
	chapelofpeace,
	fixyourgadget,
	emergingmanagers,
	teaspoon,
} from "../assets";

export const navLinks = [
	{
		id: "about-me",
		title: "About",
	},
	{
		id: "experience",
		title: "Experience",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "testimonials",
		title: "Testimonials",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Mobile App Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Wordpress Developer",
		icon: wordpress,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "React Native",
		icon: reactjs,
	},
	{
		name: "docker",
		icon: docker,
	},
	{
		name: "Wordpress",
		icon: wordpress,
	},
];

const experiences = [
	{
		title: "Fullstack Developer",
		company_name: "Octoville Development Company",
		icon: octoville,
		iconBg: "#E6DEDD",
		date: "August 2021 - March 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Mobile Applications Developer",
		company_name: "Euro-Vision Ventures",
		icon: eurovision,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Collaborated with 2 engineering and design teams to integrate external APIs into web pages and mobile applications.",
			"Integrated new components and features, into existing applications for higher performance.",
			"Worked with 10 key stakeholders to design software solutions, and managed key projects from development to production.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Web Developer/IT Mangager",
		company_name: "Pharmanews Limited",
		icon: pharmanews,
		iconBg: "#383E56",
		date: "August 2016 - May 2021",
		points: [
			"Maintained 5 systems and applications as Tier 2 support break-fix and data changes",
			"Documented 100% of technical specifications and dependencies of applications",
			"Performs unit tests to verify the functionality of user interfaces, API endpoints and backend connectivity",
			"Developed and maintained eCommerce stores using content management systems (Woocomerce, Shopify, Opencart, Magento), including installation, configuration, troubleshooting, and creation of custom plugins and content types.",
		],
	},
	{
		title: "Part-Time Web Developer",
		company_name: "Folobuy Ecommerce",
		icon: folobuy,
		iconBg: "#E6DEDD",
		date: "August 2019 - May 2021",
		points: [
			"Management of AWS Linux server infrastructure Linux, ensuring optimal resource utilization and 99% uptime.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Worked closely with the marketing team of ecommerce sites to identify fast moving categories and products, and analysing sales trends for future marketing strategies.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Solomon proved me wrong.",
		name: "Dozie David",
		designation: "CEO",
		company: "Euro Vision/ EV Credit",
		image:
			"https://media.licdn.com/dms/image/C5603AQGhf_mQLHvS0Q/profile-displayphoto-shrink_800_800/0/1517055470736?e=1687996800&v=beta&t=EjiJUyoW4C49lEA3yP5dv0TItROp5XhX10xMioG6caU",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Solomon does.",
		name: "Yaknan Gambo",
		designation: "COO",
		company: "Chapel of Peace Church International",
		image:
			"https://res.cloudinary.com/ddsaeli9q/image/upload/v1681653294/chapelofpeacce/xmwggqt5nkrhwxv5a5y1.jpg",
	},
	{
		testimonial:
			"After Solomon optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Godwin Alofoje",
		designation: "CEO",
		company: "Starks & Lanisters Inc.",
		image:
			"https://media.licdn.com/dms/image/C4E03AQExHVJPCB-gww/profile-displayphoto-shrink_200_200/0/1530806419421?e=1687996800&v=beta&t=_at0KAGSzBFwU4qsG1aKwD4DFK5n-2yLDZYFJyjkvJU",
	},
];

const projects = [
	{
		name: "Laundry Express App",
		description:
			"React Native Mobile Application that allows users to book for laundry services. Users can schedule, pickup and delivery of their laundry from any location within Lagos, Nigeria.",
		tags: [
			{
				name: "react-native",
				color: "blue-text-gradient",
			},
			{
				name: "firebase",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: laundryexpress,
		source_code_link: "https://github.com/SolomonOjigbo/laundry-express",
	},
	{
		name: "Food Hunters App",
		description:
			"React Native mobile application for Food Hunters Kitchen which enable users to conveniently order for food online from any location within lagos.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "redux",
				color: "pink-text-gradient",
			},
		],
		image: foodhunters,
		source_code_link:
			"https://github.com/SolomonOjigbo/food-hunters-mobile-app",
	},
	{
		name: "Chapel of Peace Website",
		description:
			"Chapel of Peace Church is a Christian religious organisation based in Federal University Wukuri, in northern Nigeria. This is a website I built for the church.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "green-text-gradient",
			},
			{
				name: "expressjs",
				color: "blue-text-gradient",
			},
			{
				name: "SQL",
				color: "pink-text-gradient",
			},
		],
		image: chapelofpeace,
		source_code_link: "https://chapelofpeacefuw.org/",
	},
	{
		name: "Fix Your Gadgets App",
		description:
			"React Native expo application that allows users to request, and schedule phone and computer repair services from within Lagos, Nigeria.",
		tags: [
			{
				name: "react-native",
				color: "blue-text-gradient",
			},
			{
				name: "firebase",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "redux",
				color: "blue-text-gradient",
			},
		],
		image: fixyourgadget,
		source_code_link: "https://github.com/SolomonOjigbo/fixyourgadgets",
	},
	{
		name: "Emmerging Managers App",
		description:
			"An e-learning React Native App that provides an online platform for instructors to train a Octoville Development Company's workforce.",
		tags: [
			{
				name: "react-native",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "redux",
				color: "pink-text-gradient",
			},
		],
		image: emergingmanagers,
		source_code_link:
			"https://drive.google.com/file/d/1XVjNzTbICWtGih4KVfEmb87YtasPfML4/view?usp=share_link",
	},
	{
		name: "Teaspoon Inventory App",
		description:
			"An Inventory Management and Point of Sale Web Application for small and medium scale businesses. Built with ReactJS.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
			{
				name: "redux",
				color: "blue-text-gradient",
			},
			{
				name: "expressjs",
				color: "green-text-gradient",
			},
		],
		image: teaspoon,
		source_code_link: "https://github.com/SolomonOjigbo/teaspoon-inventory",
	},
];

export { services, technologies, experiences, testimonials, projects };
