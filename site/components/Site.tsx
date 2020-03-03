import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useTheme, Base, TypeTheme } from 'preshape';
import Landing from './Landing/Landing';
import SiteContext from './SiteContext';

export default () => {
  const [theme, onChangeTheme] = React.useState<TypeTheme>('day');

  useTheme(theme);

  return (
    <Base>
      <Switch>
        <SiteContext.Provider value={ { onChangeTheme, theme } }>
          <Route component={ Landing } path="/" />
        </SiteContext.Provider>
      </Switch>
    </Base>
  );
};
