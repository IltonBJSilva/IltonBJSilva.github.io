import { useEffect, useState } from 'react';
import { Check, Copy, Download, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { useLanguage } from '../../context/language';
import { cv, profile } from '../../data/profile';

export default function Contact() {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center sm:px-12 dark:border-white/[0.08] dark:bg-ink-900">
            <div aria-hidden="true" className="bg-grid mask-fade absolute inset-0" />
            <div aria-hidden="true" className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-sky-400">
                <span className="text-slate-400 dark:text-slate-500">08 /</span> {t.contact.eyebrow}
              </p>
              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                {t.contact.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
                {t.contact.subtitle}
              </p>

              <div className="mx-auto mt-9 flex max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
                <Button href={`mailto:${profile.email}`} icon={Mail}>
                  {t.contact.email}
                </Button>
                <Button onClick={copyEmail} variant="secondary" icon={copied ? Check : Copy}>
                  <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
                </Button>
                <Button
                  href={cv[language].url}
                  download={cv[language].fileName}
                  variant="secondary"
                  icon={Download}
                >
                  {t.contact.cv}
                </Button>
              </div>

              <p className="mt-6 font-mono text-sm text-slate-500 dark:text-slate-400">{profile.email}</p>

              <div className="mt-6 flex justify-center gap-2">
                <Button href={profile.linkedin} variant="ghost" size="sm" icon={Linkedin}>
                  LinkedIn
                </Button>
                <Button href={profile.github} variant="ghost" size="sm" icon={Github}>
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
