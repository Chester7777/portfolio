export const profile = {
  name: 'Evgeny Chausov',
  role: 'Front-end Developer',
  tagline: 'React · TypeScript · AI agents',
  location: 'Minsk, Belarus',
  intro:
    'I build data-heavy web apps in React and TypeScript: canvas drawing tools, spreadsheet-grade tables, '
    + 'billing flows and AI assistants that act inside the product.',
};

export const contacts = [
  { label: 'Telegram', value: '@CHES7777', href: 'https://t.me/CHES7777' },
  { label: 'Email', value: 'Es18.03.88@gmail.com', href: 'mailto:Es18.03.88@gmail.com' },
  { label: 'LinkedIn', value: 'evgeny-chausov', href: 'https://www.linkedin.com/in/evgeny-chausov-6101b1212/' },
  { label: 'GitHub', value: 'Chester7777', href: 'https://github.com/Chester7777' },
];

export const stats = [
  { value: '2020', label: 'shipping production React since' },
  { value: '1', label: 'large SaaS product, end to end' },
  { value: 'AI', label: 'agent features from UI to LLM service' },
];

export interface Job {
  period: string;
  company: string;
  role: string;
  summary: string;
  points: string[];
  stack: string[];
}

export const jobs: Job[] = [
  {
    period: '2021 — 2026',
    company: 'Kreo Software',
    role: 'Front-end Developer',
    summary: 'Cloud SaaS for quantity takeoff and cost estimating on construction drawings.',
    points: [
      'Built and maintained core product features in a large TypeScript / React / Redux-Saga codebase.',
      'Owned the subscription and billing front end on Chargebee: plans, seats, trials, renewals, usage limits.',
      'Built admin, team and permission flows, comments, notifications and real-time updates.',
      'Built an in-app AI assistant and a voice assistant; contributed to the Python LLM service.',
    ],
    stack: ['React', 'TypeScript', 'Redux-Saga', 'AG Grid', 'Paper.js', 'Python', 'FastAPI', 'LangGraph'],
  },
  {
    period: '2020 — 2021',
    company: 'Dental Clinic',
    role: 'React Developer',
    summary: 'Single-page applications for a private clinic.',
    points: [
      'Developed and supported SPA applications with TypeScript and React/Redux.',
      'Refactored legacy code and built layouts from ready-made designs.',
    ],
    stack: ['React', 'Redux', 'TypeScript', 'SCSS'],
  },
];

export interface CaseStudy {
  title: string;
  kicker: string;
  text: string;
  tags: string[];
  hue: number;
}

export const caseStudies: CaseStudy[] = [
  {
    kicker: 'Canvas',
    title: 'Measurement tools on construction drawings',
    text: 'Interactive measuring of areas, lines and counts on PDF sheets, with annotations, filters, '
      + 'text search across pages and undo/redo.',
    tags: ['Paper.js', 'React', 'Redux-Saga'],
    hue: 205,
  },
  {
    kicker: 'Data',
    title: 'Items & assemblies database',
    text: 'Spreadsheet-grade tree tables with inline editing, drag & drop, search and formula-driven reports.',
    tags: ['AG Grid Enterprise', 'React DnD', 'Formula.js'],
    hue: 165,
  },
  {
    kicker: 'Billing',
    title: 'Subscriptions and access control',
    text: 'Plans, seats, add-ons, trials and renewals on Chargebee; role-based permissions and SSO.',
    tags: ['Chargebee', 'CASL', 'Keycloak'],
    hue: 265,
  },
  {
    kicker: 'AI',
    title: 'AI assistant inside the product',
    text: 'Streaming chat over SSE, an agent loop in redux-saga and client-side tools that let the LLM '
      + 'open pages, measure and build reports. Python service on FastAPI + LangGraph.',
    tags: ['SSE', 'LangGraph', 'Gemini', 'OpenAI'],
    hue: 320,
  },
];

export interface FreelanceProject {
  title: string;
  client: string;
  text: string;
  image: string;
  live: string;
  code: string;
  tags: string[];
}

export const freelance: FreelanceProject[] = [
  {
    title: 'Lumière',
    client: 'Premium beauty salon',
    text: 'One-page site in dark tones with smooth motion: services, gallery, about and booking sections.',
    image: 'img/lumiere.jpg',
    live: 'https://chester7777.github.io/Beauty-site/',
    code: 'https://github.com/Chester7777/Beauty-site',
    tags: ['React 18', 'TypeScript', 'styled-components', 'Framer Motion', 'Vite'],
  },
  {
    title: 'Iryna Harelik',
    client: 'Business change consultant',
    text: 'Landing page built from a Figma design: services, approach, contacts and a privacy page; deployed with GitHub Actions.',
    image: 'img/harelik.jpg',
    live: 'https://chester7777.github.io/dentistry/',
    code: 'https://github.com/Chester7777/dentistry',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma', 'GitHub Actions'],
  },
];

export const skillGroups = [
  { title: 'Core', items: ['TypeScript', 'JavaScript', 'React', 'Redux', 'Redux Toolkit', 'Redux-Saga', 'HTML', 'CSS / SCSS', 'styled-components'] },
  { title: 'UI & data', items: ['AG Grid', 'Paper.js', 'Three.js', 'React DnD', 'Recharts', 'Material UI'] },
  { title: 'AI & back end', items: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'Gemini', 'OpenAI'] },
  { title: 'Quality & tools', items: ['Jest', 'pytest', 'Webpack', 'Vite', 'Git', 'Jira', 'Sentry', 'PostHog', 'Claude Code'] },
];

// Words for the 3D skills sphere.
export const sphereWords = [
  'React', 'TypeScript', 'Redux', 'Saga', 'AG Grid', 'Paper.js', 'Three.js', 'Python', 'FastAPI', 'LangGraph',
  'Gemini', 'OpenAI', 'SSE', 'Jest', 'Webpack', 'Vite', 'SCSS', 'Git', 'Chargebee', 'Keycloak',
  'Node.js', 'REST', 'WebSocket', 'LLM', 'Sentry', 'PostHog', 'styled', 'HTML', 'CSS',
];
