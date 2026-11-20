import type { ArchiveProject, Project } from '../types';

const GH = 'https://github.com/IltonBJSilva';

/**
 * Projetos em destaque. Todo o conteúdo foi extraído dos READMEs e do código
 * dos repositórios: ao atualizar um projeto, atualize aqui também.
 */
export const projects: Project[] = [
  {
    id: 'wagering',
    title: 'Distributed Wagering Processor',
    year: 2026,
    featured: true,
    areas: ['architecture', 'devops'],
    stack: ['TypeScript', 'NestJS', 'Bun', 'PostgreSQL', 'MikroORM', 'AWS SQS', 'LocalStack', 'Docker', 'Prometheus'],
    repo: `${GH}/distributed-wagering-processor`,
    context: {
      pt: 'Desafio técnico · 100/100 pontos',
      en: 'Technical challenge · 100/100 points',
      es: 'Desafío técnico · 100/100 puntos',
    },
    summary: {
      pt: 'Processador financeiro distribuído para transações de apostas de vários provedores, projetado para continuar correto sob concorrência, falhas e reentregas de mensagens.',
      en: 'Distributed financial processor for wagering transactions from multiple providers, designed to stay correct under concurrency, failures and message redelivery.',
      es: 'Procesador financiero distribuido para transacciones de apuestas de múltiples proveedores, diseñado para mantenerse correcto ante concurrencia, fallos y reentregas de mensajes.',
    },
    highlights: {
      pt: [
        'Lock pessimista por carteira (row-level) em vez de locks globais: o saldo nunca fica negativo',
        'Inbox + Transactional Outbox com AWS SQS, retry para falhas transitórias e DLQ para falhas de domínio',
        'Ledger imutável com reconciliação de saldo e idempotência persistente no banco',
        'Observabilidade: métricas Prometheus (outbox lag, latência, retries), liveness e readiness',
      ],
      en: [
        'Per-wallet pessimistic row-level locking instead of global locks: balance never goes negative',
        'Inbox + Transactional Outbox on AWS SQS, retries for transient failures and DLQ for domain failures',
        'Immutable ledger with balance reconciliation and persistent, database-backed idempotency',
        'Observability: Prometheus metrics (outbox lag, latency, retries), liveness and readiness probes',
      ],
      es: [
        'Bloqueo pesimista por billetera (row-level) en lugar de bloqueos globales: el saldo nunca queda negativo',
        'Inbox + Transactional Outbox con AWS SQS, reintentos para fallos transitorios y DLQ para fallos de dominio',
        'Ledger inmutable con conciliación de saldo e idempotencia persistente en la base de datos',
        'Observabilidad: métricas Prometheus (outbox lag, latencia, reintentos), liveness y readiness',
      ],
    },
    metrics: [
      { value: '3', label: { pt: 'suítes: unit, integração e concorrência', en: 'suites: unit, integration, concurrency', es: 'suites: unit, integración y concurrencia' } },
      { value: 'C4', label: { pt: 'arquitetura documentada', en: 'documented architecture', es: 'arquitectura documentada' } },
    ],
  },
  {
    id: 'shadow',
    title: 'Shadow System',
    year: 2026,
    featured: true,
    areas: ['ai', 'security', 'devops'],
    stack: ['Python 3.12', 'Flask 3', 'SQLAlchemy 2', 'PostgreSQL', 'Supabase', 'Claude API', 'OAuth 2.0', 'PWA', 'Render', 'GitHub Actions', 'pytest'],
    repo: `${GH}/shadow-system`,
    context: {
      pt: 'Produto pessoal em produção',
      en: 'Personal product in production',
      es: 'Producto personal en producción',
    },
    summary: {
      pt: 'Sistema de gestão de vida gamificado (missões, XP, hábitos, metas) com um mentor de IA, "o Arquiteto", que lê os dados reais do usuário e monta planos com o Claude.',
      en: 'Gamified life-management system (quests, XP, habits, goals) with an AI mentor, "the Architect", that reads the user\'s real data and builds plans with Claude.',
      es: 'Sistema de gestión de vida gamificado (misiones, XP, hábitos, metas) con un mentor de IA, "el Arquitecto", que lee los datos reales del usuario y arma planes con Claude.',
    },
    highlights: {
      pt: [
        'IA híbrida: motor de regras determinístico (offline, sem custo) + modo LLM opcional com memória de conversa e geração de planos de 7 dias',
        'Humano no controle: a IA só sugere, nada vira missão sem aceite, e toda conclusão cita o dado que a gerou',
        'Segurança: hash scrypt, bloqueio após 5 tentativas, CSRF, cabeçalhos de segurança, RLS no Supabase e chaves só no servidor',
        'Integrações via OAuth 2.0 com escopo mínimo (Google Calendar, Gmail somente leitura), Notion e WhatsApp Cloud API',
      ],
      en: [
        'Hybrid AI: deterministic rules engine (offline, zero cost) + optional LLM mode with conversation memory and 7-day plan generation',
        'Human in the loop: the AI only suggests, nothing becomes a quest without approval, and every conclusion cites its source data',
        'Security: scrypt hashing, lockout after 5 attempts, CSRF, security headers, Supabase RLS and server-only API keys',
        'Least-privilege OAuth 2.0 integrations (Google Calendar, read-only Gmail), Notion and WhatsApp Cloud API',
      ],
      es: [
        'IA híbrida: motor de reglas determinista (offline, sin costo) + modo LLM opcional con memoria de conversación y planes de 7 días',
        'Humano en control: la IA solo sugiere, nada se vuelve misión sin aprobación y cada conclusión cita el dato que la generó',
        'Seguridad: hash scrypt, bloqueo tras 5 intentos, CSRF, cabeceras de seguridad, RLS en Supabase y claves solo en el servidor',
        'Integraciones OAuth 2.0 con alcance mínimo (Google Calendar, Gmail solo lectura), Notion y WhatsApp Cloud API',
      ],
    },
    metrics: [
      { value: '380+', label: { pt: 'arquivos, monólito modular', en: 'files, modular monolith', es: 'archivos, monolito modular' } },
      { value: 'CI/CD', label: { pt: 'deploy a cada push', en: 'deploy on every push', es: 'deploy en cada push' } },
    ],
  },
  {
    id: 'jobradar',
    title: 'JobRadar',
    year: 2026,
    areas: ['data', 'automation', 'devops'],
    stack: ['Python 3.11', 'Playwright', 'SQLite', 'GitHub Actions', 'Telegram Bot API', 'pytest'],
    repo: `${GH}/job-radar`,
    summary: {
      pt: 'Monitor automatizado de vagas que varre 8 fontes a cada 3 horas, filtra, pontua por relevância e notifica no Telegram, sem servidor próprio e com custo zero.',
      en: 'Automated job monitor that scans 8 sources every 3 hours, filters, scores by relevance and notifies on Telegram, with no server and zero infrastructure cost.',
      es: 'Monitor automatizado de vacantes que recorre 8 fuentes cada 3 horas, filtra, puntúa por relevancia y notifica en Telegram, sin servidor propio y con costo cero.',
    },
    highlights: {
      pt: [
        'Score de 0 a 10 com pesos calibrados contra histórico real e feedback 👍/👎 para medir a precisão',
        'Filtro semântico em 3 níveis: nenhuma vaga é aprovada por palavra-chave solta',
        'Serverless: GitHub Actions como cron e SQLite versionado no próprio repositório',
        'Resiliência: alerta se 50% das fontes falharem e heartbeat diário',
      ],
      en: [
        '0–10 relevance score with weights calibrated on real history and 👍/👎 feedback to measure precision',
        'Three-level semantic filter: no job is approved by a loose keyword match',
        'Serverless: GitHub Actions as cron and SQLite versioned in the repository itself',
        'Resilience: alerts when 50% of sources fail, plus a daily heartbeat',
      ],
      es: [
        'Puntuación de 0 a 10 con pesos calibrados sobre historial real y feedback 👍/👎 para medir la precisión',
        'Filtro semántico en 3 niveles: ninguna vacante se aprueba por una palabra clave suelta',
        'Serverless: GitHub Actions como cron y SQLite versionado en el propio repositorio',
        'Resiliencia: alerta si el 50% de las fuentes falla y heartbeat diario',
      ],
    },
    metrics: [
      { value: '1.052', label: { pt: 'vagas processadas', en: 'jobs processed', es: 'vacantes procesadas' } },
      { value: '73', label: { pt: 'testes no CI', en: 'tests in CI', es: 'pruebas en CI' } },
      { value: 'R$ 0', label: { pt: 'de infraestrutura', en: 'infrastructure cost', es: 'de infraestructura' } },
    ],
  },
  {
    id: 'transfer',
    title: 'Sistema de Transferência Financeira',
    year: 2026,
    areas: ['architecture', 'security'],
    stack: ['Python', 'Flask 3', 'SQLAlchemy', 'pytest', 'GitHub Actions'],
    repo: `${GH}/sistema_de_transferencia_financeira`,
    summary: {
      pt: 'API REST de transferências entre usuários e lojistas, focada nos problemas reais de um backoffice financeiro, com painel web que consome a própria API.',
      en: 'REST API for transfers between users and merchants, focused on the real concerns of a financial back office, with a web dashboard that consumes the API itself.',
      es: 'API REST de transferencias entre usuarios y comercios, enfocada en los problemas reales de un backoffice financiero, con panel web que consume la propia API.',
    },
    highlights: {
      pt: [
        'Valores em centavos (inteiros) e transação atômica com rollback',
        'Header Idempotency-Key impede transferências duplicadas em retentativas',
        'Fail-safe: autorizador externo indisponível = transferência negada',
        'Notificação best-effort que não desfaz uma transferência concluída',
      ],
      en: [
        'Amounts stored as integer cents and atomic transactions with rollback',
        'Idempotency-Key header prevents duplicate transfers on network retries',
        'Fail-safe: unavailable external authorizer means the transfer is denied',
        'Best-effort notification that never undoes a completed transfer',
      ],
      es: [
        'Montos en centavos (enteros) y transacción atómica con rollback',
        'El header Idempotency-Key evita transferencias duplicadas en reintentos',
        'Fail-safe: autorizador externo no disponible = transferencia denegada',
        'Notificación best-effort que no deshace una transferencia completada',
      ],
    },
  },
  {
    id: 'pccleaner',
    title: 'PCCleaner',
    year: 2026,
    areas: ['security', 'automation'],
    stack: ['Python', 'PySide6', 'PyInstaller', 'pytest'],
    repo: `${GH}/pccleaner`,
    summary: {
      pt: 'Limpador de disco para Windows com foco em segurança: explica por que cada item foi encontrado e só remove o que o usuário marcar.',
      en: 'Safety-first disk cleaner for Windows: explains why each item was found and only removes what the user selects.',
      es: 'Limpiador de disco para Windows centrado en la seguridad: explica por qué se encontró cada elemento y solo elimina lo que el usuario marca.',
    },
    highlights: {
      pt: [
        'Menor privilégio: não pede elevação ao iniciar, só quando o usuário escolhe',
        'Quarentena restaurável e níveis de segurança por item',
        'Análise em tempo real, cancelável, com detecção de duplicados (sempre mantém uma cópia)',
        'Histórico exportável em HTML, JSON e CSV e build empacotado com PyInstaller',
      ],
      en: [
        'Least privilege: no elevation at startup, only when the user opts in',
        'Restorable quarantine and per-item safety levels',
        'Real-time, cancellable scan with duplicate detection (always keeps one copy)',
        'History export to HTML, JSON and CSV, packaged build with PyInstaller',
      ],
      es: [
        'Mínimo privilegio: no pide elevación al iniciar, solo cuando el usuario lo elige',
        'Cuarentena restaurable y niveles de seguridad por elemento',
        'Análisis en tiempo real, cancelable, con detección de duplicados (siempre conserva una copia)',
        'Historial exportable a HTML, JSON y CSV, build empaquetado con PyInstaller',
      ],
    },
  },
  {
    id: 'telegram-ingest',
    title: 'Ingestão de Mídia via Telegram',
    year: 2026,
    areas: ['automation', 'devops'],
    stack: ['Python', 'asyncio', 'aiogram', 'aiosqlite', 'Docker', 'Telegram Local Bot API'],
    repo: `${GH}/bottelegram_download`,
    context: {
      pt: 'Usado em eventos ao vivo',
      en: 'Used at live events',
      es: 'Usado en eventos en vivo',
    },
    summary: {
      pt: 'Bot assíncrono que recebe fotos e vídeos de cinegrafistas pelo Telegram, baixa para um servidor local e organiza tudo em pastas.',
      en: 'Async bot that receives photos and videos from camera operators via Telegram, downloads them to a local server and organizes everything into folders.',
      es: 'Bot asíncrono que recibe fotos y videos de camarógrafos por Telegram, los descarga a un servidor local y organiza todo en carpetas.',
    },
    highlights: {
      pt: [
        'Retomada automática após queda de energia: a fila é reconstruída a partir do banco no boot',
        'Servidor local da Bot API para arquivos de até 2 GB (o limite padrão é 20 MB)',
        'Empacotado em Docker para rodar em PCs de evento sem configuração técnica',
      ],
      en: [
        'Automatic resume after power loss: the queue is rebuilt from the database on boot',
        'Local Bot API server for files up to 2 GB (default limit is 20 MB)',
        'Packaged with Docker to run on event PCs without technical setup',
      ],
      es: [
        'Reanudación automática tras un corte de energía: la cola se reconstruye desde la base al iniciar',
        'Servidor local de la Bot API para archivos de hasta 2 GB (el límite estándar es 20 MB)',
        'Empaquetado en Docker para correr en PCs de eventos sin configuración técnica',
      ],
    },
  },
  {
    id: 'doc-search',
    title: 'Microsserviço de Busca de Documentos',
    year: 2025,
    areas: ['data', 'architecture'],
    stack: ['Python', 'Flask', 'SQLAlchemy', 'Marshmallow', 'pytest'],
    repo: `${GH}/desafio-python-busca-dados`,
    context: {
      pt: 'Desafio técnico',
      en: 'Technical challenge',
      es: 'Desafío técnico',
    },
    summary: {
      pt: 'Microsserviço para cadastrar e buscar documentos por palavra-chave ou expressão, com ordenação por proximidade geográfica.',
      en: 'Microservice to store and search documents by keyword or phrase, with results ranked by geographic proximity.',
      es: 'Microservicio para registrar y buscar documentos por palabra clave o expresión, con orden por proximidad geográfica.',
    },
    highlights: {
      pt: [
        'Ordenação por distância com a fórmula de Haversine',
        'Busca por expressões com múltiplos termos obrigatórios',
        'Validação com Marshmallow e testes contra SQL injection',
      ],
      en: [
        'Distance ranking using the Haversine formula',
        'Phrase search with multiple required terms',
        'Marshmallow validation and SQL injection tests',
      ],
      es: [
        'Orden por distancia con la fórmula de Haversine',
        'Búsqueda por expresiones con múltiples términos obligatorios',
        'Validación con Marshmallow y pruebas contra SQL injection',
      ],
    },
  },
  {
    id: 'pipefy',
    title: 'Integração Pipefy (GraphQL)',
    year: 2026,
    areas: ['automation'],
    stack: ['Python', 'Flask', 'GraphQL', 'Pipefy API'],
    repo: `${GH}/profectum-pipefy-integration`,
    context: {
      pt: 'Case técnico',
      en: 'Technical case',
      es: 'Caso técnico',
    },
    summary: {
      pt: 'API REST que encapsula mutations GraphQL do Pipefy para criar, mover e remover cards de um fluxo de cadastro.',
      en: 'REST API wrapping Pipefy GraphQL mutations to create, move and delete cards in an onboarding workflow.',
      es: 'API REST que encapsula mutations GraphQL de Pipefy para crear, mover y eliminar tarjetas de un flujo de registro.',
    },
    highlights: {
      pt: [
        'Interface REST simples sobre automações GraphQL complexas',
        'Detecção da fase final com notificação especial na resposta',
        'Credenciais isoladas em variáveis de ambiente',
      ],
      en: [
        'Simple REST interface on top of complex GraphQL automations',
        'Final-phase detection with a special notification in the response',
        'Credentials isolated in environment variables',
      ],
      es: [
        'Interfaz REST simple sobre automatizaciones GraphQL complejas',
        'Detección de la fase final con notificación especial en la respuesta',
        'Credenciales aisladas en variables de entorno',
      ],
    },
  },
];

