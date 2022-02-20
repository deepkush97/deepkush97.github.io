import { AspNetCoreLogo } from "../components/logos/backend/AspNetCoreLogo";
import { NodejsLogo } from "../components/logos/backend/NodejsLogo";
import { MongoDbLogo } from "../components/logos/database/MongoDbLogo";
import { MsSqlLogo } from "../components/logos/database/MsSqlLogo";
import { MySqlLogo } from "../components/logos/database/MySqlLogo";
import { PostgreSqlLogo } from "../components/logos/database/PostgreSqlLogo";
import { BootstrapLogo } from "../components/logos/frontend/BootstrapLogo";
import { FlutterLogo } from "../components/logos/frontend/FlutterLogo";
import { JqueryLogo } from "../components/logos/frontend/JqueryLogo";
import { NextJsLogo } from "../components/logos/frontend/NextJsLogo";
import { ReactJsLogo } from "../components/logos/frontend/ReactJsLogo";
import { ReduxLogo } from "../components/logos/frontend/ReduxLogo";
import { SvelteLogo } from "../components/logos/frontend/SvelteLogo";
import { TailwindCssLogo } from "../components/logos/frontend/TailwindCssLogo";
import { CppLogo } from "../components/logos/languages/CppLogo";
import { CSharpLogo } from "../components/logos/languages/CSharpLogo";
import { Css3Logo } from "../components/logos/languages/Css3Logo";
import { Html5Logo } from "../components/logos/languages/Html5Logo";
import { JavaLogo } from "../components/logos/languages/JavaLogo";
import { JavaScriptLogo } from "../components/logos/languages/JavaScriptLogo";
import { PythonLogo } from "../components/logos/languages/PythonLogo";
import { TypeScriptLogo } from "../components/logos/languages/TypeScriptLogo";
import { AndroidStudioLogo } from "../components/logos/tools/AndroidStudioLogo";
import { GitHubLogo } from "../components/logos/tools/GitHubLogo";
import { GitLabLogo } from "../components/logos/tools/GitLabLogo";
import { GitLogo } from "../components/logos/tools/GitLogo";
import { VisualStudioLogo } from "../components/logos/tools/VisualStudioLogo";
import { VscodeLogo } from "../components/logos/tools/VscodeLogo";
import { TechToken } from "../components/TechToken";

export const siteName = "deepkush97";
export const githubLink = "https://github.com/deepkush97";
export const title = "DeepKush";
export const applicationDescription =
  "Deepanshu Kushwaha is a Software Engineer who has experience in Node.js, React.js and .NET Core, ASP.NET Core and many more things.";
export const locale = "en";

export const navigation = {
  about: { id: "about", text: "About", number: "01" },
  skills: { id: "skills", text: "Skills", number: "02" },
  experience: { id: "experience", text: "Experience", number: "03" },
  projects: { id: "projects", text: "Projects", number: "04" },
  contact: { id: "contact", text: "Contact", number: "05" },
};

export const skills = [
  {
    title: "Languages",
    items: [
      {
        title: "Typescript (Proficient)",
        iconComponent: TypeScriptLogo,
      },
      {
        title: "Javascript (Proficient)",
        iconComponent: JavaScriptLogo,
      },
      {
        title: "C# (Proficient)",
        iconComponent: CSharpLogo,
      },
      {
        title: "HTML (Proficient)",
        iconComponent: Html5Logo,
      },
      {
        title: "CSS (Proficient)",
        iconComponent: Css3Logo,
      },
      {
        title: "Python (Limited)",
        iconComponent: PythonLogo,
      },
      {
        title: "Java (Limited)",
        iconComponent: JavaLogo,
      },
      {
        title: "C/C++ (Limited)",
        iconComponent: CppLogo,
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        iconComponent: NodejsLogo,
      },
      {
        title: "ASP.NET Core",
        iconComponent: AspNetCoreLogo,
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      { title: "Next.js", iconComponent: NextJsLogo },
      { title: "React.js", iconComponent: ReactJsLogo },
      { title: "Redux", iconComponent: ReduxLogo },
      { title: "Flutter", iconComponent: FlutterLogo },
      { title: "Svelte", iconComponent: SvelteLogo },
      { title: "Tailwind CSS", iconComponent: TailwindCssLogo },
      { title: "Bootstrap", iconComponent: BootstrapLogo },
      { title: "JQuery", iconComponent: JqueryLogo },
      { title: "HTML", iconComponent: Html5Logo },
      { title: "CSS", iconComponent: Css3Logo },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        title: "MySQL",
        iconComponent: MySqlLogo,
      },
      {
        title: "MSSQL",
        iconComponent: MsSqlLogo,
      },
      {
        title: "PostreSQL",
        iconComponent: PostgreSqlLogo,
      },
      {
        title: "MongoDB",
        iconComponent: MongoDbLogo,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        title: "Visual Studio Code",
        iconComponent: VscodeLogo,
      },
      {
        title: "Git",
        iconComponent: GitLogo,
      },
      {
        title: "Android Studio",
        iconComponent: AndroidStudioLogo,
      },
      {
        title: "Visual Studio",
        iconComponent: VisualStudioLogo,
      },

      {
        title: "Github",
        iconComponent: GitHubLogo,
      },
      {
        title: "Gitlab",
        iconComponent: GitLabLogo,
      },
    ],
  },
];

export const about = `I'm Deepanshu Kushwaha, a Software Engineer by profession. I've
pursued my Bachelor Of Engineering in 2019 from Government Engineering
College, Dahod. I have a keen passion to build beautiful and
eye-sparkling software with a standard and well-built code base. I'm a
person with a very enthusiastic and down-to-earth personality, but I
like to watch stars and explore nature. I like to spend my time at
work, developing, reading blogs and articles, and listening to music.
I even engage myself in discussing, sharing, and absorbing knowledge
and experience from other people around me. I am really into as much
knowledge and experience, every other small gold nuggets of the
industry.`;

