import { createContext } from 'react';
import { TypeTheme } from 'preshape';

export default createContext<{
  onChangeTheme: (theme: TypeTheme) => void;
  theme: TypeTheme;
}>({
  onChangeTheme: () => {},
  theme: 'day',
});
