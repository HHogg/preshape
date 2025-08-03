import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { TypeTheme } from '../types';
import { themes, themesOpposite } from '../variables';
import { useSystemTheme } from './useSystemTheme';
import { ThemeContext, useThemeContext } from './useThemeContext';

type ThemeProviderProps = {
  disableSystemTheme?: boolean;
  defaultTheme?: TypeTheme;
  theme?: TypeTheme;
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
  defaultTheme = 'day',
  theme: propsTheme,
}: PropsWithChildren<ThemeProviderProps>) {
  const { themeRoot } = useThemeContext();
  const [localStateTheme, setLocalStateTheme] = useState<TypeTheme>(
    propsTheme || themeRoot || defaultTheme
  );

  const [localStorageTheme, setLocalStorageTheme] = useLocalStorage<TypeTheme>(
    'preshape.theme',
    defaultTheme
  );

  const refPreviousSystemTheme = useRef<TypeTheme | null>(null);
  const systemTheme = useSystemTheme();

  // When a ThemeProvider has a parent ThemeProvider, it should not
  // update the theme based on the system theme, nor update the body
  // class.
  const isRootTheme = themeRoot === null;
  const theme =
    propsTheme ?? (isRootTheme ? localStorageTheme : localStateTheme);

  const handleSetTheme = useCallback(
    (theme: TypeTheme) => {
      if (isRootTheme) {
        setLocalStorageTheme(theme);
      } else {
        setLocalStateTheme(theme);
      }
    },
    [isRootTheme, setLocalStateTheme, setLocalStorageTheme]
  );

  useEffect(() => {
    if (!isRootTheme || disableSystemTheme) {
      return;
    }

    if (
      !refPreviousSystemTheme.current ||
      refPreviousSystemTheme.current !== systemTheme
    ) {
      refPreviousSystemTheme.current = systemTheme;
      setLocalStorageTheme(systemTheme);
    }
  }, [setLocalStorageTheme, isRootTheme, systemTheme, disableSystemTheme]);

  useEffect(() => {
    if (isRootTheme) {
      updateThemeClassName(theme);
    }
  }, [isRootTheme, theme]);

  useEffect(() => {
    if (!isRootTheme && !propsTheme) {
      setLocalStateTheme(themeRoot);
    }
  }, [themeRoot, propsTheme, isRootTheme]);

  return (
    <ThemeContext.Provider
      value={{
        colors: themes[theme],
        onChange: handleSetTheme,
        theme,
        themeOpposite: themesOpposite[theme],
        themeRoot: isRootTheme ? theme : themeRoot,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
