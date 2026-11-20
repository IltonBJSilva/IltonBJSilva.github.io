import { Award, ExternalLink, Gamepad2, Github, Globe, MapPin, PlayCircle, Rocket, Users, type LucideIcon } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { useLanguage } from '../../context/language';
import { competitions } from '../../data/competitions';
import type { CompetitionLink } from '../../types';

const LINK_ICON: Record<CompetitionLink['kind'], LucideIcon> = {
  play: Gamepad2,
  video: PlayCircle,
  code: Github,
  official: Globe,
  demo: ExternalLink,
};

export default function Competitions() {
  const { t, language } = useLanguage();
  const labels = t.competitions;

  return (
    <section id="competitions" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader index="04" eyebrow={labels.eyebrow} title={labels.title} subtitle={labels.subtitle} />

        <div className="space-y-6">
          {competitions.map((c, i) => (
            <Reveal key={c.id} delay={i * 80}>
              <article className="card relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/25 via-blue-500/10 to-transparent blur-3xl"
                />

                <div className="relative grid lg:grid-cols-[1fr_340px]">
                  {/* Conteúdo */}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-400/15 dark:text-indigo-300">
                        <Rocket size={13} aria-hidden="true" />
                        {c.event} {c.year}
                      </span>
                      {c.role && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
                          <Award size={13} aria-hidden="true" />
                          {c.role[language]}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                      {c.title}
                      {c.repoName && (
                        <span className="ml-2 align-middle font-mono text-sm font-normal text-slate-400 dark:text-slate-500">
                          ({c.repoName})
                        </span>
                      )}
                    </h3>

                    <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-slate-500 dark:text-slate-400">
                      <li>
                        <span className="font-medium text-slate-700 dark:text-slate-200">{labels.challenge}:</span> {c.challenge}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Users size={14} aria-hidden="true" />
                        <span className="sr-only">{labels.team}:</span>
                        {c.team} · {c.format[language]}
                      </li>
                      <li className="flex items-center gap-1.5">
                        <MapPin size={14} aria-hidden="true" />
                        {c.location} · {c.date[language]}
                      </li>
                    </ul>

                    <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-400">{c.summary[language]}</p>

                    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5 dark:border-white/[0.07] dark:bg-white/[0.02]">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-blue-600 dark:text-sky-400">{labels.myPart}</p>
                      <ul className="mt-3 grid gap-2 text-sm md:grid-cols-2 md:gap-x-6">
                        {c.contributions[language].map((item) => (
                          <li key={item} className="flex gap-2.5">
                            <span
                              aria-hidden="true"
                              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {c.stack.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {c.links.map((link, idx) => (
                        <Button
                          key={link.url}
                          href={link.url}
                          variant={idx === 0 ? 'primary' : link.kind === 'code' ? 'secondary' : 'ghost'}
                          size="sm"
                          icon={LINK_ICON[link.kind]}
                        >
                          {labels.links[link.kind]}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Certificado */}
                  <div className="border-t border-slate-200 p-6 sm:p-8 lg:border-l lg:border-t-0 dark:border-white/[0.07]">
                    <p className="mb-3 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      <Award size={13} className="text-amber-500" aria-hidden="true" />
                      {labels.certificate}
                    </p>
                    <a
                      href={c.certificate.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden rounded-xl border border-slate-200 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-500/50 hover:shadow-glow dark:border-white/10"
                    >
                      <img
                        src={c.certificate.image}
                        alt={`${labels.certificateAlt} ${c.year}`}
                        width={720}
                        height={500}
                        loading="lazy"
                        className="aspect-[36/25] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </a>
                    <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">Galactic Problem Solver · {c.year}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