/** Projetos mais antigos ou menores, exibidos numa lista compacta. */
export const archive: ArchiveProject[] = [
  {
    title: 'Libook',
    repo: `${GH}/book_schedule`,
    stack: ['Django', 'Allauth', 'Bootstrap'],
    summary: {
      pt: 'CRUD de livros com autenticação e avaliações.',
      en: 'Book CRUD with authentication and reviews.',
      es: 'CRUD de libros con autenticación y reseñas.',
    },
  },
  {
    title: 'ADO.TE',
    repo: `${GH}/adote`,
    demo: 'https://adote-plum.vercel.app',
    stack: ['Django', 'SQLite'],
    summary: {
      pt: 'Plataforma de adoção de pets com filtros e pedidos de adoção.',
      en: 'Pet adoption platform with filters and adoption requests.',
      es: 'Plataforma de adopción de mascotas con filtros y solicitudes.',
    },
  },
  {
    title: 'Dev Burguer',
    repo: `${GH}/devburguer`,
    stack: ['Django', 'JavaScript'],
    summary: {
      pt: 'Gestão de produtos e pedidos para hamburgueria, com foco em DRY.',
      en: 'Product and order management for a burger shop, focused on DRY.',
      es: 'Gestión de productos y pedidos para hamburguesería, con foco en DRY.',
    },
  },
];
