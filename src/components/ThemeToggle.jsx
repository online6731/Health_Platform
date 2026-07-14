import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => localStorage.getItem('theme') === 'light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light-theme', isLight);
    root.classList.toggle('dark', !isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  const label = isLight ? 'فعال کردن تم تیره' : 'فعال کردن تم روشن';

  return (
    <button
      type="button"
      className={`theme-toggle-btn ${isLight ? 'light' : 'dark'}`}
      onClick={() => setIsLight((current) => !current)}
      title={label}
      aria-label={label}
    >
      {isLight ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
