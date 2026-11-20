import { Award, Compass, GraduationCap, Languages } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { useLanguage } from '../../context/language';

export default function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader index="07" eyebrow={about.eyebrow} title={about.title} />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="card mt-8 p-6">
              <h3 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                <Compass size={18} className="text-blue-600 dark:text-sky-400" aria-hidden="true" />
                {about.goalsTitle}
              </h3>
              <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                {about.goals.map((goal) => (
                  <li key={goal} className="flex gap-2.5">
                    <span aria-hidden="true" className="font-mono text-blue-600 dark:text-sky-400">→</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-5">
            <div className="card p-6">
              <h3 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                <GraduationCap size={18} className="text-blue-600 dark:text-sky-400" aria-hidden="true" />
                {about.educationTitle}
              </h3>
              <ul className="mt-4 divide-y divide-slate-200 dark:divide-white/[0.07]">
                {about.education.map((e) => (
                  <li key={e.degree} className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0">
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{e.degree}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{e.place}</p>
                    </div>
                    <p className="shrink-0 font-mono text-xs text-slate-500 dark:text-slate-400">{e.period}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                <Award size={18} className="text-amber-500" aria-hidden="true" />
                {about.certificationsTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed">{about.certifications}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {about.certificationsList.map((cert) => (
                  <li key={cert} className="chip !font-sans !text-xs">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                <Languages size={18} className="text-blue-600 dark:text-sky-400" aria-hidden="true" />
                {about.languagesTitle}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                {about.languages.map((lang) => (
                  <li key={lang} className="rounded-lg border border-slate-200 px-2.5 py-1 dark:border-white/10">
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
