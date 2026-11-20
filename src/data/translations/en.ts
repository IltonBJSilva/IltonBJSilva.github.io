import type { Translation } from '../../types';

export const en: Translation = {
  meta: {
    title: 'Ilton Batista | Software Engineer',
    description:
      'Software Developer focused on backend, distributed systems, cloud, DevOps, security and AI agents with LLMs.',
  },

  nav: {
    about: 'About',
    focus: 'Focus',
    ai: 'AI',
    projects: 'Projects',
    competitions: 'Competitions',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    menu: 'Open menu',
    theme: 'Toggle theme',
    language: 'Language',
  },

  hero: {
    eyebrow: 'Software Developer · Backend & AI',
    role: 'I build systems that stay correct when everything goes wrong.',
    tagline: 'Backend · Distributed systems · DevOps · Security · AI with LLMs',
    description:
      'I ship APIs, integrations and automations to production, from Accenture to real clients. I enjoy problems involving concurrency, data consistency and failure, and I use AI agents every day with well-defined context and a human in control.',
    ctaProjects: 'View projects',
    ctaCv: 'Download resume',
    available: 'Open to new opportunities',
    location: 'Uberlândia, Brazil · Remote',
  },

  stats: [
    { value: '2x', label: 'NASA Space Apps participations' },
    { value: '60%+', label: 'efficiency gain on refactored queries' },
    { value: '~80%', label: 'of manual tasks automated' },
    { value: '130+', label: 'courses and certifications' },
  ],

  focus: {
    eyebrow: 'What I do',
    title: 'Areas of focus',
    subtitle: 'Every area is backed by concrete evidence: GitHub projects or results at companies.',
    seeIn: 'See in',
    areas: {
      architecture: {
        title: 'Architecture & Distributed Systems',
        description: 'Systems that stay correct under concurrency, failures and redelivery.',
        points: [
          'Transactional Outbox, Inbox, retries and DLQ on queues (AWS SQS)',
          'Persistent idempotency and pessimistic row-level locking',
          'DDD, modular monolith and C4-style documentation',
          'Event-driven architecture with Pub/Sub and Cloud Functions',
        ],
      },
      ai: {
        title: 'AI, Agents & LLMs',
        description: 'Agents and LLMs used with method: context, tools, verification and a human in control.',
        points: ['Coding agents every day (Claude Code) with skills, subagents and MCP servers', 'Context engineering: agent guides with a source of truth and inviolable rules', 'Model routing by cost, latency and task complexity', 'Claude-powered assistant: conversation memory, plan generation and rules + LLM'],
      },
      data: {
        title: 'Data & Machine Learning',
        description: 'Data at scale and scoring models measured against reality.',
        points: [
          'BigQuery for large volumes and analytical pipelines',
          'Relevance score calibrated on real history with precision feedback',
          'Text search ranked by geographic proximity (Haversine)',
          'Data analysis with Python and Pandas',
        ],
      },
      security: {
        title: 'Application Security',
        description: 'Security as part of the design, not a final step.',
        points: [
          'scrypt hashing, attempt lockout, CSRF and security headers',
          'Postgres Row Level Security and secrets kept out of the repo',
          'Least-scope OAuth 2.0 and the principle of least privilege',
          'Fail-safe design: when in doubt, the operation is denied',
        ],
      },
      devops: {
        title: 'DevOps & Cloud',
        description: 'From commit to production with no manual steps, and full visibility.',
        points: [
          'CI/CD with GitHub Actions and automatic deploy on every push',
          'Docker, Docker Compose and LocalStack to emulate AWS',
          'Observability: Prometheus, health checks, structured logs',
          'GCP (Cloud Functions, Pub/Sub, Storage), Render and Supabase',
        ],
      },
      automation: {
        title: 'Automation & Integrations',
        description: 'Repetitive work becomes code, and separate systems start talking.',
        points: [
          '~80% of a team\'s manual tasks automated',
          'Selenium, Playwright and async Telegram bots',
          'Pipefy (GraphQL), Google Calendar, Gmail, Notion and WhatsApp',
          'Serverless scheduling with zero infrastructure cost',
        ],
      },
    },
  },

  ai: {
    eyebrow: 'Applied AI',
    title: 'AI agents, with method',
    subtitle: 'How I use agents and LLMs to ship reliable software, and what I share about it.',
    workflowTitle: 'My workflow with agents',
    steps: [
      {
        title: 'Context',
        description: 'Before any code, the agent gets the spec as the source of truth, a reading order and the rules that can never be broken.',
        evidence: 'AI_CONTEXT.md · Distributed Wagering Processor',
      },
      {
        title: 'Right model',
        description: 'A large model for complex reasoning; smaller ones to summarize, classify and extract. Lower cost and latency.',
        evidence: 'LLM series on LinkedIn',
      },
      {
        title: 'Skills & tools',
        description: 'Specialized skills, subagents for parallel tasks and MCP servers for browser, repositories and services.',
        evidence: 'Claude Code every day',
      },
      {
        title: 'Verification',
        description: 'Nothing is accepted without proof: tests, CI and review. Writing code got cheap; reviewing it is still expensive.',
        evidence: '73 tests in CI · concurrency tests',
      },
      {
        title: 'Human in control',
        description: 'The AI suggests, the person decides. Every conclusion cites its source data and nothing runs without approval.',
        evidence: 'The Architect · Shadow System',
      },
    ],
    contentTitle: 'Content on AI and engineering',
    contentSubtitle: 'I publish short videos and posts on LinkedIn explaining AI and software engineering in plain terms.',
    followers: '2.3k followers',
    viewPosts: 'View posts',
    topics: [
      {
        tag: 'AI & LLMs',
        title: 'Tokens, context and cost',
        description: 'What a token is, why Portuguese uses more tokens than English and how the context window affects long tasks.',
      },
      {
        tag: 'AI & LLMs',
        title: 'The right model for each task',
        description: 'Why always using the most expensive model rarely pays off, and how to choose by complexity.',
      },
      {
        tag: 'Security',
        title: 'From patch to attack in 5 days',
        description: 'A look at critical PHP flaws and why updating dependencies cannot wait.',
      },
      {
        tag: 'Open source',
        title: 'AI and the cost of review',
        description: 'What Linux Foundation research shows about AI-generated pull requests.',
      },
      {
        tag: 'Tech Guide',
        title: 'Tech in 10 parts',
        description: 'Backend, frontend and languages explained with a restaurant analogy.',
      },
      {
        tag: 'Fundamentals',
        title: 'The math behind the code',
        description: 'Induction and recursion, the Halting Problem and why 40 passing tests prove nothing.',
      },
    ],
  },

  projects: {
    eyebrow: 'Portfolio',
    title: 'Featured projects',
    subtitle: 'Real projects with tests, CI and documented architecture decisions.',
    all: 'All',
    featured: 'Featured',
    code: 'Code',
    demo: 'Live site',
    private: 'Private code (client)',
    archiveTitle: 'Other projects',
    archiveSubtitle: 'Earlier and study projects.',
    viewAll: 'View all repositories',
    areaLabels: {
      architecture: 'Architecture',
      ai: 'AI & LLMs',
      data: 'Data & ML',
      security: 'Security',
      devops: 'DevOps',
      automation: 'Automation',
    },
  },

  competitions: {
    eyebrow: 'Hackathons',
    title: 'Competitions',
    subtitle: "Projects built in 48 hours, as a team, at the world's largest hackathon.",
    myPart: 'My contribution',
    challenge: 'Challenge',
    team: 'Team',
    certificate: 'Certificate',
    certificateAlt: 'NASA Space Apps Challenge participation certificate',
    links: {
      play: 'Play in browser',
      video: 'Pitch video',
      code: 'Code',
      official: 'Official page',
      demo: 'Live site',
    },
  },

  experience: {
    eyebrow: 'Career',
    title: 'Professional experience',
    current: 'Current',
    items: [
      {
        title: 'Project Management',
        company: 'ASCII Empresa Júnior (FACOM/UFU)',
        period: 'Apr 2026 – Present',
        current: true,
        description: [
          "Coordination and tracking of the company's software projects, supporting the Tech Leads.",
          'Agile practices: ceremonies, alignment and tracking of deadlines and deliveries.',
          'Risk, blocker and dependency management, and communication between technical teams and the board.',
        ],
        technologies: ['Project management', 'Scrum', 'Risk management', 'Leadership'],
      },
      {
        title: 'Tech Lead',
        company: 'ASCII Empresa Júnior (FACOM/UFU)',
        period: 'Oct 2025 – Present',
        current: true,
        description: ['Technical leadership of a development team, from planning to delivery.', 'Defining and reviewing architecture, development standards and technical decisions.', 'Code review, bug fixing, refactoring and keeping the application quality high.', 'Growing the team through knowledge sharing and technical support.'],
        technologies: ['Architecture', 'Code review', 'Technical leadership', 'Git'],
      },
      {
        title: 'Full Stack Software Developer',
        company: 'ASCII Empresa Júnior (FACOM/UFU)',
        period: 'Oct 2024 – Present',
        current: true,
        description: [
          'Web and mobile solutions for real clients, working across frontend, backend, databases and infrastructure.',
          'Applications built with Flutter, React.js, Node.js and JavaScript.',
          'Implementation and optimization of relational databases, focused on performance and maintainability.',
          'Version control, infrastructure support and collaborative development.',
        ],
        technologies: ['Flutter', 'React.js', 'Node.js', 'JavaScript', 'SQL', 'Git'],
      },
      {
        title: 'Freelance Software Engineer',
        company: 'Workana',
        period: 'Jan 2026 – Apr 2026',
        description: [
          'Development and modernization of a corporate CRM with Node.js, TypeScript and PostgreSQL.',
          'Backend architecture, data modeling and application modernization.',
          'CI/CD pipelines and cloud environments setup.',
        ],
        technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'CI/CD', 'Cloud'],
      },
      {
        title: 'Software Engineer',
        company: 'Accenture',
        period: 'Dec 2023 – Jan 2026',
        description: [
          'Backend APIs and scalable services with Python and Google Cloud Platform.',
          'BigQuery for querying and processing large data volumes, supporting analytical pipelines and business reports.',
          'GraphQL solutions to streamline communication between clients and backend services.',
          'Event-driven solutions with Cloud Functions, Pub/Sub and Cloud Storage.',
          'Refactoring of systems and queries, delivering over 60% efficiency gains and lower operational costs.',
          'Automation with Selenium and Pipefy, Machine Learning integration and OutSystems applications.',
        ],
        technologies: ['Python', 'GCP', 'BigQuery', 'GraphQL', 'Cloud Functions', 'Pub/Sub', 'Selenium', 'Pipefy', 'Machine Learning', 'OutSystems'],
      },
      {
        title: 'Network Infrastructure Analyst',
        company: 'Accenture',
        period: 'Feb 2021 – Dec 2023',
        description: [
          'GPON, copper, VoIP, VPN and network configuration for residential and corporate environments.',
          'Nokia, FiberHome, Huawei, Calix and Zhone equipment.',
          'Internal automation tools with Python, Django, MySQL, Docker and Selenium.',
          'Automated ~80% of manual tasks and cut the team\'s average handling time by ~50%.',
        ],
        technologies: ['GPON', 'VoIP', 'Python', 'Django', 'MySQL', 'Docker', 'Selenium'],
      },
      {
        title: 'Freelance Full Stack Developer',
        company: 'Workana',
        period: 'Jan 2020 – Jan 2021',
        description: ['Sales-focused websites and integrations with e-commerce platforms.', 'APIs to automate processes for small businesses.', 'Programming classes.'],
        technologies: ['JavaScript', 'Python', 'REST APIs', 'E-commerce'],
      },
      {
        title: 'Full Stack Software Developer',
        company: 'Sankhya',
        period: 'Aug 2018 – Jan 2020',
        description: [
          'Internal tools and automations to optimize manual processes.',
          'Java, Spring Boot, Angular, MySQL and AJAX, plus prototyping and documentation.',
          'Solutions that reduced workflow execution time by ~50%.',
        ],
        technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'AJAX'],
      },
    ],
  },

  skills: {
    eyebrow: 'Stack',
    title: 'Technical skills',
    groups: [
      { title: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'PHP', 'C#', 'C', 'C++', 'SQL'] },
      { title: 'Backend', items: ['Flask', 'Django', 'NestJS', 'Node.js', 'Spring Boot', 'REST', 'GraphQL', 'Webhooks', 'JWT'] },
      { title: 'Architecture', items: ['Distributed systems', 'Event-driven', 'Transactional Outbox', 'Idempotency', 'DDD', 'Microservices', 'Clean Architecture', 'SOLID'] },
      { title: 'AI & Agents', items: ['Claude Code', 'Skills and subagents', 'MCP (Model Context Protocol)', 'Context engineering', 'Model routing', 'Claude API', 'Human-in-the-loop', 'Tokens and context window'] },
      { title: 'Data & ML', items: ['Machine Learning', 'BigQuery', 'Pandas', 'ETL with Python', 'Scoring & ranking', 'OCR'] },
      { title: 'Databases & Messaging', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'AWS SQS', 'Google Pub/Sub', 'SQL tuning'] },
      { title: 'Cloud & DevOps', items: ['GCP', 'AWS (SQS, LocalStack)', 'Docker', 'GitHub Actions', 'CI/CD', 'Kubernetes', 'Render', 'Supabase', 'Prometheus'] },
      { title: 'Security', items: ['OAuth 2.0', 'JWT', 'CSRF', 'scrypt hashing', 'Row Level Security', 'Secrets management', 'Least privilege'] },
      { title: 'Frontend & Mobile', items: ['React', 'Angular', 'Flutter', 'Tailwind CSS', 'Vite', 'PWA'] },
      { title: 'Automation & Testing', items: ['Selenium', 'Playwright', 'Pipefy', 'pytest', 'Integration tests', 'Concurrency tests'] },
      { title: 'Leadership & Management', items: ['Tech Lead', 'Code review', 'Architecture decisions', 'Scrum and agile', 'Risk management', 'Team mentoring'] },
    ],
  },

  about: {
    eyebrow: 'Who I am',
    title: 'About me',
    paragraphs: [
      'I\'m Ilton Batista, a software engineer and Information Systems student at the Federal University of Uberlândia (UFU). I started out automating processes and today I build backends, integrations and distributed systems, always thinking about what happens when something fails.',
      'I believe programming goes beyond code: it connects people, ideas and processes. That\'s why I enjoy bringing AI and automation to real problems, with care for security and for the people who use them.',
    ],
    educationTitle: 'Education',
    education: [
      { degree: 'B.Sc. in Information Systems', place: 'UFU', period: '2023 – Present' },
      { degree: 'English (Intermediate)', place: 'CCA/IFP', period: '2024 – Present' },
      { degree: 'Software Development Program', place: 'UberHub Code Club', period: '2018 – 2019' },
      { degree: 'Electromechanics Technician', place: 'SENAI', period: '2018 – 2019' },
    ],
    certificationsTitle: 'Certifications',
    certifications:
      '130+ courses and certifications in Backend, Cloud, Databases, Python, Docker, APIs, Agile and CI/CD.',
    certificationsList: ['NASA Space Apps Challenge 2025 and 2026', 'Python for Machine Learning (DIO)', 'ETL Fundamentals with Python (DIO)', 'Data Analysis with Pandas (DIO)', 'Database Experience (DIO)', 'Process Automation with Pipefy', 'DevFest Cerrado (GDG Brasília)', 'Frontend Marathon (Kenzie)'],
    languagesTitle: 'Languages',
    languages: ['Portuguese (native)', 'English (intermediate)'],
    goalsTitle: 'Next steps',
    goals: ['Multi-agent orchestration and skills in production', 'Cloud and DevOps certifications', 'Software architecture at scale', 'Contribute to open source projects'],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Let\'s build something together?',
    subtitle: 'I\'m open to backend, platform and AI roles, remote or hybrid. I reply quickly.',
    email: 'Send email',
    copy: 'Copy email',
    copied: 'Email copied!',
    cv: 'Download resume',
  },

  footer: {
    rights: 'All rights reserved.',
    built: 'Built with React, TypeScript and Tailwind CSS.',
    backToTop: 'Back to top',
  },
};
