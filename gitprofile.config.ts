// gitprofile.config.ts

const CONFIG = {
	github: {
		username: 'L00P3R93', // Your GitHub org/user name. (This is the only required config)
	},
	/**
	 * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
	 * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
	 * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
	 */
	base: '/',
	projects: {
		github: {
			display: true, // Display GitHub projects?
			header: 'Featured Projects',
			mode: 'manual', // Mode can be: 'automatic' or 'manual'
			automatic: {
				sortBy: 'updated', // Sort projects by 'stars' or 'updated'
				limit: 8, // How many projects to display.
				exclude: {
					forks: false, // Forked projects will not be displayed if set to true.
					projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
				},
			},
			manual: {
				// Properties for manually specifying projects
				projects: [
					'L00P3R93/v2.lend.nexus',
					'L00P3R93/daraja-mpesa',
					'L00P3R93/rick-n-morty-api',
					'L00P3R93/wallet.nexus',
					'L00P3R93/pos.nexus',
					'L00P3R93/madam.portal',
					'L00P3R93/sterling.main',
					'L00P3R93/inv.nexus',
				], // List of repository names to display.
			},
		},
		external: {
			header: 'Private Projects',
		  	projects: [
				{
					title: 'Credit Lending & CRM System',
			      		description: 'Lending solution with CRM features, loan tracking, and mobile money integration.',
			      		imageUrl: '/images/crm.png', // Or a link
			      		link: 'https://sntaks.com', // Or keep it blank
			    	},
		  	],
		},
	},
	seo: {
		  title: 'Vincent Kioko | Full Stack Developer & Fintech Systems Engineer',
		  description:
		    'Portfolio of Vincent Kioko, a full stack developer building fintech, POS, and logistics systems in Kenya. Explore Laravel, React, and Node.js projects for microfinance, retail, and mobile money integration.',
		  imageURL: 'https://sntaks.com/images/seo-banner.png', // Optional image for social previews
	},
	social: {
		linkedin: 'vkioko04',
		twitter: 'S_ntaks',
		mastodon: '',
		researchGate: '',
		facebook: '',
		instagram: '',
		youtube: '', // example: 'pewdiepie'
		dribbble: '',
		behance: '',
		medium: '',
		dev: '',
		stackoverflow: '', // example: '1/jeff-atwood'
		skype: '',
		telegram: '',
		website: 'https://www.sntaks.com',
		phone: '',
		email: 'vincentkioko51@gmail.com',
	},
	resume: {
		fileUrl:
			'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
	},
	skills: [
		'PHP',
		'Laravel',
		'JavaScript',
		'TypeScript',
		'React.js',
		'Node.js',
		'Nest.js',
		'MySQL',
		'PostgreSQL',
		'Git',
		'Docker',
		'PHPUnit',
		'CSS',
		'Tailwind',
	],
	experiences: [
		{
			company: 'Sterling Credit Ltd',
			position: 'IT Manager/ Full Stack Developer',
			from: 'August 2020',
			to: 'Present',
			companyLink: 'https://sterlingcredit.co.ke',
		},
		{
			company: 'Queens Classy Collections',
			position: 'Junior Developer',
			from: 'Sept 2019',
			to: 'March 2020',
			companyLink: 'https://example.com',
		},
	],
	certifications: [
		{
			name: 'Responsive Web Design',
			body: 'freeCodeCamp',
			year: 'Feb 2023',
			link: 'https://www.freecodecamp.org/certification/sntaks/responsive-web-design',
		},
	],
	educations: [
		{
			institution: 'Jomo Kenyatta University of Agriculture & Technology',
			degree: 'Degree',
			from: '2015',
			to: '2019',
		},
		{
			institution: 'Kenya Institute of Management',
			degree: 'Diploma',
			from: '2014',
			to: '2018',
		},
	],
	publications: [
		  {
			    title: 'Design and Implementation of a Digital Wallet API for Mobile Money Integration',
			    conferenceName: '',
			    journalName: 'Journal of Financial Systems & Technology',
			    authors: 'Vincent Kioko',
			    link: 'https://example.com/publication/wallet-api-integration',
			    description:
			      'This paper explores the architectural design, security considerations, and Laravel implementation of a digital wallet API integrated with M-Pesa for real-time deposits and withdrawals in microfinance settings.',
		  },
		  {
			    title: 'Modern POS Systems for Informal Retailers: A Laravel & React-Based Case Study',
			    conferenceName: 'East Africa ICT Summit 2024',
			    journalName: '',
			    authors: 'Vincent Kioko, John Mwangi',
			    link: 'https://example.com/publication/pos-nexus-study',
			    description:
			      'A technical paper detailing the design, development, and deployment of a hybrid POS and inventory system tailored for informal retail SMEs in Kenya using Laravel and React.js.',
		  },
		  {
			    title: 'Workflow Automation in Lending Systems: Optimizing Loan Lifecycle Management',
			    conferenceName: '',
			    journalName: 'International Journal of Software Engineering Practices',
			    authors: 'Vincent Kioko',
			    link: 'https://example.com/publication/lending-crm-workflow',
			    description:
			      'This publication presents practical approaches for digitizing loan processing using a custom-built CRM system, focusing on loan application workflows, cycle enforcement, reminders, and M-Pesa API integration.',
			  },
	],

	// Display articles from your medium or dev account. (Optional)
	blog: {
		source: 'dev', // medium | dev
		username: 'arifszn', // to hide blog section, keep it empty
		limit: 2, // How many articles to display. Max is 10.
	},
	googleAnalytics: {
		id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
	},
	// Track visitor interaction and behavior. https://www.hotjar.com
	hotjar: {
		id: '',
		snippetVersion: 6,
	},
	themeConfig: {
		defaultTheme: 'emerald',

		// Hides the switch in the navbar
		// Useful if you want to support a single color mode
		disableSwitch: false,

		// Should use the prefers-color-scheme media-query,
		// using user system preferences, instead of the hardcoded defaultTheme
		respectPrefersColorScheme: false,

		// Display the ring in Profile picture
		displayAvatarRing: true,

		// Available themes. To remove any theme, exclude from here.
		themes: [
			'light',
			'dark',
			'cupcake',
			'bumblebee',
			'emerald',
			'corporate',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'lofi',
			'pastel',
			'fantasy',
			'wireframe',
			'black',
			'luxury',
			'dracula',
			'cmyk',
			'autumn',
			'business',
			'acid',
			'lemonade',
			'night',
			'coffee',
			'winter',
			'dim',
			'nord',
			'sunset',
			'procyon',
		],

		// Custom theme, applied to `procyon` theme
		customTheme: {
			primary: '#fc055b',
			secondary: '#219aaf',
			accent: '#e8d03a',
			neutral: '#2A2730',
			'base-100': '#E3E3ED',
			'--rounded-box': '3rem',
			'--rounded-btn': '3rem',
		},
	},

	// Optional Footer. Supports plain text or HTML.
	footer: `Made with <a 
			class="text-primary" href="https://github.com/arifszn/gitprofile"
			target="_blank"
			rel="noreferrer"
		>GitProfile</a> and ❤️`,

	enablePWA: true,
};

export default CONFIG;
