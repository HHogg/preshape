import { useEffect, useState } from 'react';
import { TypeTheme } from '../types';

const getCurrentTheme = () => {
  // SSG
  if (typeof window === 'undefined') {
    return 'day';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const useSystemTheme = (): TypeTheme => {
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  useEffect(() => {
    // SSG
    if (typeof window === 'undefined') {
      return;
    }

    const mqListener = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches);
    };

    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);

  return isDarkTheme ? 'night' : 'day';
};
