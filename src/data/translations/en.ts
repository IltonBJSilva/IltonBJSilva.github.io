import { Experience, NavItem, Project, SocialLink } from "../../types";

export const en = {
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experiences", href: "#experiences" },
    { label: "Projects", href: "#projects" },
    { label: "Objectives", href: "#objectives" },
    { label: "Technical Skills", href: "#extra" },
  ] as NavItem[],

  socialLinks: [
    { platform: "GitHub", url: "https://github.com/IltonBJSilva", icon: "Github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/iltonbsilva/", icon: "Linkedin" },
    { platform: "Portfolio", url: "https://github.com/IltonBJSilva/IltonBJSilva.github.io", icon: "ExternalLink" },
  ] as SocialLink[],

  contactInfo: [
    { icon: "Phone", text: "+55 34 99670-8213" },
    { icon: "Mail", text: "iltonbatista2018@gmail.com" },
  ],

  home: {
    title: "Ilton Batista",
    subtitle: "Software Engineer",
    quote: "\"Transforming complex ideas into efficient solutions with purpose, technique, and soul.\"",
    description: "I am a Backend developer with experience in Python, Google Cloud Platform (GCP), BigQuery, Pipefy, automations, and integrations with scalable APIs. My goal is to transform technical challenges into intelligent, efficient, and sustainable solutions. I believe that technology, when applied well, has the power to generate real, positive impact on people's lives and business processes.",
    readMore: "Learn more",
    downloadCV: "Download CV",
  },

  about: {
    title: "About",
    quote: "\"I am Ilton Batista, a software engineer who seeks to unite science and technology to develop solutions that generate real impact. I believe programming goes beyond code: it's connecting people, ideas, and transforming the future.\"",
    academic: {
      title: "🎓 Academic Background",
      items: [
        "<strong>Bachelor in Information Systems</strong><br />UFU (Jan 2023 - Present)",
        "<strong>English Course (Intermediate)</strong><br />CCA/IFP (2024 - Present)",
        "<strong>Software Development Training</strong><br />UberHub Code Club (2018 - 2019)",
        "<strong>Electromechanics Technician</strong><br />SENAI (2018 - 2019)"
      ]
    },
    market: {
      title: "💼 Market & Certifications",
      items: [
        "Strong market presence, solving real business problems with technology, automation, and system integration.",
        "Experience in transforming business needs into scalable solutions, focusing on performance and clean code.",
        "<strong>Certifications:</strong> Over 130 courses and certifications in Software Development, Backend, Cloud, Databases, Web Technologies, Python, Docker, APIs, Agile Methodologies, and CI/CD.",
        "Continuous interest in improving in Artificial Intelligence, going beyond the code."
      ]
    }
  },

  experiencesSection: {
    title: "Professional Experience",
  },

  experiences: [
    {
      title: "Full Stack Software Developer",
      company: "ASCII Empresa Júnior (FACOM/UFU)",
      period: "October 2024 – Present",
      description: [
        "Development of web and mobile solutions for real clients, working on frontend, backend, databases, and application infrastructure.",
        "Development of applications using Flutter, React.js, Node.js, and JavaScript.",
        "Implementation and optimization of relational databases, focusing on performance and ease of maintenance.",
        "Development of modern interfaces using HTML and CSS, with attention to user experience and usability.",
        "Use of versioning practices, infrastructure support, and collaborative software development."
      ],
      technologies: ["Flutter", "React.js", "Node.js", "JavaScript", "HTML", "CSS", "SQL", "Git"]
    },
    {
      title: "Freelance Software Engineer",
      company: "Workana",
      period: "January 2026 – April 2026",
      description: [
        "Development and modernization of a corporate CRM using Node.js, TypeScript, and PostgreSQL.",
        "Worked on backend architecture, data modeling, and application modernization.",
        "Structuring of CI/CD pipelines and cloud environments to improve development and deployment processes."
      ],
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "CI/CD", "Cloud"]
    },
    {
      title: "Software Engineer",
      company: "Accenture",
      period: "December 2023 – January 2026",
      description: [
        "Development and maintenance of backend APIs and scalable services using Python and Google Cloud Platform.",
        "Integration with BigQuery for querying and processing large volumes of data, supporting analytical pipelines and business reports.",
        "Implementation of GraphQL solutions to optimize communication between client applications and backend services.",
        "Development of event-driven solutions using Cloud Functions, Pub/Sub, and Cloud Storage.",
        "Automation of repetitive processes using Selenium and Pipefy, increasing operational efficiency.",
        "Refactoring of systems and database queries, providing over 60% efficiency gains and reducing operational costs.",
        "Integration of Machine Learning solutions and development of applications using OutSystems in corporate environments."
      ],
      technologies: ["Python", "GCP", "BigQuery", "GraphQL", "Cloud Functions", "Pub/Sub", "Cloud Storage", "Selenium", "Pipefy", "Machine Learning", "OutSystems"]
    },
    {
      title: "Network Infrastructure Analyst",
      company: "Accenture",
      period: "February 2021 – December 2023",
      description: [
        "Worked with GPON networks, metallic networks, VoIP infrastructure, internet activation, fixed telephony, VPNs, and network configurations.",
        "Support for residential and corporate environments, including fixed IP configurations and troubleshooting.",
        "Worked with Nokia, FiberHome, Huawei, Calix, and Zhone technologies and equipment.",
        "Development of internal automation tools using Python, Django, MySQL, Docker, and Selenium.",
        "Automation of approximately 80% of manual tasks and contribution to a reduction of approximately 50% in the team's average service time."
      ],
      technologies: ["GPON Networks", "VoIP", "Python", "Django", "MySQL", "Docker", "Selenium"]
    },
    {
      title: "Full Stack Software Developer",
      company: "Sankhya",
      period: "August 2018 – January 2020",
      description: [
        "Development of internal tools and automation solutions to optimize manual processes.",
        "Development using Java, Java Web, Spring Boot, Angular, MySQL, and AJAX, as well as prototyping and project documentation.",
        "Contribution to solutions that reduced workflow execution time by approximately 50%."
      ],
      technologies: ["Java", "Spring Boot", "Angular", "MySQL", "AJAX"]
    }
  ] as Experience[],

  projectsSection: {
    title: "Featured Projects",
    viewCode: "View code",
  },

  projects: [
    {
      title: "Virtual Assistant Tina with Voice Commands",
      description: "Virtual assistant built in Python with voice recognition, spoken responses, command execution, integration with Wikipedia, YouTube, and task list creation.",
      technologies: ["Python", "SpeechRecognition", "pyttsx3", "pywhatkit", "Wikipedia", "PyAudio"],
      category: "Backend",
      url: "https://github.com/IltonBJSilva/alexa_with_python"
    },
    {
      title: "Flask API integrated with Pipefy",
      description: "Flask server that makes GraphQL requests to the Pipefy API and returns the titles of cards in a specific phase.",
      technologies: ["Python", "Flask", "GraphQL", "Pipefy API"],
      category: "Backend",
      url: "https://github.com/IltonBJSilva/pipefy-api"
    },
    {
      title: "Banking System in Python",
      description: "Educational project with basic bank account operations: deposit, withdrawal, and statement, saving transactions to a file.",
      technologies: ["Python", "Object-Oriented Programming", "Files"],
      category: "Backend",
      url: "https://github.com/IltonBJSilva/system_bank"
    },
    {
      title: "Backend Development Project with Python and Flask",
      description: "Backend for web application, with JWT authentication, user management, and RESTful resources, using Flask, SQLAlchemy, and JWT.",
      technologies: ["Python", "Flask", "SQLAlchemy", "JWT", "PostgreSQL/MySQL"],
      category: "Backend",
      url: "https://github.com/IltonBJSilva/FlaskSecureAPI"  
    },
    {
      title: "Dev Burguer",
      description: "Full-stack application project using Django, focusing on the DRY (Don't Repeat Yourself) principle. The application allows practicing good development practices by creating a product and order management system for a burger shop.",
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
      category: "Frontend",
      url: "https://github.com/IltonBJSilva/devburguer"
    },
    {
      title: "Online Clothing Store (Frontend)",
      description: "Clothing store website developed with HTML, CSS, and JavaScript, including pages like Home, Products, Details, Delivery, About, and Contact, focusing on usability and responsiveness.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      url: "https://github.com/IltonBJSilva/loja_de_roupas"
    },
    {
      title: "ADO.TE System",
      description: "Django + SQLite, login, pet registration, filtering, and adoption requests",
      technologies: ["Django", "SQLite", "Python", "HTML", "CSS", "JavaScript"],
      category: "Fullstack",
      url: "https://github.com/IltonBJSilva/adote"
    },
    {
      title: "Libook – Book CRUD",
      description: "Django project with login, user registration, and full book CRUD using Allauth, Bootstrap, and SQLite.",
      technologies: ["Django", "Python", "HTML", "CSS", "Bootstrap", "SQLite", "Allauth"],
      category: "Fullstack",
      url: "https://github.com/IltonBJSilva/book_schedule"
    },
    {
      title: "Nutrilab – Meal Plan Platform",
      description: "Django application for managing meal plans with authentication and CRUD of food options.",
      technologies: ["Django", "Python", "SQLite", "HTML", "CSS"],
      category: "Fullstack",
      url: "https://github.com/IltonBJSilva/nutrilab"
    }
  ] as Project[],

  objectivesSection: {
    title: "Objectives"
  },

  objectives: [
    "Achieve advanced proficiency in software architecture",
    "Contribute regularly to open source projects",
    "Obtain relevant certifications in cloud and DevOps",
    "Assume a technical leadership position (Tech Lead)",
    "Develop and launch a personal digital product (app, SaaS, lib)",
    "Work with international teams on global projects",
    "Publish technical content on a blog or YouTube channel",
    "Participate and speak at technology events",
    "Specialize in a high-demand area (AI, data, mobile, etc.)",
    "Apply technology in projects with social or sustainable impact"
  ],

  extraSection: {
    title: "Technical Skills"
  },

  extraItems: [
    "Languages: Python, TypeScript, JavaScript, Java, C#, C, C++",
    "Backend: Django, Node.js, REST APIs, GraphQL, Webhooks, JWT, Asynchronous Processing",
    "Architecture: Microservices, Event-Driven, Clean Architecture, SOLID, DRY, KISS",
    "Databases: PostgreSQL, MySQL, BigQuery, Redis, Relational Modeling, SQL Optimization",
    "Cloud & DevOps: GCP, Cloud Functions, Pub/Sub, Cloud Storage, Docker, CI/CD, Kubernetes",
    "Frontend & Mobile: React, Angular, Flutter, HTML5, CSS3, TailwindCSS",
    "Automation & AI: Selenium, Process Automation, Machine Learning, OCR, Data Extraction",
    "Tools: Git, GitHub, GitLab, Pipefy, Vercel, Render, Cloudflare R2",
    "Testing: pytest, unittest, Unit, Integration, and Functional Testing"
  ],

  footer: {
    title: "Ilton Batista",
    subtitle: "Software Engineer",
    quickLinks: "Quick Links",
    contact: "Contact",
    rights: "© 2026 Ilton Batista. All rights reserved."
  }
};
