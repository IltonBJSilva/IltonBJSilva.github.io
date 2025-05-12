import { Experience, NavItem, Project, SocialLink } from "../types";
import { Github, Linkedin, Youtube, MapPin, Phone, Mail, ExternalLink } from "lucide-react";

export const navItems: NavItem[] = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Experiências", href: "#experiences" },
  { label: "Projetos", href: "#projects" },
  { label: "Objetivos", href: "#objectives" },
  { label: "Extra", href: "#extra" },
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
    title: "Engenheiro de Software",
    company: "Accenture",
    period: "Jan/2025 – Atualmente",
    description: [
      "Backend em Python com APIs escaláveis",
      "Integração com BigQuery, Pipefy, Machine Learning e GCP",
      "Uso avançado de Cloud Functions, Pub/Sub e Cloud Storage",
      "Automação com Selenium e decisões baseadas em dados"
    ],
    technologies: ["Python", "GCP", "BigQuery", "Pipefy", "Selenium", "Machine Learning"]
  },
    {
    title: "Software Developer",
    company: "ASCII Empresa Júnior (Facom/UFU)",
    period: "Out/2024 – Atualmente",
    description: [
      "Desenvolvimento Fullstack com Flutter, React.js, Node.js, JS",
      "Criação de interfaces UX/UI com HTML e CSS",
      "Banco de dados relacionais otimizados",
      "Suporte em sistemas operacionais e infraestrutura",
      "Trabalho em equipe com versionamento (Git)"
    ],
    technologies: ["Flutter", "React.js", "Node.js", "JavaScript", "Git"]
  },
  {
    title: "Trainee de Desenvolvimento",
    company: "ASCII Empresa Júnior",
    period: "Ago/2024 a Nov/2024",
    description: [
      "Atuação inicial na equipe de projetos",
      "Aprendizado em Flutter, React, JS, infraestrutura e banco"
    ],
    technologies: ["Flutter", "React", "JavaScript"]
  },
  {
    title: "Software Developer",
    company: "Accenture",
    period: "Dez/2023 a Fev/2025",
    description: [
      "APIs com Python + GCP",
      "Integração com GraphQL",
      "BigQuery para análise de dados",
      "Machine Learning aplicado em sistemas reais",
      "Criação de pipelines e relatórios para insights críticos"
    ],
    technologies: ["Python", "GCP", "GraphQL", "BigQuery", "Machine Learning"]
  },
  {
    title: "Analista de Suporte de TI / Infraestrutura de Redes",
    company: "Accenture",
    period: "Fev/2021 a Dez/2023",
    description: [
      "Suporte e ativação de redes (GPON, VOIP, metálica)",
      "Atendimentos de residenciais a corporativos com IP fixo",
      "Ferramentas criadas com Python, Django, Selenium e Docker para automação de processos internos",
      "Tecnologias: Nokia, Fiberhome, Huawei, Calix, Zhone"
    ],
    technologies: ["Python", "Django", "Selenium", "Docker", "Redes"]
  },
  {
    title: "Suporte de Infraestrutura de Redes",
    company: "K2 Partnering Solutions",
    period: "Jan/2021 a Fev/2021",
    description: [
      "Ativação e configuração de redes GPON e metálica",
      "IP fixo, telefonia, VOIP e redes corporativas"
    ],
    technologies: ["Redes", "GPON", "VOIP"]
  },
  {
    title: "Software Developer Fullstack (Aprendiz)",
    company: "Sankhya Gestão de Negócios",
    period: "Out/2018 a Jan/2020",
    description: [
      "Sistemas internos para otimizar rotinas da empresa",
      "Tecnologias: Java, Spring Boot, Angular, MySQL, HTML, CSS, JS",
      "Projetos: jogo web, sistema de filmes, ferramenta de gerenciamento de projetos",
      "Documentação, prototipagem e agilidade na entrega"
    ],
    technologies: ["Java", "Spring Boot", "Angular", "MySQL", "HTML", "CSS", "JavaScript"]
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
  "Aficionado por filosofia, moral e ciência",
  "Experiência com redes, infraestrutura e sistemas operacionais",
  "Já liderou prototipagens e documentações em equipe",
  "Conhecimentos em OutSystems, Flutter, React, CI/CD, Docker",
  "Apaixonado por aprendizado contínuo e storytelling"
];