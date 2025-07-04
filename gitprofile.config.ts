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
				], // List of repository names to display.
			},
		},
		external: {
			  header: 'Client-Facing Projects',
			  projects: [
				    {
					      title: 'Wallet Nexus',
					      description: 'A Laravel-based digital wallet system with KYC, internal transfers, M-Pesa integration, and audit trails. Designed for SACCOs and microfinance institutions.',
					      imageUrl: 'https://inv.psctraining.co.ke/assets/img/img-01.png', // Replace with your image
					      link: 'https://documenter.getpostman.com/view/39198265/2sAYQZHXkZ', // Add live demo or documentation link if available
				    },
				    {
					      title: 'POS Nexus',
					      description: 'Point of Sale and inventory management system tailored for wholesalers and retailers. Supports barcode scanning, purchase tracking, and user-level permissions.',
					      imageUrl: 'https://pos.psctraining.co.ke/assets/img/logo/cashier-machine.png',
					      link: 'https://pos.psctraining.co.ke',
				    },
				    {
					      title: 'Madam Portal',
					      description: 'A custom CRM and task tracking portal for a boutique business, enabling seamless staff management, customer relations, and sales logging.',
					      imageUrl: 'https://inv.psctraining.co.ke/assets/img/img-01.png',
					      link: 'https://madam.sterlingcredit.co.ke',
				    },
				    {
					      title: 'Sterling Main',
					      description: 'Enterprise loan management platform with modules for customer onboarding, loan cycles, collections, and document handling, developed for Sterling Credit Ltd.',
					      imageUrl: 'https://portal.sterlingcredit.co.ke/images/logo.png',
					      link: 'https://sterlingcredit.co.ke',
				    },
				    {
					      title: 'Inventory Nexus',
					      description: 'Modular inventory and supplier management system with stock alerts, reorder level automation, and purchase records—ideal for SMEs and distributors.',
					      imageUrl: 'https://inv.psctraining.co.ke/assets/img/img-01.png',
					      link: 'https://inv.psctraining.co.ke/',
				    },
			  ],
		},

	},
	seo: {
		  title: 'Vincent Kioko | Full Stack Developer & Fintech Systems Engineer',
		  description: 'Portfolio of Vincent Kioko, a full stack developer building fintech, POS, and logistics systems in Kenya. Explore Laravel, React, and Node.js projects for microfinance, retail, and mobile money integration.',
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
		fileUrl: 'https://drive.google.com/file/d/1DQjETuGPRfzGMY8n0yjkJDHkeQwSLbb1/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
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
			    description: 'This paper explores the architectural design, security considerations, and Laravel implementation of a digital wallet API integrated with M-Pesa for real-time deposits and withdrawals in microfinance settings.',
		  },
		  {
			    title: 'Workflow Automation in Lending Systems: Optimizing Loan Lifecycle Management',
			    conferenceName: '',
			    journalName: 'International Journal of Software Engineering Practices',
			    authors: 'Vincent Kioko',
			    link: 'https://example.com/publication/lending-crm-workflow',
			    description: 'This publication presents practical approaches for digitizing loan processing using a custom-built CRM system, focusing on loan application workflows, cycle enforcement, reminders, and M-Pesa API integration.',
		  },
	],

	// Display articles from your medium or dev account. (Optional)
	blog: {
		/*source: 'dev', // medium | dev
		username: 'arifszn', // to hide blog section, keep it empty
		limit: 2, // How many articles to display. Max is 10.*/
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
