import { Experience, NavItem, Project, SocialLink } from "../../types";

export const es = {
  navItems: [
    { label: "Inicio", href: "#home" },
    { label: "Sobre mí", href: "#about" },
    { label: "Experiencia", href: "#experiences" },
    { label: "Proyectos", href: "#projects" },
    { label: "Objetivos", href: "#objectives" },
    { label: "Habilidades Técnicas", href: "#extra" },
  ] as NavItem[],

  socialLinks: [
    { platform: "GitHub", url: "https://github.com/IltonBJSilva", icon: "Github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/iltonbsilva/", icon: "Linkedin" },
    { platform: "Portafolio", url: "https://github.com/IltonBJSilva/IltonBJSilva.github.io", icon: "ExternalLink" },
  ] as SocialLink[],

  contactInfo: [
    { icon: "Phone", text: "+55 34 99670-8213" },
    { icon: "Mail", text: "iltonbatista2018@gmail.com" },
  ],

  home: {
    title: "Ilton Batista",
    subtitle: "Ingeniero de Software",
    quote: "\"Transformando ideas complejas en soluciones eficientes con propósito, técnica y alma.\"",
    description: "Soy desarrollador Backend con experiencia en Python, Google Cloud Platform (GCP), BigQuery, Pipefy, automatizaciones e integraciones con APIs escalables. Mi objetivo es transformar desafíos técnicos en soluciones inteligentes, eficientes y sostenibles. Creo que la tecnología, cuando se aplica bien, tiene el poder de generar un impacto real y positivo en la vida de las personas y en los procesos de negocio.",
    readMore: "Saber más",
    downloadCV: "Descargar CV",
  },

  about: {
    title: "Sobre mí",
    quote: "\"Soy Ilton Batista, ingeniero de software que busca unir ciencia y tecnología para desarrollar soluciones que generen un impacto real. Creo que programar va más allá del código: es conectar personas, ideas y transformar el futuro.\"",
    academic: {
      title: "🎓 Formación Académica",
      items: [
        "<strong>Licenciatura en Sistemas de Información</strong><br />UFU (Ene 2023 - Actual)",
        "<strong>Curso de Inglés (Intermedio)</strong><br />CCA/IFP (2024 - Actual)",
        "<strong>Formación en Desarrollo de Software</strong><br />UberHub Code Club (2018 - 2019)",
        "<strong>Técnico en Electromecánica</strong><br />SENAI (2018 - 2019)"
      ]
    },
    market: {
      title: "💼 Mercado y Certificaciones",
      items: [
        "Fuerte presencia en el mercado, resolviendo problemas reales de negocio con tecnología, automatización e integración de sistemas.",
        "Experiencia en transformar necesidades de negocio en soluciones escalables, centrándose en el rendimiento y código limpio.",
        "<strong>Certificaciones:</strong> Más de 130 cursos y certificaciones en Desarrollo de Software, Backend, Cloud, Bases de Datos, Tecnologías Web, Python, Docker, APIs, Metodologías Ágiles y CI/CD.",
        "Interés continuo en mejorar en Inteligencia Artificial, yendo más allá del código."
      ]
    }
  },

  experiencesSection: {
    title: "Experiencia Profesional",
  },

  experiences: [
    {
      title: "Desarrollador de Software Full Stack",
      company: "ASCII Empresa Júnior (FACOM/UFU)",
      period: "Octubre 2024 – Actual",
      description: [
        "Desarrollo de soluciones web y móviles para clientes reales, trabajando en frontend, backend, bases de datos e infraestructura de aplicaciones.",
        "Desarrollo de aplicaciones utilizando Flutter, React.js, Node.js y JavaScript.",
        "Implementación y optimización de bases de datos relacionales, con enfoque en el rendimiento y la facilidad de mantenimiento.",
        "Desarrollo de interfaces modernas utilizando HTML y CSS, con atención a la experiencia de usuario y usabilidad.",
        "Uso de prácticas de versionado, soporte de infraestructura y desarrollo de software colaborativo."
      ],
      technologies: ["Flutter", "React.js", "Node.js", "JavaScript", "HTML", "CSS", "SQL", "Git"]
    },
    {
      title: "Ingeniero de Software Freelance",
      company: "Workana",
      period: "Enero 2026 – Abril 2026",
      description: [
        "Desarrollo y modernización de un CRM corporativo utilizando Node.js, TypeScript y PostgreSQL.",
        "Participación en la arquitectura del backend, modelado de datos y modernización de la aplicación.",
        "Estructuración de pipelines de CI/CD y entornos en la nube para mejorar los procesos de desarrollo e implementación."
      ],
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "CI/CD", "Cloud"]
    },
    {
      title: "Ingeniero de Software",
      company: "Accenture",
      period: "Diciembre 2023 – Enero 2026",
      description: [
        "Desarrollo y mantenimiento de APIs de backend y servicios escalables utilizando Python y Google Cloud Platform.",
        "Integración con BigQuery para consulta y procesamiento de grandes volúmenes de datos, respaldando pipelines analíticos e informes de negocio.",
        "Implementación de soluciones GraphQL para optimizar la comunicación entre aplicaciones cliente y servicios backend.",
        "Desarrollo de soluciones basadas en eventos utilizando Cloud Functions, Pub/Sub y Cloud Storage.",
        "Automatización de procesos repetitivos utilizando Selenium y Pipefy, aumentando la eficiencia operativa.",
        "Refactorización de sistemas y consultas a bases de datos, proporcionando ganancias de eficiencia de más del 60% y reduciendo costos operativos.",
        "Integración de soluciones de Machine Learning y desarrollo de aplicaciones utilizando OutSystems en entornos corporativos."
      ],
      technologies: ["Python", "GCP", "BigQuery", "GraphQL", "Cloud Functions", "Pub/Sub", "Cloud Storage", "Selenium", "Pipefy", "Machine Learning", "OutSystems"]
    },
    {
      title: "Analista de Infraestructura de Redes",
      company: "Accenture",
      period: "Febrero 2021 – Diciembre 2023",
      description: [
        "Experiencia en redes GPON, redes metálicas, infraestructura VoIP, activación de internet, telefonía fija, VPNs y configuraciones de red.",
        "Soporte para entornos residenciales y corporativos, incluyendo configuraciones de IP fija y resolución de problemas.",
        "Trabajó con tecnologías y equipos Nokia, FiberHome, Huawei, Calix y Zhone.",
        "Desarrollo de herramientas de automatización internas utilizando Python, Django, MySQL, Docker y Selenium.",
        "Automatización de aproximadamente el 80% de las tareas manuales y contribución a una reducción de aproximadamente el 50% en el tiempo promedio de servicio del equipo."
      ],
      technologies: ["Redes GPON", "VoIP", "Python", "Django", "MySQL", "Docker", "Selenium"]
    },
    {
      title: "Desarrollador de Software Full Stack",
      company: "Sankhya",
      period: "Agosto 2018 – Enero 2020",
      description: [
        "Desarrollo de herramientas internas y soluciones de automatización para optimizar procesos manuales.",
        "Desarrollo utilizando Java, Java Web, Spring Boot, Angular, MySQL y AJAX, además de creación de prototipos y documentación de proyectos.",
        "Contribución a soluciones que redujeron el tiempo de ejecución del flujo de trabajo en aproximadamente un 50%."
      ],
      technologies: ["Java", "Spring Boot", "Angular", "MySQL", "AJAX"]
    }
  ] as Experience[],

  projectsSection: {
    title: "Proyectos Destacados",
    viewCode: "Ver código",
  },

  projects: [
    {
      title: "Asistente Virtual Tina con Comandos de Voz",
      description: "Asistente virtual creada en Python con reconocimiento de voz, respuestas habladas, ejecución de comandos, integración con Wikipedia, YouTube y creación de listas de tareas.",
      technologies: ["Python", "SpeechRecognition", "pyttsx3", "pywhatkit", "Wikipedia", "PyAudio"],
      category: "Backend",
      url: "https://github.com/IltonBJSilva/alexa_with_python"
    },
    {
      title: "API de Flask con integración a Pipefy",
      description: "Servidor Flask que realiza solicitudes GraphQL a la API de Pipefy y devuelve los títulos de las tarjetas en una fase específica.",
      technologies: ["Python", "Flask", "GraphQL", "Pipefy API"],
      category: "Backend",
      url: "https://github.com/IltonBJSilva/pipefy-api"
    },
    {
      title: "Sistema Bancario en Python",
      description: "Proyecto educativo con operaciones básicas de cuenta bancaria: depósito, retiro y estado de cuenta, guardando las transacciones en un archivo.",
      technologies: ["Python", "Programación Orientada a Objetos", "Archivos"],
      category: "Backend",
      url: "https://github.com/IltonBJSilva/system_bank"
    },
    {
      title: "Proyecto de Desarrollo Backend con Python y Flask",
      description: "Backend para aplicación web, con autenticación JWT, gestión de usuarios y recursos RESTful, utilizando Flask, SQLAlchemy y JWT.",
      technologies: ["Python", "Flask", "SQLAlchemy", "JWT", "PostgreSQL/MySQL"],
      category: "Backend",
      url: "https://github.com/IltonBJSilva/FlaskSecureAPI"  
    },
    {
      title: "Dev Burguer",
      description: "Proyecto de aplicación full-stack utilizando Django, centrado en el principio DRY (No te repitas). La aplicación permite practicar buenas prácticas de desarrollo mediante la creación de un sistema de gestión de productos y pedidos para una hamburguesería.",
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
      category: "Frontend",
      url: "https://github.com/IltonBJSilva/devburguer"
    },
    {
      title: "Tienda de Ropa Online (Frontend)",
      description: "Sitio web de tienda de ropa desarrollado con HTML, CSS y JavaScript, incluyendo páginas como Inicio, Productos, Detalles, Entrega, Sobre nosotros y Contacto, centrándose en usabilidad y diseño responsivo.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Frontend",
      url: "https://github.com/IltonBJSilva/loja_de_roupas"
    },
    {
      title: "Sistema ADO.TE",
      description: "Django + SQLite, inicio de sesión, registro de mascotas, filtrado y solicitudes de adopción",
      technologies: ["Django", "SQLite", "Python", "HTML", "CSS", "JavaScript"],
      category: "Fullstack",
      url: "https://github.com/IltonBJSilva/adote"
    },
    {
      title: "Libook – CRUD de Libros",
      description: "Proyecto de Django con inicio de sesión, registro de usuarios y CRUD completo de libros usando Allauth, Bootstrap y SQLite.",
      technologies: ["Django", "Python", "HTML", "CSS", "Bootstrap", "SQLite", "Allauth"],
      category: "Fullstack",
      url: "https://github.com/IltonBJSilva/book_schedule"
    },
    {
      title: "Nutrilab – Plataforma de Planes Alimenticios",
      description: "Aplicación de Django para la gestión de planes de alimentación con autenticación y CRUD de opciones de alimentos.",
      technologies: ["Django", "Python", "SQLite", "HTML", "CSS"],
      category: "Fullstack",
      url: "https://github.com/IltonBJSilva/nutrilab"
    }
  ] as Project[],

  objectivesSection: {
    title: "Objetivos"
  },

  objectives: [
    "Alcanzar competencia avanzada en arquitectura de software",
    "Contribuir regularmente a proyectos de código abierto",
    "Obtener certificaciones relevantes en nube y DevOps",
    "Asumir una posición de liderazgo técnico (Tech Lead)",
    "Desarrollar y lanzar un producto digital propio (app, SaaS, lib)",
    "Trabajar con equipos internacionales en proyectos globales",
    "Publicar contenido técnico en un blog o canal de YouTube",
    "Participar y hablar en eventos de tecnología",
    "Especializarse en un área de alta demanda (IA, datos, móvil, etc.)",
    "Aplicar la tecnología en proyectos con impacto social o sostenible"
  ],

  extraSection: {
    title: "Habilidades Técnicas"
  },

  extraItems: [
    "Lenguajes: Python, TypeScript, JavaScript, Java, C#, C, C++",
    "Backend: Django, Node.js, REST APIs, GraphQL, Webhooks, JWT, Procesamiento Asíncrono",
    "Arquitectura: Microservicios, Orientada a Eventos, Arquitectura Limpia, SOLID, DRY, KISS",
    "Bases de Datos: PostgreSQL, MySQL, BigQuery, Redis, Modelado Relacional, Optimización SQL",
    "Cloud y DevOps: GCP, Cloud Functions, Pub/Sub, Cloud Storage, Docker, CI/CD, Kubernetes",
    "Frontend y Móvil: React, Angular, Flutter, HTML5, CSS3, TailwindCSS",
    "Automatización e IA: Selenium, Automatización de Procesos, Machine Learning, OCR, Extracción de Datos",
    "Herramientas: Git, GitHub, GitLab, Pipefy, Vercel, Render, Cloudflare R2",
    "Pruebas: pytest, unittest, Pruebas Unitarias, de Integración y Funcionales"
  ],

  footer: {
    title: "Ilton Batista",
    subtitle: "Ingeniero de Software",
    quickLinks: "Enlaces Rápidos",
    contact: "Contacto",
    rights: "© 2026 Ilton Batista. Todos los derechos reservados."
  }
};
