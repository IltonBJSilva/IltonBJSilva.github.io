import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { useLanguage } from '../../context/language';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white/60 dark:bg-ink-900/40" />
      <div className="container-page">
        <SectionHeader index="06" eyebrow={t.skills.eyebrow} title={t.skills.title} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 60} className="h-full">
              <div className="card h-full p-5">
                <h3 className="font-mono text-xs uppercase tracking-wider text-blue-600 dark:text-sky-400">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-sm text-slate-700 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
