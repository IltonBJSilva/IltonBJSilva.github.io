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
    url: "https://github.com/iltonbatista", 
    icon: "Github" 
  },
  { 
    platform: "LinkedIn", 
    url: "https://www.linkedin.com/in/iltonbsilva/", 
    icon: "Linkedin" 
  },
  { 
    platform: "YouTube", 
    url: "https://youtube.com/iltonbatista", 
    icon: "Youtube" 
  },
  { 
    platform: "Portfólio", 
    url: "https://iltonbatista.github.io", 
    icon: "ExternalLink" 
  },
];

export const contactInfo = [
  { 
    icon: "MapPin", 
    text: "Uberlândia - MG" 
  },
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
    title: "Sistema de Relatórios Automáticos com Pipefy + BigQuery",
    description: "Python, Flask, SQL, GCP, autenticação via tokens",
    technologies: ["Python", "Flask", "SQL", "GCP"],
    category: "Backend"
  },
  {
    title: "APIs com Machine Learning",
    description: "Python, Scikit-Learn, integração com front e GCP",
    technologies: ["Python", "Scikit-Learn", "GCP"],
    category: "Backend"
  },
  {
    title: "Interface com React para Visualização de Dados",
    description: "ReactJS + ChartJS + Axios para dashboards",
    technologies: ["React", "ChartJS", "Axios"],
    category: "Frontend"
  },
  {
    title: "Portal de Adoção de Pets (Frontend)",
    description: "HTML, CSS, JS",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Frontend"
  },
  {
    title: "Sistema ADO.TE",
    description: "Django + SQLite, login, cadastro de pets, filtro e requisição de adoção",
    technologies: ["Django", "SQLite"],
    category: "Fullstack"
  },
  {
    title: "CRUD de Filmes (Libook)",
    description: "Spring Boot + Angular",
    technologies: ["Spring Boot", "Angular"],
    category: "Fullstack"
  },
  {
    title: "Dashboard de Análise de Supermercado",
    description: "Python, Pandas, Matplotlib",
    technologies: ["Python", "Pandas", "Matplotlib"],
    category: "Academic"
  },
  {
    title: "Game Web Educativo",
    description: "HTML, CSS, JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Academic"
  }
];

export const objectives = [
  "Evoluir para especialista em backend distribuído",
  "Tornar-se pesquisador em ciência da computação aplicada",
  "Atuar em projetos com impacto social real",
  "Publicar artigos técnicos e científicos",
  "Construir uma ponte entre fé, ciência e tecnologia"
];

export const extraItems = [
  "Criador de conteúdo no YouTube com foco em espiritualidade e tecnologia",
  "Aficionado por filosofia, moral e ciência",
  "Experiência com redes, infraestrutura e sistemas operacionais",
  "Já liderou prototipagens e documentações em equipe",
  "Conhecimentos em OutSystems, Flutter, React, CI/CD, Docker",
  "Apaixonado por aprendizado contínuo e storytelling"
];