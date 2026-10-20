import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function ThemeToggle() {
  const [dark, setDark] =
    useLocalStorage('dark', false);

  useEffect(() => {
    document.documentElement
      .classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      type="button"
      aria-pressed={dark}
      onClick={() => setDark(!dark)}
      className="rounded border px-3 py-1"
    >
      Chế độ tối
    </button>
  );
}