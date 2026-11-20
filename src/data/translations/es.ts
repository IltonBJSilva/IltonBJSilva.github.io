import type { Translation } from '../../types';

export const es: Translation = {
  meta: {
    title: 'Ilton Batista | Ingeniero de Software',
    description:
      'Desarrollador de Software enfocado en backend, sistemas distribuidos, cloud, DevOps, seguridad y agentes de IA con LLMs.',
  },

  nav: {
    about: 'Sobre mí',
    focus: 'Áreas',
    ai: 'IA',
    projects: 'Proyectos',
    competitions: 'Competencias',
    experience: 'Experiencia',
    skills: 'Habilidades',
    contact: 'Contacto',
    menu: 'Abrir menú',
    theme: 'Cambiar tema',
    language: 'Idioma',
  },

  hero: {
    eyebrow: 'Desarrollador de Software · Backend & IA',
    role: 'Construyo sistemas que siguen siendo correctos cuando todo sale mal.',
    tagline: 'Backend · Sistemas distribuidos · DevOps · Seguridad · IA con LLMs',
    description:
      'Entrego APIs, integraciones y automatizaciones en producción, desde Accenture hasta clientes reales. Me gustan los problemas de concurrencia, consistencia de datos y fallos, y uso agentes de IA a diario con contexto bien definido y un humano en control.',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV',
    available: 'Abierto a nuevas oportunidades',
    location: 'Uberlândia, Brasil · Remoto',
  },

  stats: [
    { value: '2x', label: 'participaciones en NASA Space Apps' },
    { value: '60%+', label: 'de ganancia de eficiencia en consultas refactorizadas' },
    { value: '~80%', label: 'de tareas manuales automatizadas' },
    { value: '130+', label: 'cursos y certificaciones' },
  ],

  focus: {
    eyebrow: 'Lo que hago',
    title: 'Áreas de actuación',
    subtitle: 'Cada área tiene evidencia concreta: proyectos en GitHub o resultados en empresas.',
    seeIn: 'Ver en',
    areas: {
      architecture: {
        title: 'Arquitectura y Sistemas Distribuidos',
        description: 'Sistemas que siguen siendo correctos ante concurrencia, fallos y reentregas.',
        points: [
          'Transactional Outbox, Inbox, reintentos y DLQ con colas (AWS SQS)',
          'Idempotencia persistente y bloqueos pesimistas por fila',
          'DDD, monolito modular y documentación estilo C4',
          'Arquitectura orientada a eventos con Pub/Sub y Cloud Functions',
        ],
      },
      ai: {
        title: 'IA, Agentes y LLMs',
        description: 'Agentes y LLMs usados con método: contexto, herramientas, verificación y un humano en control.',
        points: ['Agentes de código a diario (Claude Code) con skills, subagentes y servidores MCP', 'Ingeniería de contexto: guías para agentes con fuente de verdad y reglas inviolables', 'Enrutamiento de modelos por costo, latencia y complejidad de la tarea', 'Asistente con Claude: memoria de conversación, generación de planes y reglas + LLM'],
      },
      data: {
        title: 'Datos y Machine Learning',
        description: 'Datos a escala y modelos de puntuación medidos contra la realidad.',
        points: [
          'BigQuery para grandes volúmenes y pipelines analíticos',
          'Puntuación de relevancia calibrada con historial real y feedback de precisión',
          'Búsqueda textual ordenada por proximidad geográfica (Haversine)',
          'Análisis de datos con Python y Pandas',
        ],
      },
      security: {
        title: 'Seguridad de Aplicaciones',
        description: 'La seguridad como parte del diseño, no como etapa final.',
        points: [
          'Hash scrypt, bloqueo por intentos, CSRF y cabeceras de seguridad',
          'Row Level Security en Postgres y secretos fuera del repositorio',
          'OAuth 2.0 con alcances mínimos y principio de mínimo privilegio',
          'Diseño fail-safe: ante la duda, la operación se deniega',
        ],
      },
      devops: {
        title: 'DevOps y Cloud',
        description: 'Del commit a producción sin pasos manuales y con visibilidad.',
        points: [
          'CI/CD con GitHub Actions y deploy automático en cada push',
          'Docker, Docker Compose y LocalStack para emular AWS',
          'Observabilidad: Prometheus, health checks, logs estructurados',
          'GCP (Cloud Functions, Pub/Sub, Storage), Render y Supabase',
        ],
      },
      automation: {
        title: 'Automatización e Integraciones',
        description: 'El trabajo repetitivo se vuelve código y sistemas distintos empiezan a conversar.',
        points: [
          '~80% de las tareas manuales de un equipo automatizadas',
          'Selenium, Playwright y bots asíncronos en Telegram',
          'Pipefy (GraphQL), Google Calendar, Gmail, Notion y WhatsApp',
          'Programación serverless con costo cero de infraestructura',
        ],
      },
    },
  },

  ai: {
    eyebrow: 'IA aplicada',
    title: 'Agentes de IA con método',
    subtitle: 'Cómo uso agentes y LLMs para entregar software confiable, y lo que comparto sobre ello.',
    workflowTitle: 'Mi flujo con agentes',
    steps: [
      {
        title: 'Contexto',
        description: 'Antes de cualquier código, el agente recibe la especificación como fuente de verdad, el orden de lectura y las reglas que nunca se pueden romper.',
        evidence: 'AI_CONTEXT.md · Distributed Wagering Processor',
      },
      {
        title: 'Modelo correcto',
        description: 'Modelo grande para razonamiento complejo; modelos menores para resumir, clasificar y extraer. Menos costo y latencia.',
        evidence: 'Serie sobre LLMs en LinkedIn',
      },
      {
        title: 'Skills y herramientas',
        description: 'Skills especializadas, subagentes para tareas en paralelo y servidores MCP para navegador, repositorios y servicios.',
        evidence: 'Claude Code a diario',
      },
      {
        title: 'Verificación',
        description: 'Nada se acepta sin prueba: tests, CI y revisión. Escribir código se volvió barato; revisarlo sigue siendo caro.',
        evidence: '73 pruebas en CI · pruebas de concurrencia',
      },
      {
        title: 'Humano en control',
        description: 'La IA sugiere, la persona decide. Cada conclusión cita el dato que la generó y nada se ejecuta sin aprobación.',
        evidence: 'El Arquitecto · Shadow System',
      },
    ],
    contentTitle: 'Contenido sobre IA e ingeniería',
    contentSubtitle: 'Publico videos y posts cortos en LinkedIn explicando IA e ingeniería de software sin complicaciones.',
    followers: '2,3 mil seguidores',
    viewPosts: 'Ver publicaciones',
    topics: [
      {
        tag: 'IA y LLMs',
        title: 'Tokens, contexto y costo',
        description: 'Qué es un token, por qué el portugués gasta más tokens que el inglés y cómo la ventana de contexto afecta tareas largas.',
      },
      {
        tag: 'IA y LLMs',
        title: 'El modelo correcto para cada tarea',
        description: 'Por qué usar siempre el modelo más caro rara vez compensa, y cómo elegir por complejidad.',
      },
      {
        tag: 'Seguridad',
        title: 'Del parche al ataque en 5 días',
        description: 'Análisis de fallas críticas de PHP y por qué actualizar dependencias no puede esperar.',
      },
      {
        tag: 'Open source',
        title: 'IA y el costo de la revisión',
        description: 'Lo que muestra la investigación de la Linux Foundation sobre pull requests generados por IA.',
      },
      {
        tag: 'Guía Tech',
        title: 'Tecnología en 10 partes',
        description: 'Backend, frontend y lenguajes explicados con la analogía de un restaurante.',
      },
      {
        tag: 'Fundamentos',
        title: 'La matemática detrás del código',
        description: 'Inducción y recursión, el Problema de la Parada y por qué 40 pruebas pasando no prueban nada.',
      },
    ],
  },

  projects: {
    eyebrow: 'Portafolio',
    title: 'Proyectos destacados',
    subtitle: 'Proyectos reales, con pruebas, CI y decisiones de arquitectura documentadas.',
    all: 'Todos',
    featured: 'Destacado',
    code: 'Código',
    demo: 'Ver en línea',
    private: 'Código privado (cliente)',
    archiveTitle: 'Otros proyectos',
    archiveSubtitle: 'Proyectos anteriores y de estudio.',
    viewAll: 'Ver todos los repositorios',
    areaLabels: {
      architecture: 'Arquitectura',
      ai: 'IA y LLMs',
      data: 'Datos y ML',
      security: 'Seguridad',
      devops: 'DevOps',
      automation: 'Automatización',
    },
  },

  competitions: {
    eyebrow: 'Hackathons',
    title: 'Competencias',
    subtitle: 'Proyectos construidos en 48 horas, en equipo, en el hackathon más grande del mundo.',
    myPart: 'Mi contribución',
    challenge: 'Desafío',
    team: 'Equipo',
    certificate: 'Certificado',
    certificateAlt: 'Certificado de participación del NASA Space Apps Challenge',
    links: {
      play: 'Jugar en el navegador',
      video: 'Video del pitch',
      code: 'Código',
      official: 'Página oficial',
      demo: 'Ver en línea',
    },
  },

  experience: {
    eyebrow: 'Trayectoria',
    title: 'Experiencia profesional',
    current: 'Actual',
    items: [
      {
        title: 'Gestión de Proyectos',
        company: 'ASCII Empresa Júnior (FACOM/UFU)',
        period: 'Abr 2026 – Actual',
        current: true,
        description: ['Coordinación y seguimiento de los proyectos de software de la empresa, apoyando a los Tech Leads.', 'Prácticas ágiles: ceremonias, alineamientos y seguimiento de plazos y entregas.', 'Gestión de riesgos, impedimentos y dependencias, y comunicación entre equipos técnicos y dirección.'],
        technologies: ['Gestión de proyectos', 'Scrum', 'Gestión de riesgos', 'Liderazgo'],
      },
      {
        title: 'Líder Técnico (Tech Lead)',
        company: 'ASCII Empresa Júnior (FACOM/UFU)',
        period: 'Oct 2025 – Actual',
        current: true,
        description: ['Liderazgo técnico de un equipo de desarrollo, de la planificación a la entrega.', 'Definición y revisión de arquitectura, estándares de desarrollo y decisiones técnicas.', 'Code review, corrección de bugs, refactorización y mantenimiento de la calidad de la aplicación.', 'Desarrollo del equipo compartiendo conocimiento y dando soporte técnico.'],
        technologies: ['Arquitectura', 'Code review', 'Liderazgo técnico', 'Git'],
      },
      {
        title: 'Desarrollador de Software Full Stack',
        company: 'ASCII Empresa Júnior (FACOM/UFU)',
        period: 'Oct 2024 – Actual',
        current: true,
        description: [
          'Soluciones web y móviles para clientes reales, trabajando en frontend, backend, bases de datos e infraestructura.',
          'Aplicaciones con Flutter, React.js, Node.js y JavaScript.',
          'Implementación y optimización de bases de datos relacionales, con foco en rendimiento y mantenimiento.',
          'Control de versiones, soporte de infraestructura y desarrollo colaborativo.',
        ],
        technologies: ['Flutter', 'React.js', 'Node.js', 'JavaScript', 'SQL', 'Git'],
      },
      {
        title: 'Ingeniero de Software Freelance',
        company: 'Workana',
        period: 'Ene 2026 – Abr 2026',
        description: [
          'Desarrollo y modernización de un CRM corporativo con Node.js, TypeScript y PostgreSQL.',
          'Arquitectura backend, modelado de datos y modernización de la aplicación.',
          'Estructuración de pipelines de CI/CD y entornos en la nube.',
        ],
        technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'CI/CD', 'Cloud'],
      },
      {
        title: 'Ingeniero de Software',
        company: 'Accenture',
        period: 'Dic 2023 – Ene 2026',
        description: [
          'APIs backend y servicios escalables con Python y Google Cloud Platform.',
          'BigQuery para consultar y procesar grandes volúmenes de datos, apoyando pipelines analíticos e informes de negocio.',
          'Soluciones GraphQL para optimizar la comunicación entre clientes y servicios backend.',
          'Soluciones orientadas a eventos con Cloud Functions, Pub/Sub y Cloud Storage.',
          'Refactorización de sistemas y consultas con más del 60% de ganancia de eficiencia y menores costos operativos.',
          'Automatización con Selenium y Pipefy, integración de Machine Learning y aplicaciones OutSystems.',
        ],
        technologies: ['Python', 'GCP', 'BigQuery', 'GraphQL', 'Cloud Functions', 'Pub/Sub', 'Selenium', 'Pipefy', 'Machine Learning', 'OutSystems'],
      },
      {
        title: 'Analista de Infraestructura de Redes',
        company: 'Accenture',
        period: 'Feb 2021 – Dic 2023',
        description: [
          'Redes GPON, metálicas, VoIP, VPNs y configuración de red para entornos residenciales y corporativos.',
          'Equipos Nokia, FiberHome, Huawei, Calix y Zhone.',
          'Herramientas internas de automatización con Python, Django, MySQL, Docker y Selenium.',
          'Automatización de ~80% de las tareas manuales y reducción de ~50% en el tiempo medio de atención del equipo.',
        ],
        technologies: ['Redes GPON', 'VoIP', 'Python', 'Django', 'MySQL', 'Docker', 'Selenium'],
      },
      {
        title: 'Desarrollador Full Stack Freelance',
        company: 'Workana',
        period: 'Ene 2020 – Ene 2021',
        description: ['Sitios orientados a ventas e integraciones con plataformas de e-commerce.', 'APIs para automatizar procesos de pequeños negocios.', 'Clases de programación.'],
        technologies: ['JavaScript', 'Python', 'APIs REST', 'E-commerce'],
      },
      {
        title: 'Desarrollador de Software Full Stack',
        company: 'Sankhya',
        period: 'Ago 2018 – Ene 2020',
        description: [
          'Herramientas internas y automatizaciones para optimizar procesos manuales.',
          'Java, Spring Boot, Angular, MySQL y AJAX, además de prototipado y documentación.',
          'Soluciones que redujeron en ~50% el tiempo de ejecución de flujos de trabajo.',
        ],
        technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'AJAX'],
      },
    ],
  },

  skills: {
    eyebrow: 'Stack',
    title: 'Habilidades técnicas',
    groups: [
      { title: 'Lenguajes', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'PHP', 'C#', 'C', 'C++', 'SQL'] },
      { title: 'Backend', items: ['Flask', 'Django', 'NestJS', 'Node.js', 'Spring Boot', 'REST', 'GraphQL', 'Webhooks', 'JWT'] },
      { title: 'Arquitectura', items: ['Sistemas distribuidos', 'Orientada a eventos', 'Transactional Outbox', 'Idempotencia', 'DDD', 'Microservicios', 'Clean Architecture', 'SOLID'] },
      { title: 'IA y Agentes', items: ['Claude Code', 'Skills y subagentes', 'MCP (Model Context Protocol)', 'Ingeniería de contexto', 'Enrutamiento de modelos', 'Claude API', 'Human-in-the-loop', 'Tokens y ventana de contexto'] },
      { title: 'Datos y ML', items: ['Machine Learning', 'BigQuery', 'Pandas', 'ETL con Python', 'Scoring y ranking', 'OCR'] },
      { title: 'Bases de datos y Mensajería', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'AWS SQS', 'Google Pub/Sub', 'Optimización SQL'] },
      { title: 'Cloud y DevOps', items: ['GCP', 'AWS (SQS, LocalStack)', 'Docker', 'GitHub Actions', 'CI/CD', 'Kubernetes', 'Render', 'Supabase', 'Prometheus'] },
      { title: 'Seguridad', items: ['OAuth 2.0', 'JWT', 'CSRF', 'Hash scrypt', 'Row Level Security', 'Gestión de secretos', 'Mínimo privilegio'] },
      { title: 'Frontend y Mobile', items: ['React', 'Angular', 'Flutter', 'Tailwind CSS', 'Vite', 'PWA'] },
      { title: 'Automatización y Pruebas', items: ['Selenium', 'Playwright', 'Pipefy', 'pytest', 'Pruebas de integración', 'Pruebas de concurrencia'] },
      { title: 'Liderazgo y Gestión', items: ['Tech Lead', 'Code review', 'Decisiones de arquitectura', 'Scrum y prácticas ágiles', 'Gestión de riesgos', 'Mentoría de equipo'] },
    ],
  },

  about: {
    eyebrow: 'Quién soy',
    title: 'Sobre mí',
    paragraphs: [
      'Soy Ilton Batista, ingeniero de software y estudiante de Sistemas de Información en la Universidad Federal de Uberlândia (UFU). Empecé automatizando procesos y hoy construyo backends, integraciones y sistemas distribuidos, siempre pensando en qué pasa cuando algo falla.',
      'Creo que programar va más allá del código: conecta personas, ideas y procesos. Por eso me gusta llevar la IA y la automatización a problemas reales, cuidando la seguridad y a quienes las usan.',
    ],
    educationTitle: 'Formación',
    education: [
      { degree: 'Licenciatura en Sistemas de Información', place: 'UFU', period: '2023 – Actual' },
      { degree: 'Inglés (Intermedio)', place: 'CCA/IFP', period: '2024 – Actual' },
      { degree: 'Formación en Desarrollo de Software', place: 'UberHub Code Club', period: '2018 – 2019' },
      { degree: 'Técnico en Electromecánica', place: 'SENAI', period: '2018 – 2019' },
    ],
    certificationsTitle: 'Certificaciones',
    certifications:
      'Más de 130 cursos y certificaciones en Backend, Cloud, Bases de Datos, Python, Docker, APIs, Metodologías Ágiles y CI/CD.',
    certificationsList: ['NASA Space Apps Challenge 2025 y 2026', 'Python para Machine Learning (DIO)', 'Fundamentos de ETL con Python (DIO)', 'Análisis de Datos con Pandas (DIO)', 'Database Experience (DIO)', 'Automatización de Procesos con Pipefy', 'DevFest Cerrado (GDG Brasília)', 'Maratón Frontend (Kenzie)'],
    languagesTitle: 'Idiomas',
    languages: ['Portugués (nativo)', 'Inglés (intermedio)'],
    goalsTitle: 'Próximos pasos',
    goals: ['Orquestación multiagente y skills en producción', 'Certificaciones en cloud y DevOps', 'Arquitectura de software a escala', 'Contribuir a proyectos open source'],
  },

  contact: {
    eyebrow: 'Contacto',
    title: '¿Construimos algo juntos?',
    subtitle: 'Estoy abierto a oportunidades en backend, plataforma e IA, remotas o híbridas. Respondo rápido.',
    email: 'Enviar correo',
    copy: 'Copiar correo',
    copied: '¡Correo copiado!',
    cv: 'Descargar CV',
  },

  footer: {
    rights: 'Todos los derechos reservados.',
    built: 'Hecho con React, TypeScript y Tailwind CSS.',
    backToTop: 'Volver arriba',
  },
};
