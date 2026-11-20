import { BarChart3, BrainCircuit, CloudCog, Network, ShieldCheck, Workflow, type LucideIcon } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { useLanguage } from '../../context/language';
import { useProjects } from '../../hooks/useProjects';
import type { AreaId } from '../../types';

const AREAS: { id: AreaId; icon: LucideIcon; tone: string }[] = [
  { id: 'architecture', icon: Network, tone: 'from-blue-500/20 text-blue-600 dark:text-blue-400' },
  { id: 'ai', icon: BrainCircuit, tone: 'from-violet-500/20 text-violet-600 dark:text-violet-400' },
  { id: 'data', icon: BarChart3, tone: 'from-cyan-500/20 text-cyan-600 dark:text-cyan-400' },
  { id: 'security', icon: ShieldCheck, tone: 'from-emerald-500/20 text-emerald-600 dark:text-emerald-400' },
  { id: 'devops', icon: CloudCog, tone: 'from-sky-500/20 text-sky-600 dark:text-sky-400' },
  { id: 'automation', icon: Workflow, tone: 'from-amber-500/20 text-amber-600 dark:text-amber-400' },
];

export default function FocusAreas() {
  const { t } = useLanguage();
  const projects = useProjects();

  return (
    <section id="focus" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader index="01" eyebrow={t.focus.eyebrow} title={t.focus.title} subtitle={t.focus.subtitle} />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {AREAS.map(({ id, icon: Icon, tone }, i) => {
            const area = t.focus.areas[id];
            const related = projects.filter((p) => p.areas.includes(id));
            return (
              <Reveal key={id} delay={(i % 3) * 80} className="h-full">
                <article className="card group flex h-full flex-col p-6 transition-colors hover:border-blue-500/40">
                  <div className={`mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br to-transparent ${tone}`}>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{area.description}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {area.points.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {related.length > 0 && (
                    <div className="mt-auto pt-5">
                      <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        {t.focus.seeIn}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {related.map((p) => (
                          <a
                            key={p.id}
                            href={`#project-${p.id}`}
                            className="chip transition-colors hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-sky-300"
                          >
                            {p.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
