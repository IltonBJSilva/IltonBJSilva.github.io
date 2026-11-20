import type { Translation } from '../../types';

export const pt: Translation = {
  meta: {
    title: 'Ilton Batista | Engenheiro de Software',
    description:
      'Engenheiro de Software e Tech Lead com foco em backend, sistemas distribuídos, cloud, DevOps, segurança e agentes de IA com LLMs.',
  },

  nav: {
    about: 'Sobre',
    focus: 'Atuação',
    ai: 'IA',
    projects: 'Projetos',
    competitions: 'Competições',
    experience: 'Experiência',
    skills: 'Habilidades',
    contact: 'Contato',
    menu: 'Abrir menu',
    theme: 'Alternar tema',
    language: 'Idioma',
  },

  hero: {
    eyebrow: 'Engenheiro de Software · Tech Lead · Backend & IA',
    role: 'Construo sistemas que continuam corretos quando tudo dá errado.',
    tagline: 'Backend · Sistemas distribuídos · DevOps · Segurança · IA com LLMs',
    description:
      'Mais de 6 anos entregando APIs, integrações e automações em produção, da Accenture a clientes reais. Hoje lidero tecnicamente uma equipe na ASCII (UFU) e trabalho com agentes de IA no dia a dia: contexto bem definido, ferramentas certas e humano no controle.',
    ctaProjects: 'Ver projetos',
    ctaCv: 'Baixar currículo',
    available: 'Aberto a novas oportunidades',
    location: 'Uberlândia, MG · Remoto',
  },

  stats: [
    { value: '6+', label: 'anos de experiência profissional' },
    { value: '60%+', label: 'de ganho de eficiência em consultas refatoradas' },
    { value: '~80%', label: 'de tarefas manuais automatizadas' },
    { value: '130+', label: 'cursos e certificações' },
  ],

  focus: {
    eyebrow: 'O que eu faço',
    title: 'Áreas de atuação',
    subtitle: 'Cada área tem evidência concreta: projetos no GitHub ou resultados em empresas.',
    seeIn: 'Veja em',
    areas: {
      architecture: {
        title: 'Arquitetura & Sistemas Distribuídos',
        description: 'Sistemas que continuam corretos sob concorrência, falhas e reentregas.',
        points: [
          'Transactional Outbox, Inbox, retry e DLQ com filas (AWS SQS)',
          'Idempotência persistente e locks pessimistas por linha',
          'DDD, monólito modular e documentação no estilo C4',
          'Arquitetura orientada a eventos com Pub/Sub e Cloud Functions',
        ],
      },
      ai: {
        title: 'IA, Agentes & LLMs',
        description: 'Agentes e LLMs usados com método: contexto, ferramentas, verificação e humano no controle.',
        points: ['Agentes de código no dia a dia (Claude Code) com skills, subagentes e servidores MCP', 'Engenharia de contexto: guias para agentes com fonte da verdade e regras invioláveis', 'Roteamento de modelos por custo, latência e complexidade da tarefa', 'Assistente com o Claude: memória de conversa, geração de planos e regras + LLM'],
      },
      data: {
        title: 'Dados & Machine Learning',
        description: 'Dados em escala e modelos de pontuação medidos contra a realidade.',
        points: [
          'BigQuery para grandes volumes e pipelines analíticos',
          'Score de relevância calibrado com histórico real e feedback de precisão',
          'Busca textual com ordenação geográfica (Haversine)',
          'Análise de dados com Python e Pandas',
        ],
      },
      security: {
        title: 'Segurança de Aplicações',
        description: 'Segurança como parte do design, não como etapa final.',
        points: [
          'Hash scrypt, bloqueio por tentativas, CSRF e cabeçalhos de segurança',
          'Row Level Security no Postgres e segredos fora do repositório',
          'OAuth 2.0 com escopos mínimos e princípio do menor privilégio',
          'Desenho fail-safe: na dúvida, a operação é negada',
        ],
      },
      devops: {
        title: 'DevOps & Cloud',
        description: 'Do commit à produção sem passos manuais, com visibilidade.',
        points: [
          'CI/CD com GitHub Actions e deploy automático a cada push',
          'Docker, Docker Compose e LocalStack para emular AWS',
          'Observabilidade: Prometheus, health checks, logs estruturados',
          'GCP (Cloud Functions, Pub/Sub, Storage), Render e Supabase',
        ],
      },
      automation: {
        title: 'Automação & Integrações',
        description: 'Trabalho repetitivo vira código, e sistemas diferentes passam a conversar.',
        points: [
          '~80% das tarefas manuais de uma equipe automatizadas',
          'Selenium, Playwright e bots assíncronos no Telegram',
          'Pipefy (GraphQL), Google Calendar, Gmail, Notion e WhatsApp',
          'Agendamentos serverless com custo zero de infraestrutura',
        ],
      },
    },
  },

  ai: {
    eyebrow: 'IA aplicada',
    title: 'Agentes de IA com método',
    subtitle: 'Como eu uso agentes e LLMs para entregar software confiável, e o que eu compartilho sobre isso.',
    workflowTitle: 'Meu fluxo com agentes',
    steps: [
      {
        title: 'Contexto',
        description: 'Antes de qualquer código, o agente recebe a especificação como fonte da verdade, a ordem de leitura e as regras que nunca podem ser quebradas.',
        evidence: 'AI_CONTEXT.md · Distributed Wagering Processor',
      },
      {
        title: 'Modelo certo',
        description: 'Modelo grande para raciocínio complexo; modelos menores para resumir, classificar e extrair. Menos custo e menos latência.',
        evidence: 'Série sobre LLMs no LinkedIn',
      },
      {
        title: 'Skills & ferramentas',
        description: 'Skills especializadas, subagentes para tarefas em paralelo e servidores MCP para navegador, repositórios e serviços.',
        evidence: 'Claude Code no dia a dia',
      },
      {
        title: 'Verificação',
        description: 'Nada é aceito sem prova: testes, CI e revisão. Escrever código ficou barato; revisar continua caro.',
        evidence: '73 testes em CI · testes de concorrência',
      },
      {
        title: 'Humano no controle',
        description: 'A IA sugere, a pessoa decide. Cada conclusão cita o dado que a gerou e nada é executado sem aceite.',
        evidence: 'O Arquiteto · Shadow System',
      },
    ],
    contentTitle: 'Conteúdo sobre IA e engenharia',
    contentSubtitle: 'Publico vídeos e posts curtos no LinkedIn explicando IA e engenharia de software sem complicar.',
    followers: '2,3 mil seguidores',
    viewPosts: 'Ver publicações',
    topics: [
      {
        tag: 'IA & LLMs',
        title: 'Tokens, contexto e custo',
        description: 'O que é um token, por que o português gasta mais tokens que o inglês e como a janela de contexto afeta tarefas longas.',
      },
      {
        tag: 'IA & LLMs',
        title: 'O modelo certo para cada tarefa',
        description: 'Por que usar sempre o modelo mais caro raramente compensa, e como escolher pela complexidade.',
      },
      {
        tag: 'Segurança',
        title: 'Do patch ao ataque em 5 dias',
        description: 'Análise das falhas críticas do PHP e por que atualizar dependências não pode ficar para depois.',
      },
      {
        tag: 'Open source',
        title: 'IA e o custo da revisão',
        description: 'O que a pesquisa da Linux Foundation mostra sobre pull requests gerados por IA.',
      },
      {
        tag: 'Guia Tech',
        title: 'Tecnologia em 10 partes',
        description: 'Backend, frontend e linguagens explicados com a analogia de um restaurante.',
      },
      {
        tag: 'Fundamentos',
        title: 'A matemática por trás do código',
        description: 'Indução e recursão, o Problema da Parada e por que 40 testes passando não provam nada.',
      },
    ],
  },

  projects: {
    eyebrow: 'Portfólio',
    title: 'Projetos em destaque',
    subtitle: 'Projetos reais, com testes, CI e decisões de arquitetura documentadas.',
    all: 'Todos',
    featured: 'Destaque',
    code: 'Código',
    demo: 'Ver online',
    private: 'Código privado (cliente)',
    archiveTitle: 'Outros projetos',
    archiveSubtitle: 'Projetos anteriores e de estudo.',
    viewAll: 'Ver todos os repositórios',
    areaLabels: {
      architecture: 'Arquitetura',
      ai: 'IA & LLMs',
      data: 'Dados & ML',
      security: 'Segurança',
      devops: 'DevOps',
      automation: 'Automação',
    },
  },

  competitions: {
    eyebrow: 'Hackathons',
    title: 'Competições',
    subtitle: 'Projetos construídos em 48 horas, em equipe, no maior hackathon do mundo.',
    myPart: 'Minha contribuição',
    challenge: 'Desafio',
    team: 'Equipe',
    certificate: 'Certificado',
    certificateAlt: 'Certificado de participação do NASA Space Apps Challenge',
    links: {
      play: 'Jogar no navegador',
      video: 'Vídeo do pitch',
      code: 'Código',
      official: 'Página oficial',
      demo: 'Ver online',
    },
  },

  experience: {
    eyebrow: 'Trajetória',
    title: 'Experiência profissional',
    current: 'Atual',
    items: [
      {
        title: 'Gestão de Projetos',
        company: 'ASCII Empresa Júnior (FACOM/UFU)',
        period: 'Abr 2026 – Atual',
        current: true,
        description: ['Coordenação e acompanhamento dos projetos de software da empresa, apoiando a atuação dos Tech Leads.', 'Práticas ágeis: cerimônias, alinhamentos e acompanhamento de prazos e entregas.', 'Gestão de riscos, impedimentos e dependências, e comunicação entre equipes técnicas e diretoria.'],
        technologies: ['Gestão de projetos', 'Scrum', 'Gestão de riscos', 'Liderança'],
      },
      {
        title: 'Líder Técnico (Tech Lead)',
        company: 'ASCII Empresa Júnior (FACOM/UFU)',
        period: 'Out 2025 – Atual',
        current: true,
        description: ['Liderança técnica de uma equipe de desenvolvimento, do planejamento à entrega.', 'Definição e revisão de arquitetura, padrões de desenvolvimento e decisões técnicas.', 'Code review, correção de bugs, refatoração e manutenção da qualidade da aplicação.', 'Desenvolvimento do time com compartilhamento de conhecimento e suporte técnico.'],
        technologies: ['Arquitetura', 'Code review', 'Liderança técnica', 'Git'],
      },
      {
        title: 'Desenvolvedor de Software Full Stack',
        company: 'ASCII Empresa Júnior (FACOM/UFU)',
        period: 'Out 2024 – Atual',
        current: true,
        description: [
          'Desenvolvimento de soluções web e mobile para clientes reais, atuando em frontend, backend, bancos de dados e infraestrutura.',
          'Aplicações com Flutter, React.js, Node.js e JavaScript.',
          'Implementação e otimização de bancos de dados relacionais, com foco em desempenho e manutenção.',
          'Versionamento, suporte à infraestrutura e desenvolvimento colaborativo.',
        ],
        technologies: ['Flutter', 'React.js', 'Node.js', 'JavaScript', 'SQL', 'Git'],
      },
      {
        title: 'Engenheiro de Software Freelancer',
        company: 'Workana',
        period: 'Jan 2026 – Abr 2026',
        description: [
          'Desenvolvimento e modernização de um CRM corporativo com Node.js, TypeScript e PostgreSQL.',
          'Arquitetura backend, modelagem de dados e modernização da aplicação.',
          'Estruturação de pipelines de CI/CD e ambientes em nuvem.',
        ],
        technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'CI/CD', 'Cloud'],
      },
      {
        title: 'Engenheiro de Software',
        company: 'Accenture',
        period: 'Dez 2023 – Jan 2026',
        description: [
          'APIs backend e serviços escaláveis com Python e Google Cloud Platform.',
          'BigQuery para consulta e processamento de grandes volumes de dados, apoiando pipelines analíticos e relatórios de negócio.',
          'Soluções GraphQL para otimizar a comunicação entre clientes e serviços backend.',
          'Soluções orientadas a eventos com Cloud Functions, Pub/Sub e Cloud Storage.',
          'Refatoração de sistemas e consultas com mais de 60% de ganho de eficiência e redução de custos operacionais.',
          'Automação com Selenium e Pipefy, integração de soluções de Machine Learning e aplicações OutSystems.',
        ],
        technologies: ['Python', 'GCP', 'BigQuery', 'GraphQL', 'Cloud Functions', 'Pub/Sub', 'Selenium', 'Pipefy', 'Machine Learning', 'OutSystems'],
      },
      {
        title: 'Analista de Infraestrutura de Redes',
        company: 'Accenture',
        period: 'Fev 2021 – Dez 2023',
        description: [
          'Redes GPON, metálicas, VoIP, VPNs e configurações de rede para ambientes residenciais e corporativos.',
          'Equipamentos Nokia, FiberHome, Huawei, Calix e Zhone.',
          'Ferramentas internas de automação com Python, Django, MySQL, Docker e Selenium.',
          'Automação de ~80% das tarefas manuais e redução de ~50% no tempo médio de atendimento da equipe.',
        ],
        technologies: ['Redes GPON', 'VoIP', 'Python', 'Django', 'MySQL', 'Docker', 'Selenium'],
      },
      {
        title: 'Desenvolvedor Full Stack Freelancer',
        company: 'Workana',
        period: 'Jan 2020 – Jan 2021',
        description: ['Sites voltados para vendas e integrações com plataformas de e-commerce.', 'APIs para automação de processos de pequenos negócios.', 'Aulas de programação.'],
        technologies: ['JavaScript', 'Python', 'APIs REST', 'E-commerce'],
      },
      {
        title: 'Desenvolvedor de Software Full Stack',
        company: 'Sankhya',
        period: 'Ago 2018 – Jan 2020',
        description: [
          'Ferramentas internas e automações para otimizar processos manuais.',
          'Java, Spring Boot, Angular, MySQL e AJAX, além de prototipação e documentação.',
          'Soluções que reduziram em ~50% o tempo de execução de fluxos de trabalho.',
        ],
        technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'AJAX'],
      },
    ],
  },

  skills: {
    eyebrow: 'Stack',
    title: 'Habilidades técnicas',
    groups: [
      { title: 'Linguagens', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'PHP', 'C#', 'C', 'C++', 'SQL'] },
      { title: 'Backend', items: ['Flask', 'Django', 'NestJS', 'Node.js', 'Spring Boot', 'REST', 'GraphQL', 'Webhooks', 'JWT'] },
      { title: 'Arquitetura', items: ['Sistemas distribuídos', 'Orientada a eventos', 'Transactional Outbox', 'Idempotência', 'DDD', 'Microsserviços', 'Clean Architecture', 'SOLID'] },
      { title: 'IA & Agentes', items: ['Claude Code', 'Skills e subagentes', 'MCP (Model Context Protocol)', 'Engenharia de contexto', 'Roteamento de modelos', 'Claude API', 'Human-in-the-loop', 'Tokens e janela de contexto'] },
      { title: 'Dados & ML', items: ['Machine Learning', 'BigQuery', 'Pandas', 'ETL com Python', 'Scoring e ranking', 'OCR'] },
      { title: 'Bancos & Mensageria', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'AWS SQS', 'Google Pub/Sub', 'Otimização SQL'] },
      { title: 'Cloud & DevOps', items: ['GCP', 'AWS (SQS, LocalStack)', 'Docker', 'GitHub Actions', 'CI/CD', 'Kubernetes', 'Render', 'Supabase', 'Prometheus'] },
      { title: 'Segurança', items: ['OAuth 2.0', 'JWT', 'CSRF', 'Hash scrypt', 'Row Level Security', 'Gestão de segredos', 'Menor privilégio'] },
      { title: 'Frontend & Mobile', items: ['React', 'Angular', 'Flutter', 'Tailwind CSS', 'Vite', 'PWA'] },
      { title: 'Automação & Testes', items: ['Selenium', 'Playwright', 'Pipefy', 'pytest', 'Testes de integração', 'Testes de concorrência'] },
      { title: 'Liderança & Gestão', items: ['Tech Lead', 'Code review', 'Decisões de arquitetura', 'Scrum e práticas ágeis', 'Gestão de riscos', 'Mentoria de equipe'] },
    ],
  },

  about: {
    eyebrow: 'Quem sou',
    title: 'Sobre mim',
    paragraphs: [
      'Sou Ilton Batista, engenheiro de software e estudante de Sistemas de Informação na UFU. Comecei automatizando processos e hoje construo backends, integrações e sistemas distribuídos, sempre olhando para o que acontece quando algo falha.',
      'Acredito que programar vai além do código: é conectar pessoas, ideias e processos. Por isso gosto tanto de levar IA e automação para problemas reais, com cuidado com segurança e com quem usa.',
    ],
    educationTitle: 'Formação',
    education: [
      { degree: 'Bacharelado em Sistemas de Informação', place: 'UFU', period: '2023 – Atual' },
      { degree: 'Inglês (Intermediário)', place: 'CCA/IFP', period: '2024 – Atual' },
      { degree: 'Formação em Desenvolvimento de Software', place: 'UberHub Code Club', period: '2018 – 2019' },
      { degree: 'Técnico em Eletromecânica', place: 'SENAI', period: '2018 – 2019' },
    ],
    certificationsTitle: 'Certificações',
    certifications:
      'Mais de 130 cursos e certificações em Backend, Cloud, Bancos de Dados, Python, Docker, APIs, Metodologias Ágeis e CI/CD.',
    certificationsList: ['NASA Space Apps Challenge 2025 e 2026', 'Python para Machine Learning (DIO)', 'Fundamentos de ETL com Python (DIO)', 'Análise de Dados com Pandas (DIO)', 'Database Experience (DIO)', 'Automação de Processos com Pipefy', 'DevFest Cerrado (GDG Brasília)', 'Maratona Frontend (Kenzie)'],
    languagesTitle: 'Idiomas',
    languages: ['Português (nativo)', 'Inglês (intermediário)'],
    goalsTitle: 'Próximos passos',
    goals: ['Orquestração multiagente e skills em produção', 'Certificações em cloud e DevOps', 'Arquitetura de software em escala', 'Contribuir com projetos open source'],
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Vamos construir algo juntos?',
    subtitle: 'Estou aberto a oportunidades em backend, plataforma e IA, remotas ou híbridas. Respondo rápido.',
    email: 'Enviar e-mail',
    copy: 'Copiar e-mail',
    copied: 'E-mail copiado!',
    cv: 'Baixar currículo',
  },

  footer: {
    rights: 'Todos os direitos reservados.',
    built: 'Feito com React, TypeScript e Tailwind CSS.',
    backToTop: 'Voltar ao topo',
  },
};
