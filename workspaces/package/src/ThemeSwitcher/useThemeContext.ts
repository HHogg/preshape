import { createContext, useContext } from 'react';
import { TypeTheme } from '../types';
import { ThemeColorMap, themeDay } from '../variables';

type ThemeContextProps = {
  colors: ThemeColorMap;
  onChange: (theme: TypeTheme) => void;
  theme: TypeTheme;
  themeOpposite: TypeTheme;
  themeRoot: TypeTheme | null;
};

export const ThemeContext = createContext<ThemeContextProps>({
  colors: themeDay,
  onChange: () => {},
  theme: 'day',
  themeOpposite: 'night',
  themeRoot: null,
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
