import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../../context/language';
import { profile } from '../../data/profile';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const social = [
    { href: profile.github, label: 'GitHub', icon: Github },
    { href: profile.linkedin, label: 'LinkedIn', icon: Linkedin },
    { href: `mailto:${profile.email}`, label: 'E-mail', icon: Mail },
  ];

  return (
    <footer className="border-t border-slate-200 py-10 dark:border-white/[0.06]">
      <div className="container-page flex flex-col items-center justify-between gap-6 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
        <div className="text-center sm:text-left">
          <p>
            © {year} {profile.name}. {t.footer.rights}
          </p>
          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{t.footer.built}</p>
        </div>

        <div className="flex items-center gap-1">
          {social.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-lg transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/5 dark:hover:text-white"
            >
              <Icon size={18} />
            </a>
          ))}
          <a
            href="#top"
            aria-label={t.footer.backToTop}
            className="ml-2 grid h-9 w-9 place-items-center rounded-lg border border-slate-200 transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-white/10 dark:hover:border-white/30 dark:hover:text-white"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
