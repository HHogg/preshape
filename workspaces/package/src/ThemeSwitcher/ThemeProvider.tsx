import { PropsWithChildren, useEffect, useRef } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { TypeTheme } from '../types';
import { themes, themesOpposite } from '../variables';
import { useSystemTheme } from './useSystemTheme';
import { ThemeContext } from './useThemeContext';

type ThemeProviderProps = {
  disableSystemTheme?: boolean;
  initialTheme?: TypeTheme;
};

const updateThemeClassName = (theme: TypeTheme) => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('Theme--day');
    document.documentElement.classList.remove('Theme--night');
    document.documentElement.classList.add(`Theme--${theme}`);
  }
};

export function ThemeProvider({
  children,
  disableSystemTheme = false,
  initialTheme = 'day',
}: PropsWithChildren<ThemeProviderProps>) {
  const [theme, setTheme] = useLocalStorage<TypeTheme>(
    'preshape.theme',
    initialTheme
  );

  const refPreviousSystemTheme = useRef<TypeTheme | null>(null);
  const systemTheme = useSystemTheme();

  useEffect(() => {
    if (
      !refPreviousSystemTheme.current ||
      refPreviousSystemTheme.current !== systemTheme
    ) {
      refPreviousSystemTheme.current = systemTheme;

      if (!disableSystemTheme) {
        setTheme(systemTheme);
      }
    }
  }, [setTheme, systemTheme, disableSystemTheme]);

  useEffect(() => {
    updateThemeClassName(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        colors: themes[theme],
        onChange: setTheme,
        theme,
        themeOpposite: themesOpposite[theme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