export const experiences = [
  {
    companyName: "Intellect Design Arena Limited",
    location: "Delhi, India",
    designation: "Associate Consultant",
    timePeriod: "Jun' 2021 - Present",
    mentionablePoints: [
      "Developing and maintaining ETL for Data Warehouse.",
      "Price trends generation and development for analytics.",
      "Development in Government e-Marketplace Application.",
      "Working on NodeJS, Python, Java, and JavaScript.",
    ],
  },
  {
    companyName: "AtliQ Technologies",
    location: "Vadodara, Gujarat",
    designation: "Software Engineer",
    timePeriod: "Nov' 2020 - Jun' 2021",
    mentionablePoints: [
      "Building software and application according to the needs of the client.",
      "Worked mainly on NodeJS, React and Laravel.",
    ],
  },
  {
    companyName: "Matrix Comsec Private Limited",
    location: "Vadodara, Gujarat",
    designation: "Engineer (Software Department)",
    timePeriod: "Aug' 2020 - Oct' 2020",
    mentionablePoints: [
      "Worked as a Software Engineer to build a robust web solution to deliver live stream as well as playback of IPCameras and different product devices of the company.",
      "Worked with NodeJS as Backend and React as Frontend technologies.",
      "Successfully analyzed the problem, developed and provided a feasible solution single handed.",
    ],
  },
  {
    companyName: "SSM Infotech Private Limited",
    location: "Surat, Gujarat",
    designation: "Software Engineer",
    timePeriod: "Jun' 2019 - Aug' 2020",
    mentionablePoints: [
      "Worked passionately in learning, developing and maintaining different products and solutions of the company.",
      "Worked in .NET Framework, .NETCore, JQuery and Javascript.",
      "Acquired and learnt .NET, C# in the work experience itself.",
      "Managed the team and product with Manager and converted the requirements of the product into highly dynamic and extensible software.",
    ],
  },
];

export const socials = [
  {
    description: "To have a formal conversation or to share something with me.",
    url: "mailto:kushwaha97deepanshu@gmail.com",
    iconClass: "far fa-envelope",
    linkText: "Mail me!",
  },
  {
    description: "To see my projects, my repositories and my personal work.",
    url: "https://github.com/deepkush97",
    iconClass: "fab fa-github",
    linkText: "Visit me!",
  },
  {
    description: "To connect to me professionally and build network.",
    url: "https://www.linkedin.com/in/leftisfame/",
    iconClass: "fab fa-linkedin",
    linkText: "Connect with me!",
  },
  {
    description: "To get to know me personally. I am another person in real.",
    url: "https://www.instagram.com/leftisfame",
    iconClass: "fab fa-instagram",
    linkText: "Follow me!",
  },
];

export const projects = [
  {
    description:
      "A note application which reside into your private browser and persist it in IndexedDB.",
    title: "inmemory-notes-app-ts",
    techStack: ["Typescript", "React", "MaterialUI", "ReactRouter", "Dexie.js"],
    url: "https://deepkush97.github.io/inmemory-notes-app-ts/",
    repoLink: "https://github.com/deepkush97/inmemory-notes-app-ts",
  },
  {
    description:
      " A job portal project in which user can apply for the listed jobs and recruiter can create jobs and view the applied candidates list for the job.",
    title: "job-portal-js",
    techStack: [
      "Javascript",
      "Express",
      "MySQL",
      "Sequelize",
      "ReactJS",
      "Bootstrap",
      "ReactRouter",
    ],
    repoLink: "https://github.com/deepkush97/job-portal-js",
  },
  {
    description:
      "A npm runner which creates application boilerplate with typescript in a better project structure which includes swagger-ui documentation and some security aspects.",
    title: "create-better-express-api",
    techStack: ["Javascript"],
    url: "https://www.npmjs.com/package/create-better-express-api",
    repoLink: "https://github.com/deepkush97/create-better-express-api",
  },
  {
    description:
      "A simple logger implementation with typescript containing two transport method for logging.",
    title: "logger-ts",
    techStack: ["Typescript"],
    url: "https://www.npmjs.com/package/@deepkush97/logger-ts",
    repoLink: "https://github.com/deepkush97/logger-ts",
  },
  {
    description:
      "A small runner to generate npm install script for given project.",
    title: "npm-i-copier",
    techStack: ["Javascript"],
    url: "https://www.npmjs.com/package/npm-i-copier",
    repoLink: "https://github.com/deepkush97/npm-i-copier",
  },
  {
    description:
      "Stream any RTSP stream and output to websocket for consumption by jsmpeg.",
    title: "node-rtsp-stream-ts",
    techStack: ["Typescript", "RTSP", "Websocket"],
    repoLink: "https://github.com/deepkush97/node-rtsp-stream-ts",
  },
  {
    description:
      "A reddit clone using a server at backend with node, express, typeorm and postgres. The client is made with React with tailwind and SWR.",
    title: "read-it-ts",
    techStack: [
      "Typescript",
      "Node",
      "TypeORM",
      "PostgreSQL",
      "React",
      "Tailwind",
      "SWR",
    ],
    repoLink: "https://github.com/deepkush97/read-it-ts",
  },
  {
    description:
      "A e-commerce application built with Express, MongoDB, React, React-Router, Redux, Redux-Thunk, Bootstrap.",
    title: "pro-shop-js",
    techStack: [
      "Javascript",
      "Express",
      "ReactJS",
      "Redux",
      "MongoDB",
      "Bootstrap",
    ],
    repoLink: "https://github.com/deepkush97/pro-shop-js",
  },
];
