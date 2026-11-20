import { ArrowUpRight, Bot, CheckCircle2, FileText, Linkedin, Route, UserCheck, Wrench, type LucideIcon } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { useLanguage } from '../../context/language';
import { profile } from '../../data/profile';

/** Um ícone por etapa do fluxo (mesma ordem de t.ai.steps). */
const STEP_ICONS: LucideIcon[] = [FileText, Route, Wrench, CheckCircle2, UserCheck];

const LINKEDIN_POSTS = `${profile.linkedin}recent-activity/all/`;

export default function AiSection() {
  const { t } = useLanguage();
  const { ai } = t;

  return (
    <section id="ai" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-600/15" />
      </div>

      <div className="container-page">
        <SectionHeader index="02" eyebrow={ai.eyebrow} title={ai.title} subtitle={ai.subtitle} />

        {/* Fluxo com agentes */}
        <Reveal>
          <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-violet-600 dark:text-violet-300">
            <Bot size={15} aria-hidden="true" />
            {ai.workflowTitle}
          </h3>
        </Reveal>

        <ol className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {/* linha que conecta as etapas no desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[38px] hidden h-px bg-gradient-to-r from-violet-500/0 via-violet-500/40 to-violet-500/0 xl:block"
          />
          {ai.steps.map((step, i) => {
            const Icon = STEP_ICONS[i] ?? Bot;
            return (
              <li key={step.title} className="relative">
                <Reveal delay={i * 70} className="h-full">
                  <div className="card flex h-full flex-col p-5">
                    <div className="flex items-center gap-3">
                      <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/10 text-violet-600 ring-1 ring-violet-500/20 dark:text-violet-300">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span className="font-mono text-xs text-slate-400 dark:text-slate-500">0{i + 1}</span>
                    </div>
                    <h4 className="mt-4 font-semibold text-slate-900 dark:text-white">{step.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.description}</p>
                    <p className="mt-auto pt-4 font-mono text-[11px] leading-snug text-violet-700/80 dark:text-violet-300/80">
                      ↳ {step.evidence}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>

        {/* Conteúdo no LinkedIn */}
        <Reveal className="mt-16">
          <div className="card relative overflow-hidden p-6 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-xl">
                <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl dark:text-white">{ai.contentTitle}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{ai.contentSubtitle}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-blue-600/10 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-sky-400/10 dark:text-sky-300">
                  <Linkedin size={14} aria-hidden="true" /> {ai.followers}
                </span>
                <Button href={LINKEDIN_POSTS} variant="secondary" size="sm" icon={ArrowUpRight} className="whitespace-nowrap">
                  {ai.viewPosts}
                </Button>
              </div>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ai.topics.map((topic) => (
                <li
                  key={topic.title}
                  className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 transition-colors hover:border-violet-500/40 dark:border-white/[0.07] dark:bg-white/[0.02]"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wider text-violet-600 dark:text-violet-300">
                    {topic.tag}
                  </span>
                  <p className="mt-1.5 font-medium text-slate-900 dark:text-white">{topic.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{topic.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
