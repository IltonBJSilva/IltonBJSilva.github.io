import { useEffect, useState } from 'react';
import { ArrowUpRight, ExternalLink, FolderGit2, Github, Lock, Sparkles } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { useLanguage } from '../../context/language';
import { archive } from '../../data/projects';
import { useProjects } from '../../hooks/useProjects';
import { profile } from '../../data/profile';
import type { AreaId, Project } from '../../types';

const FILTERS: (AreaId | 'all')[] = ['all', 'architecture', 'ai', 'data', 'security', 'devops', 'automation'];

function ProjectCard({ project, wide }: { project: Project; wide: boolean }) {
  const { t, language } = useLanguage();

  return (
    <article
      id={`project-${project.id}`}
      className={`card group relative flex h-full scroll-mt-24 flex-col p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-glow target:border-blue-500 target:shadow-glow sm:p-7 ${
        wide ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        {project.featured && (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-600/10 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-500/15 dark:text-sky-300">
            <Sparkles size={12} aria-hidden="true" /> {t.projects.featured}
          </span>
        )}
        {project.context && (
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{project.context[language]}</span>
        )}
        <span className="ml-auto font-mono text-xs text-slate-400 dark:text-slate-500">{project.year}</span>
      </div>

      <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">{project.title}</h3>
      {project.summary[language] && (
        <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-400">{project.summary[language]}</p>
      )}

      {project.highlights[language].length > 0 && (
        <ul className={`mt-5 grid gap-2.5 text-sm ${wide ? 'lg:grid-cols-2 lg:gap-x-8' : ''}`}>
          {project.highlights[language].map((h) => (
            <li key={h} className="flex gap-2.5">
              <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      {project.metrics && (
        <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-200 pt-5 dark:border-white/[0.07]">
          {project.metrics.map((m) => (
            <div key={m.value + m.label.en}>
              <p className="text-lg font-bold text-slate-900 dark:text-white">{m.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{m.label[language]}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.areas.map((area) => (
          <span
            key={area}
            className="rounded-md bg-slate-900/5 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-white/[0.06] dark:text-slate-300"
          >
            {t.projects.areaLabels[area]}
          </span>
        ))}
        {project.stack.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.repo && (
          <Button href={project.repo} variant="secondary" size="sm" icon={Github}>
            {t.projects.code}
          </Button>
        )}
        {project.isPrivate && (
          <span className="inline-flex h-9 items-center gap-1.5 px-1 text-sm text-slate-500 dark:text-slate-400">
            <Lock size={14} aria-hidden="true" /> {t.projects.private}
          </span>
        )}
        {project.demo && (
          <Button href={project.demo} variant="ghost" size="sm" icon={ExternalLink}>
            {t.projects.demo}
          </Button>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const { t, language } = useLanguage();
  const projects = useProjects();
  const [filter, setFilter] = useState<AreaId | 'all'>('all');

  // Links "Veja em" das áreas apontam para #project-<id>: se o filtro atual
  // esconde esse projeto, volta para "Todos" para que o link funcione.
  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash;
      if (!hash.startsWith('#project-')) return;
      setFilter('all');
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' }));
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const visible = filter === 'all' ? projects : projects.filter((p) => p.areas.includes(filter));

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white/60 dark:bg-ink-900/40" />
      <div className="container-page">
        <SectionHeader index="03" eyebrow={t.projects.eyebrow} title={t.projects.title} subtitle={t.projects.subtitle} />

        <div role="group" aria-label={t.projects.eyebrow} className="-mx-4 mb-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {FILTERS.map((f) => {
            const count = f === 'all' ? projects.length : projects.filter((p) => p.areas.includes(f)).length;
            const isActive = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={isActive}
                className={`shrink-0 rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-ink-950'
                    : 'border-slate-200 text-slate-600 hover:border-slate-400 dark:border-white/10 dark:text-slate-300 dark:hover:border-white/30'
                }`}
              >
                {f === 'all' ? t.projects.all : t.projects.areaLabels[f]}
                <span className="ml-1.5 font-mono text-xs opacity-60">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 80} className={`h-full ${filter === 'all' && i === 0 ? 'lg:col-span-2' : ''}`}>
              <ProjectCard project={project} wide={filter === 'all' && i === 0} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t.projects.archiveTitle}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t.projects.archiveSubtitle}</p>
            </div>
            <Button href={profile.repositories} variant="ghost" size="sm" icon={FolderGit2}>
              {t.projects.viewAll}
            </Button>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {archive.map((item) => (
              <li key={item.title}>
                <a
                  href={item.demo ?? item.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group flex h-full items-start justify-between gap-4 p-4 transition-colors hover:border-blue-500/40"
                >
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.summary[language]}</p>
                    <p className="mt-2 font-mono text-[11px] text-slate-400 dark:text-slate-500">{item.stack.join(' · ')}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
