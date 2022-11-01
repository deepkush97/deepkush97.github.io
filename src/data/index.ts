import AspNetCoreLogo from '../lib/components/logos/backend/AspNetCoreLogo.svelte';
import NodejsLogo from '../lib/components/logos/backend/NodejsLogo.svelte';
import WebSocketLogo from '../lib/components/logos/backend/WebSocketLogo.svelte';
import MongoDbLogo from '../lib/components/logos/database/MongoDbLogo.svelte';
import MsSqlLogo from '../lib/components/logos/database/MsSqlLogo.svelte';
import MySqlLogo from '../lib/components/logos/database/MySqlLogo.svelte';
import BootstrapLogo from '../lib/components/logos/frontend/BootstrapLogo.svelte';
import JqueryLogo from '../lib/components/logos/frontend/JqueryLogo.svelte';
import NextJsLogo from '../lib/components/logos/frontend/NextJsLogo.svelte';
import ReactJsLogo from '../lib/components/logos/frontend/ReactJsLogo.svelte';
import ReduxLogo from '../lib/components/logos/frontend/ReduxLogo.svelte';
import SvelteLogo from '../lib/components/logos/frontend/SvelteLogo.svelte';
import TailwindCssLogo from '../lib/components/logos/frontend/TailwindCssLogo.svelte';
import CppLogo from '../lib/components/logos/languages/CppLogo.svelte';
import CSharpLogo from '../lib/components/logos/languages/CSharpLogo.svelte';
import Css3Logo from '../lib/components/logos/languages/Css3Logo.svelte';
import Html5Logo from '../lib/components/logos/languages/Html5Logo.svelte';
import JavaLogo from '../lib/components/logos/languages/JavaLogo.svelte';
import JavaScriptLogo from '../lib/components/logos/languages/JavaScriptLogo.svelte';
import PythonLogo from '../lib/components/logos/languages/PythonLogo.svelte';
import TypeScriptLogo from '../lib/components/logos/languages/TypeScriptLogo.svelte';
import GitHubLogo from '../lib/components/logos/tools/GitHubLogo.svelte';
import GitLabLogo from '../lib/components/logos/tools/GitLabLogo.svelte';
import GitLogo from '../lib/components/logos/tools/GitLogo.svelte';
import VisualStudioLogo from '../lib/components/logos/tools/VisualStudioLogo.svelte';
import VscodeLogo from '../lib/components/logos/tools/VscodeLogo.svelte';

export const skills = [
	{
		title: 'Languages',
		items: [
			{
				title: 'Typescript (Proficient)',
				iconComponent: TypeScriptLogo
			},
			{
				title: 'Javascript (Proficient)',
				iconComponent: JavaScriptLogo
			},
			{
				title: 'C# (Proficient)',
				iconComponent: CSharpLogo
			},
			{
				title: 'HTML (Proficient)',
				iconComponent: Html5Logo
			},
			{
				title: 'CSS (Proficient)',
				iconComponent: Css3Logo
			},
			{
				title: 'Java (Limited)',
				iconComponent: JavaLogo
			},
			{
				title: 'Python (Limited)',
				iconComponent: PythonLogo
			},
			{
				title: 'C/C++ (Limited)',
				iconComponent: CppLogo
			}
		]
	},
	{
		title: 'Backend Development',
		items: [
			{
				title: 'Node.js',
				iconComponent: NodejsLogo
			},
			{
				title: 'ASP.NET Core',
				iconComponent: AspNetCoreLogo
			},
			{
				title: 'Web Sockets',
				iconComponent: WebSocketLogo
			}
		]
	},
	{
		title: 'Frontend Development',
		items: [
			{ title: 'HTML', iconComponent: Html5Logo },
			{ title: 'CSS', iconComponent: Css3Logo },
			{ title: 'Next.js', iconComponent: NextJsLogo },
			{ title: 'React.js', iconComponent: ReactJsLogo },
			{ title: 'Tailwind', iconComponent: TailwindCssLogo },
			{ title: 'Bootstrap', iconComponent: BootstrapLogo },
			{ title: 'JQuery', iconComponent: JqueryLogo },
			{ title: 'Redux', iconComponent: ReduxLogo },
			{ title: 'Svelte', iconComponent: SvelteLogo }
		]
	},
	{
		title: 'Databases',
		items: [
			{
				title: 'MySQL',
				iconComponent: MySqlLogo
			},
			{
				title: 'MSSQL',
				iconComponent: MsSqlLogo
			},
			{
				title: 'MongoDB',
				iconComponent: MongoDbLogo
			}
		]
	},
	{
		title: 'Tools',
		items: [
			{
				title: 'Visual Studio Code',
				iconComponent: VscodeLogo
			},
			{
				title: 'Git',
				iconComponent: GitLogo
			},
			{
				title: 'Visual Studio',
				iconComponent: VisualStudioLogo
			},
			{
				title: 'Github',
				iconComponent: GitHubLogo
			},
			{
				title: 'Gitlab',
				iconComponent: GitLabLogo
			}
		]
	}
];

