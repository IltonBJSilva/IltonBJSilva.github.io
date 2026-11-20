import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useLanguage } from '../../context/language';
import { useTheme } from '../../hooks/useTheme';
import { useActiveSection } from '../../hooks/useActiveSection';
import type { Lang } from '../../types';

const LANGS: Lang[] = ['pt', 'en', 'es'];
// 'top' (hero) entra na lista só para limpar o destaque quando o usuário volta ao início.
const SECTION_IDS = ['top', 'focus', 'ai', 'projects', 'competitions', 'experience', 'skills', 'about', 'contact'];

function LanguageSwitch({ label }: { label: string }) {
  const { language, setLanguage } = useLanguage();
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex rounded-lg border border-slate-200 p-0.5 font-mono text-[11px] dark:border-white/10"
    >
      {LANGS.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={`rounded-md px-2 py-1 uppercase transition-colors ${
            language === lang
              ? 'bg-slate-900 text-white dark:bg-white dark:text-ink-950'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const { isDark, toggle } = useTheme();
  const active = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const links = [
    { id: 'focus', label: t.nav.focus },
    { id: 'ai', label: t.nav.ai },
    { id: 'projects', label: t.nav.projects },
    { id: 'competitions', label: t.nav.competitions },
    { id: 'experience', label: t.nav.experience },
    { id: 'skills', label: t.nav.skills },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const themeButton = (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.nav.theme}
      className="grid h-9 w-9 place-items-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-white/[0.06] dark:bg-ink-950/80'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 font-mono text-xs font-bold text-white">
            IB
          </span>
          <span className="font-semibold tracking-tight text-slate-900 dark:text-white">Ilton Batista</span>
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'true' : undefined}
              className={`rounded-lg px-2.5 py-2 text-sm transition-colors ${
                active === link.id
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`mx-auto mt-0.5 block h-px bg-blue-500 transition-all duration-300 ${
                  active === link.id ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageSwitch label={t.nav.language} />
          </div>
          {themeButton}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-9 w-9 place-items-center rounded-lg text-slate-700 hover:bg-slate-100 xl:hidden dark:text-slate-200 dark:hover:bg-white/5"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 xl:hidden dark:border-white/[0.06]">
          <nav className="container-page flex flex-col py-3" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 px-2 pb-2 sm:hidden">
              <LanguageSwitch label={t.nav.language} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
