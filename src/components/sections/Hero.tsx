import { ArrowDown, Download, Github, Linkedin, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { useLanguage } from '../../context/language';
import { cv, profile } from '../../data/profile';
import photo from '../../assets/ilton.webp';

export default function Hero() {
  const { t, language } = useLanguage();
  const resume = cv[language];

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pb-24">
      {/* Fundo: grade + brilho */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-fade absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-600/20" />
        <div className="absolute top-40 right-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-500" />
              {t.hero.available}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 font-mono text-sm text-blue-600 dark:text-sky-400">{t.hero.eyebrow}</p>
            <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
              Ilton <span className="gradient-text">Batista</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-xl font-medium leading-snug text-slate-800 sm:text-2xl dark:text-slate-100">{t.hero.role}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">{t.hero.description}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#projects" icon={ArrowDown}>
                {t.hero.ctaProjects}
              </Button>
              <Button href={resume.url} download={resume.fileName} variant="secondary" icon={Download}>
                {t.hero.ctaCv}
              </Button>
              <div className="flex items-center gap-1">
                <Button href={profile.github} variant="ghost" icon={Github} ariaLabel="GitHub" className="w-11 !px-0">
                  {null}
                </Button>
                <Button href={profile.linkedin} variant="ghost" icon={Linkedin} ariaLabel="LinkedIn" className="w-11 !px-0">
                  {null}
                </Button>
              </div>
            </div>
            <p className="mt-6 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500">
              <MapPin size={15} aria-hidden="true" /> {t.hero.location}
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-600/40 via-sky-400/10 to-amber-400/30 blur-xl" />
            <img
              src={photo}
              alt="Ilton Batista"
              width={640}
              height={800}
              className="relative aspect-[4/5] w-full rounded-3xl border border-white/10 object-cover shadow-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-6 left-3 w-60 sm:w-64 rounded-xl border border-white/10 bg-ink-950/90 p-4 font-mono text-[11px] leading-relaxed text-slate-300 shadow-2xl backdrop-blur sm:-left-8"
            >
              <div className="mb-2 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <p>
                <span className="text-sky-400">$</span> whoami
              </p>
              <p className="text-slate-400">backend · cloud · ai</p>
              <p className="mt-1">
                <span className="text-sky-400">$</span> cat stack.txt
              </p>
              <p className="text-slate-400">python · typescript · gcp · aws</p>
              <p className="mt-1">
                <span className="text-sky-400">$</span> status
              </p>
              <p className="text-emerald-400">● shipping to production</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container-page mt-20">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 lg:grid-cols-4 dark:border-white/[0.07] dark:bg-white/[0.07]">
          {t.stats.map((stat, i) => (
            <li key={stat.label} className="h-full">
              <Reveal delay={i * 80} className="h-full bg-white p-5 sm:p-6 dark:bg-ink-900">
                <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{stat.value}</p>
                <p className="mt-1 text-sm leading-snug text-slate-500 dark:text-slate-400">{stat.label}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
