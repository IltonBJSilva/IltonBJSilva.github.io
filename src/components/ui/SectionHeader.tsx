import Reveal from './Reveal';

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ index, eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-sky-400">
        <span className="text-slate-400 dark:text-slate-500">{index} /</span> {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{subtitle}</p>}
    </Reveal>
  );
}
