import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { TypeTheme } from 'preshape';
import Site from './Site';

export const widthContainer = '1152px';
export const widthLarge = '1024px';
export const widthMedium = '832px';
export const widthSmall = '480px';

export const RootContext = React.createContext<{
  onChangeTheme: (theme: TypeTheme) => void;
  theme: TypeTheme;
}>({
  onChangeTheme: () => {},
  theme: 'day',
});


export default () => {
  const [theme, onChangeTheme] = React.useState<TypeTheme>('day');

  return (
    <BrowserRouter>
      <RootContext.Provider value={ { onChangeTheme, theme } }>
        <Site />
      </RootContext.Provider>
    </BrowserRouter>
  );
};
