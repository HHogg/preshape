import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useTheme, TypeTheme } from 'preshape';
import Landing from './Landing/Landing';

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

  useTheme(theme);

  return (
    <BrowserRouter>
      <Switch>
        <RootContext.Provider value={ { onChangeTheme, theme } }>
          <Route component={ Landing } path="/" />
        </RootContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};
