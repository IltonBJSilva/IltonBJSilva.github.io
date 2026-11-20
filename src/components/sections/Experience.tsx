import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { useLanguage } from '../../context/language';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader index="05" eyebrow={t.experience.eyebrow} title={t.experience.title} />

        <ol className="relative border-l border-slate-200 dark:border-white/10">
          {t.experience.items.map((exp, i) => (
            <li key={`${exp.company}-${exp.period}`} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
              <span
                aria-hidden="true"
                className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                  exp.current
                    ? 'border-emerald-500 bg-emerald-500 pulse-dot'
                    : 'border-blue-500 bg-slate-50 dark:bg-ink-950'
                }`}
              />
              <Reveal delay={Math.min(i, 2) * 60}>
                <div className="grid gap-4 lg:grid-cols-[220px_1fr] lg:gap-10">
                  <div>
                    <p className="font-mono text-sm text-slate-500 dark:text-slate-400">{exp.period}</p>
                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">{exp.company}</p>
                    {exp.current && (
                      <span className="mt-2 inline-block rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                        {t.experience.current}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{exp.title}</h3>
                    <ul className="mt-3 space-y-2 text-[15px] leading-relaxed">
                      {exp.description.map((d) => (
                        <li key={d} className="flex gap-2.5">
                          <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
