import { useEffect, useState } from 'react';
import { projects as curated } from '../data/projects';
import type { AreaId, Project } from '../types';

/**
 * Projetos sem precisar mexer no código:
 * adicione o tópico `portfolio` a um repositório no GitHub e ele aparece aqui
 * automaticamente (descrição, linguagem, tópicos e link "Website" do repo).
 *
 * Tópicos extras definem a área do projeto no filtro:
 *   architecture · ai · llm · machine-learning · data · security · devops · automation
 */
const GITHUB_USER = 'IltonBJSilva';
const PORTFOLIO_TOPIC = 'portfolio';
const CACHE_KEY = 'gh-portfolio-projects-v1';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hora

const TOPIC_TO_AREA: Record<string, AreaId> = {
  architecture: 'architecture',
  'distributed-systems': 'architecture',
  microservices: 'architecture',
  ai: 'ai',
  llm: 'ai',
  agents: 'ai',
  'ai-agents': 'ai',
  'machine-learning': 'data',
  ml: 'data',
  data: 'data',
  'data-science': 'data',
  security: 'security',
  devops: 'devops',
  docker: 'devops',
  'ci-cd': 'devops',
  automation: 'automation',
  bot: 'automation',
};

interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

function prettify(name: string): string {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function toProject(repo: GitHubRepo): Project {
  const topics = repo.topics ?? [];
  const areas = [...new Set(topics.map((t) => TOPIC_TO_AREA[t]).filter(Boolean))] as AreaId[];
  const stackTopics = topics.filter((t) => t !== PORTFOLIO_TOPIC && !(t in TOPIC_TO_AREA));
  const description = repo.description ?? '';
  return {
    id: `gh-${repo.name.toLowerCase()}`,
    title: prettify(repo.name),
    year: new Date(repo.pushed_at).getFullYear(),
    areas,
    stack: [...new Set([repo.language, ...stackTopics].filter((s): s is string => Boolean(s)))],
    repo: repo.html_url,
    demo: repo.homepage?.trim() ? (repo.homepage.startsWith('http') ? repo.homepage : `https://${repo.homepage}`) : undefined,
    summary: { pt: description, en: description, es: description },
    highlights: { pt: [], en: [], es: [] },
  };
}

function readCache(): Project[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { at, data } = JSON.parse(raw) as { at: number; data: Project[] };
    return Date.now() - at < CACHE_TTL_MS ? data : null;
  } catch {
    return null;
  }
}

function writeCache(data: Project[]) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }));
  } catch {
    /* ignora */
  }
}

let request: Promise<Project[]> | null = null;

/** Uma única requisição por carregamento, compartilhada entre as seções. */
function fetchGitHubProjects(): Promise<Project[]> {
  const cached = readCache();
  if (cached) return Promise.resolve(cached);
  if (request) return request;

  const curatedRepos = new Set(curated.map((p) => p.repo?.toLowerCase()).filter(Boolean));
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(
    `user:${GITHUB_USER} topic:${PORTFOLIO_TOPIC}`,
  )}&sort=updated&per_page=30`;

  request = fetch(url, { headers: { Accept: 'application/vnd.github+json' } })
    .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
    .then((body: { items: GitHubRepo[] }) => {
      const list = body.items
        .filter((r) => !r.fork && !r.archived && !curatedRepos.has(r.html_url.toLowerCase()))
        .map(toProject);
      writeCache(list);
      return list;
    })
    .catch(() => {
      request = null; // sem rede ou limite da API: mostra só os projetos fixos
      return [];
    });

  return request;
}

/** Projetos fixos (data/projects.ts) + projetos marcados com o tópico `portfolio` no GitHub. */
export function useProjects(): Project[] {
  const [fromGitHub, setFromGitHub] = useState<Project[]>(() => readCache() ?? []);

  useEffect(() => {
    let active = true;
    fetchGitHubProjects().then((list) => active && setFromGitHub(list));
    return () => {
      active = false;
    };
  }, []);

  return [...curated, ...fromGitHub];
}
