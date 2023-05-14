import { PropsWithChildren } from 'react';
import { TypeTheme } from '../types';
import useLocalStorage from '../hooks/useLocalStorage';
import { useTheme } from '../hooks';
import { themes, themesOpposite } from '../variables';
import { ThemeContext } from './useThemeContext';

type ThemeProviderProps = {
  initialTheme?: TypeTheme;
};

export function ThemeProvider({
  children,
  initialTheme = 'day',
}: PropsWithChildren<ThemeProviderProps>) {
  const [theme, setTheme] = useLocalStorage<TypeTheme>(
    'preshape.theme',
    initialTheme
  );

  function onChange(theme: TypeTheme) {
    setTheme(theme);
  }

  useTheme(theme);

  return (
    <ThemeContext.Provider
      value={{
        colors: themes[theme],
        onChange,
        theme,
        themeOpposite: themesOpposite[theme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
