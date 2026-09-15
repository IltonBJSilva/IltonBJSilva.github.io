import { Experience, NavItem, Project, SocialLink } from "../types";
import { Github, Linkedin, Youtube, MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export const navItems: NavItem[] = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Experiências", href: "#experiences" },
  { label: "Projetos", href: "#projects" },
  { label: "Objetivos", href: "#objectives" },
  { label: "Habilidades Técnicas", href: "#extra" },
];

export const socialLinks: SocialLink[] = [
  { 
    platform: "GitHub", 
    url: "https://github.com/IltonBJSilva", 
    icon: "Github" 
  },
  { 
    platform: "LinkedIn", 
    url: "https://www.linkedin.com/in/iltonbsilva/", 
    icon: "Linkedin" 
  },
  { 
    platform: "Portfólio", 
    url: "https://github.com/IltonBJSilva/IltonBJSilva.github.io", 
    icon: "ExternalLink" 
  },
];

export const contactInfo = [
  { 
    icon: "Phone", 
    text: "(34) 99670-8213" 
  },
  { 
    icon: "Mail", 
    text: "iltonbatista2018@gmail.com" 
  },
];

export const experiences: Experience[] = [
  {
    title: "Desenvolvedor de Software Full Stack",
    company: "ASCII Empresa Júnior (FACOM/UFU)",
    period: "Outubro 2024 – Atual",
    description: [
      "Desenvolvimento de soluções web e mobile para clientes reais, atuando no desenvolvimento frontend, backend, bancos de dados e infraestrutura das aplicações.",
      "Desenvolvimento de aplicações utilizando Flutter, React.js, Node.js e JavaScript.",
      "Implementação e otimização de bancos de dados relacionais, com foco em desempenho e facilidade de manutenção.",
      "Desenvolvimento de interfaces modernas utilizando HTML e CSS, com atenção à experiência e usabilidade do usuário.",
      "Utilização de práticas de versionamento, suporte à infraestrutura e desenvolvimento colaborativo de software."
    ],
    technologies: ["Flutter", "React.js", "Node.js", "JavaScript", "HTML", "CSS", "SQL", "Git"]
  },
  {
    title: "Engenheiro de Software Freelancer",
    company: "Workana",
    period: "Janeiro 2026 – Abril 2026",
    description: [
      "Desenvolvimento e modernização de um CRM corporativo utilizando Node.js, TypeScript e PostgreSQL.",
      "Atuação na arquitetura backend, modelagem de dados e modernização da aplicação.",
      "Estruturação de pipelines de CI/CD e ambientes em nuvem para melhorar os processos de desenvolvimento e implantação."
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "CI/CD", "Cloud"]
  },
  {
    title: "Engenheiro de Software",
    company: "Accenture",
    period: "Dezembro 2023 – Janeiro 2026",
    description: [
      "Desenvolvimento e manutenção de APIs backend e serviços escaláveis utilizando Python e Google Cloud Platform.",
      "Integração com BigQuery para consulta e processamento de grandes volumes de dados, apoiando pipelines analíticos e relatórios de negócio.",
      "Implementação de soluções GraphQL para otimizar a comunicação entre aplicações cliente e serviços backend.",
      "Desenvolvimento de soluções orientadas a eventos utilizando Cloud Functions, Pub/Sub e Cloud Storage.",
      "Automação de processos repetitivos utilizando Selenium e Pipefy, aumentando a eficiência operacional.",
      "Refatoração de sistemas e consultas de banco de dados, proporcionando mais de 60% de ganho de eficiência e redução de custos operacionais.",
      "Integração de soluções de Machine Learning e desenvolvimento de aplicações utilizando OutSystems em ambientes corporativos."
    ],
    technologies: ["Python", "GCP", "BigQuery", "GraphQL", "Cloud Functions", "Pub/Sub", "Cloud Storage", "Selenium", "Pipefy", "Machine Learning", "OutSystems"]
  },
  {
    title: "Analista de Infraestrutura de Redes",
    company: "Accenture",
    period: "Fevereiro 2021 – Dezembro 2023",
    description: [
      "Atuação com redes GPON, redes metálicas, infraestrutura VoIP, ativação de internet, telefonia fixa, VPNs e configurações de rede.",
      "Suporte a ambientes residenciais e corporativos, incluindo configurações de IP fixo e troubleshooting.",
      "Atuação com tecnologias e equipamentos Nokia, FiberHome, Huawei, Calix e Zhone.",
      "Desenvolvimento de ferramentas internas de automação utilizando Python, Django, MySQL, Docker e Selenium.",
      "Automação de aproximadamente 80% das tarefas manuais e contribuição para uma redução de aproximadamente 50% no tempo médio de atendimento da equipe."
    ],
    technologies: ["Redes GPON", "VoIP", "Python", "Django", "MySQL", "Docker", "Selenium"]
  },
  {
    title: "Desenvolvedor de Software Full Stack",
    company: "Sankhya",
    period: "Agosto 2018 – Janeiro 2020",
    description: [
      "Desenvolvimento de ferramentas internas e soluções de automação para otimizar processos manuais.",
      "Desenvolvimento utilizando Java, Java Web, Spring Boot, Angular, MySQL e AJAX, além de prototipação e documentação de projetos.",
      "Contribuição para soluções que reduziram em aproximadamente 50% o tempo de execução de fluxos de trabalho."
    ],
    technologies: ["Java", "Spring Boot", "Angular", "MySQL", "AJAX"]
  }
];

