// import { useLocalStorage, TypeTheme, useTheme } from 'preshape';
import React, { PropsWithChildren, createContext, useContext } from 'react';
import { TypeTheme } from '../types';
import useLocalStorage from '../hooks/useLocalStorage';
import { useTheme } from '../hooks';
import { ThemeColorMap, themeDay, themes, themesOpposite } from '../variables';

type ThemeContextProps = {
  colors: ThemeColorMap;
  onChange: (theme: TypeTheme) => void;
  theme: TypeTheme;
  themeOpposite: TypeTheme;
};

type ThemeProviderProps = {
  initialTheme?: TypeTheme;
};

const ThemeContext = createContext<ThemeContextProps>({
  colors: themeDay,
  onChange: () => {},
  theme: 'day',
  themeOpposite: 'night',
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

function ThemeProvider({
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

export default ThemeProvider;
