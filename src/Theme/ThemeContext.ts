import { createContext } from 'react';

export type TypeTheme = 'day' | 'night';

interface ThemeContext {
  theme: TypeTheme;
  onChangeTheme: (theme: TypeTheme) => void;
}

export default createContext<ThemeContext>({
  theme: 'day',
  onChangeTheme: () => {},
});