export const projects: Project[] = [
  {
    title: "Assistente Virtual Tina com Comandos de Voz",
    description: "Assistente virtual feita em Python com reconhecimento de voz, respostas faladas, execução de comandos, integração com Wikipedia, YouTube e criação de lista de tarefas.",
    technologies: ["Python", "SpeechRecognition", "pyttsx3", "pywhatkit", "Wikipedia", "PyAudio"],
    category: "Backend",
    url: "https://github.com/IltonBJSilva/alexa_with_python"
  },
  {
    title: "API Flask com integração ao Pipefy",
    description: "Servidor Flask que faz requisição GraphQL à API do Pipefy e retorna os títulos dos cards de uma fase específica.",
    technologies: ["Python", "Flask", "GraphQL", "Pipefy API"],
    category: "Backend",
    url: "https://github.com/IltonBJSilva/pipefy-api"
  },
  {
    title: "Sistema Bancário em Python",
    description: "Projeto educacional com operações básicas de conta bancária: depósito, saque e extrato, com salvamento de transações em arquivo.",
    technologies: ["Python", "Programação Orientada a Objetos", "Arquivos"],
    category: "Backend",
    url: "https://github.com/IltonBJSilva/system_bank"
  },
  {
    title: "Projeto de Desenvolvimento Backend com Python e Flask",
    description: "Backend para aplicação web, com autenticação JWT, gestão de usuários, e recursos RESTful, utilizando Flask, SQLAlchemy e JWT.",
    technologies: ["Python", "Flask", "SQLAlchemy", "JWT", "PostgreSQL/MySQL"],
    category: "Backend",
    url: "https://github.com/IltonBJSilva/FlaskSecureAPI"  
  },

  {
    title: "Dev Burguer",
    description: "Projeto de aplicação full-stack utilizando Django, com foco no princípio DRY (Don't Repeat Yourself). A aplicação permite praticar boas práticas de desenvolvimento, criando um sistema de gerenciamento de produtos e pedidos para uma hamburgueria.",
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    category: "Frontend",
    url: "https://github.com/IltonBJSilva/devburguer"
  },
  {
    title: "Loja de Roupas Online (Frontend)",
    description: "Site de loja de roupas desenvolvido com HTML, CSS e JavaScript, incluindo páginas como Home, Produtos, Detalhes, Entrega, Sobre e Contato, com foco em usabilidade e responsividade.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    url: "https://github.com/IltonBJSilva/loja_de_roupas"
  },
  {
    title: "Sistema ADO.TE",
    description: "Django + SQLite, login, cadastro de pets, filtro e requisição de adoção",
    technologies: ["Django", "SQLite", "Python", "HTML", "CSS", "JavaScript"],
    category: "Fullstack",
    url: "https://github.com/IltonBJSilva/adote"
  },
  {
    title: "Libook – CRUD de Livros",
    description: "Projeto Django com login, cadastro de usuários e CRUD completo de livros usando Allauth, Bootstrap e SQLite.",
    technologies: ["Django", "Python", "HTML", "CSS", "Bootstrap", "SQLite", "Allauth"],
    category: "Fullstack",
    url: "https://github.com/IltonBJSilva/book_schedule"
  },
  {
    title: "Nutrilab – Plataforma de Plano Alimentar",
    description: "Aplicação Django para gerenciamento de planos alimentares com autenticação e CRUD de opções alimentares.",
    technologies: ["Django", "Python", "SQLite", "HTML", "CSS"],
    category: "Fullstack",
    url: "https://github.com/IltonBJSilva/nutrilab"
  },
];


export const objectives = [
  "Alcançar proficiência avançada em arquitetura de software",
  "Contribuir regularmente com projetos open source",
  "Obter certificações relevantes em nuvem e DevOps",
  "Assumir posição de liderança técnica (Tech Lead)",
  "Desenvolver e lançar um produto digital próprio (app, SaaS, lib)",
  "Trabalhar com equipes internacionais em projetos globais",
  "Publicar conteúdo técnico em blog ou canal no YouTube",
  "Participar e palestrar em eventos da área de tecnologia",
  "Especializar-se em uma área de alta demanda (IA, dados, mobile etc.)",
  "Aplicar tecnologia em projetos com impacto social ou sustentável"
];


export const extraItems = [
  "Linguagens: Python, TypeScript, JavaScript, Java, C#, C, C++",
  "Backend: Django, Node.js, APIs REST, GraphQL, Webhooks, JWT, Processamento Assíncrono",
  "Arquitetura: Microsserviços, Orientada a Eventos, Arquitetura Limpa, SOLID, DRY, KISS",
  "Bancos de Dados: PostgreSQL, MySQL, BigQuery, Redis, Modelagem Relacional, Otimização SQL",
  "Cloud e DevOps: GCP, Cloud Functions, Pub/Sub, Cloud Storage, Docker, CI/CD, Kubernetes",
  "Frontend e Mobile: React, Angular, Flutter, HTML5, CSS3, TailwindCSS",
  "Automação e IA: Selenium, Automação de Processos, Machine Learning, OCR, Extração de Dados",
  "Ferramentas: Git, GitHub, GitLab, Pipefy, Vercel, Render, Cloudflare R2",
  "Testes: pytest, unittest, Testes Unitários, de Integração e Funcionais"
];