import { useCallback, useState } from 'react';

/** O tema inicial é aplicado por um script no index.html; aqui só lemos e alternamos. */
export function useTheme() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      try {
        localStorage.setItem('theme', next ? 'dark' : 'light');
      } catch {
        /* ignora */
      }
      return next;
    });
  }, []);

  return { isDark, toggle };
}