export const experiences = [
	{
		companyName: 'Intellect Design Arena Limited',
		location: 'Delhi, India',
		designation: 'Associate Consultant',
		timePeriod: "Jun' 2021 - Present",
		mentionablePoints: [
			'Worked on different modules of Government e-Marketplace.',
			'Data pipeline optimization and re-building the existing application.',
			'Develop and deploy a integration module to production phase.',
			'Working on Java, NodeJS, Python and JavaScript.'
		]
	},
	{
		companyName: 'AtliQ Technologies',
		location: 'Vadodara, Gujarat',
		designation: 'Software Engineer',
		timePeriod: "Nov' 2020 - Jun' 2021",
		mentionablePoints: [
			'Building software and application according to the needs of the client.',
			'Worked mainly on NodeJS, React and Laravel.'
		]
	},
	{
		companyName: 'Matrix Comsec Private Limited',
		location: 'Vadodara, Gujarat',
		designation: 'Engineer (Software Department)',
		timePeriod: "Aug' 2020 - Oct' 2020",
		mentionablePoints: [
			'Worked as a Software Engineer to build a robust web solution to deliver live stream as well as playback of IPCameras and different product devices of the company.',
			'Worked with NodeJS as Backend and React as Frontend technologies.',
			'Successfully analyzed the problem, developed and provided a feasible solution single handed.'
		]
	},
	{
		companyName: 'SSM Infotech Private Limited',
		location: 'Surat, Gujarat',
		designation: 'Software Engineer',
		timePeriod: "Jun' 2019 - Aug' 2020",
		mentionablePoints: [
			'Worked passionately in learning, developing and maintaining different products and solutions of the company.',
			'Worked in .NET Framework, .NETCore, JQuery and Javascript.',
			'Acquired and learnt .NET, C# in the work experience itself.',
			'Managed the team and product with Manager and converted the requirements of the product into highly dynamic and extensible software.'
		]
	}
];

export const projects = [
	{
		description: 'Sudoku game with three levels of difficulty and hints feature. ',
		title: 'sudoku-solver-ts',
		techStack: ['Typescript', 'Next.js', 'React.js', 'Tailwind'],
		url: 'https://deepkush97.github.io/sudoku-solver-ts/',
		repoLink: 'https://github.com/deepkush97/sudoku-solver-ts'
	},
	{
		description: 'Flappy bird game using svelte, tailwind with typescript (of course).',
		title: 'flappy-bird-ts',
		techStack: ['Typescript', 'Svelte', 'Tailwind'],
		url: 'https://deepkush97.github.io/flappy-bird-ts/',
		repoLink: 'https://github.com/deepkush97/flappy-bird-ts'
	},
	{
		description: 'Stream any RTSP stream and output to websocket for consumption by jsmpeg.',
		title: 'node-rtsp-stream-ts',
		techStack: ['Typescript', 'RTSP', 'Websocket'],
		repoLink: 'https://github.com/deepkush97/node-rtsp-stream-ts'
	},
	{
		description:
			'A reddit clone using a server at backend with node, express, typeorm and postgres. The client is made with React with tailwind and SWR.',
		title: 'read-it-ts',
		techStack: ['Typescript', 'Node', 'TypeORM', 'PostgreSQL', 'React', 'Tailwind', 'SWR'],
		repoLink: 'https://github.com/deepkush97/read-it-ts'
	},
	{
		description:
			'A note application which reside into your private browser and persist it in IndexedDB.',
		title: 'inmemory-notes-app-ts',
		techStack: ['Typescript', 'React', 'MaterialUI', 'ReactRouter', 'Dexie.js'],
		url: 'https://deepkush97.github.io/inmemory-notes-app-ts/',
		repoLink: 'https://github.com/deepkush97/inmemory-notes-app-ts'
	},
	{
		description:
			' A job portal project in which user can apply for the listed jobs and recruiter can create jobs and view the applied candidates list for the job.',
		title: 'job-portal-js',
		techStack: [
			'Javascript',
			'Express',
			'MySQL',
			'Sequelize',
			'ReactJS',
			'Bootstrap',
			'ReactRouter'
		],
		repoLink: 'https://github.com/deepkush97/job-portal-js'
	},
	{
		description:
			'A npm runner which creates application boilerplate with typescript in a better project structure which includes swagger-ui documentation and some security aspects.',
		title: 'create-better-express-api',
		techStack: ['Javascript'],
		url: 'https://www.npmjs.com/package/create-better-express-api',
		repoLink: 'https://github.com/deepkush97/create-better-express-api'
	},
	{
		description:
			'A simple logger implementation with typescript containing two transport method for logging.',
		title: 'logger-ts',
		techStack: ['Typescript'],
		url: 'https://www.npmjs.com/package/@deepkush97/logger-ts',
		repoLink: 'https://github.com/deepkush97/logger-ts'
	},
	{
		description:
			'A e-commerce application built with Express, MongoDB, React, React-Router, Redux, Redux-Thunk, Bootstrap.',
		title: 'pro-shop-js',
		techStack: ['Javascript', 'Express', 'ReactJS', 'Redux', 'MongoDB', 'Bootstrap'],
		repoLink: 'https://github.com/deepkush97/pro-shop-js'
	}
];
