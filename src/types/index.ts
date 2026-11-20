export type Lang = 'pt' | 'en' | 'es';

/** Texto com uma versão por idioma. */
export type Localized<T = string> = Record<Lang, T>;

/** Áreas de atuação usadas para agrupar e filtrar projetos. */
export type AreaId = 'architecture' | 'ai' | 'data' | 'security' | 'devops' | 'automation';

export interface ProjectMetric {
  value: string;
  label: Localized;
}

export interface Project {
  id: string;
  title: string;
  year: number;
  areas: AreaId[];
  stack: string[];
  repo?: string;
  demo?: string;
  /** Repositório privado: o card mostra o aviso no lugar do link de código. */
  isPrivate?: boolean;
  featured?: boolean;
  /** Contexto curto: cliente real, desafio técnico, hackathon... */
  context?: Localized;
  summary: Localized;
  highlights: Localized<string[]>;
  metrics?: ProjectMetric[];
}

export interface CompetitionLink {
  kind: 'play' | 'video' | 'code' | 'official' | 'demo';
  url: string;
}

export interface Competition {
  id: string;
  title: string;
  /** Nome alternativo do repositório, quando difere do nome oficial. */
  repoName?: string;
  event: string;
  year: number;
  date: Localized;
  location: string;
  /** Nome oficial do desafio da NASA. */
  challenge: string;
  team: string;
  /** Papel na equipe, se houver (ex.: líder). */
  role?: Localized;
  /** Ex.: "48 horas · equipe de 6" */
  format: Localized;
  summary: Localized;
  /** O que eu fiz no projeto. */
  contributions: Localized<string[]>;
  stack: string[];
  links: CompetitionLink[];
  certificate: { image: string; pdf: string };
}

export interface ArchiveProject {
  title: string;
  repo: string;
  demo?: string;
  stack: string[];
  summary: Localized;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  current?: boolean;
  description: string[];
  technologies: string[];
}

export interface FocusArea {
  title: string;
  description: string;
  points: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Education {
  degree: string;
  place: string;
  period: string;
}

export interface Translation {
  meta: { title: string; description: string };
  nav: {
    about: string;
    focus: string;
    ai: string;
    projects: string;
    competitions: string;
    experience: string;
    skills: string;
    contact: string;
    menu: string;
    theme: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    role: string;
    tagline: string;
    description: string;
    ctaProjects: string;
    ctaCv: string;
    available: string;
    location: string;
  };
  stats: { value: string; label: string }[];
  focus: {
    eyebrow: string;
    title: string;
    subtitle: string;
    seeIn: string;
    areas: Record<AreaId, FocusArea>;
  };
  ai: {
    eyebrow: string;
    title: string;
    subtitle: string;
    workflowTitle: string;
    steps: { title: string; description: string; evidence: string }[];
    contentTitle: string;
    contentSubtitle: string;
    followers: string;
    viewPosts: string;
    topics: { tag: string; title: string; description: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    all: string;
    featured: string;
    code: string;
    demo: string;
    private: string;
    archiveTitle: string;
    archiveSubtitle: string;
    viewAll: string;
    areaLabels: Record<AreaId, string>;
  };
  competitions: {
    eyebrow: string;
    title: string;
    subtitle: string;
    myPart: string;
    challenge: string;
    team: string;
    certificate: string;
    certificateAlt: string;
    links: Record<CompetitionLink['kind'], string>;
  };
  experience: {
    eyebrow: string;
    title: string;
    current: string;
    items: Experience[];
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: SkillGroup[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    educationTitle: string;
    education: Education[];
    certificationsTitle: string;
    certifications: string;
    certificationsList: string[];
    languagesTitle: string;
    languages: string[];
    goalsTitle: string;
    goals: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    email: string;
    copy: string;
    copied: string;
    cv: string;
  };
  footer: {
    rights: string;
    built: string;
    backToTop: string;
  };
}
