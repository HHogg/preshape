import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useTheme, useWindowScrollTo, Base } from 'preshape';
import Landing from './Landing/Landing';
import { RootContext } from './Root';

export default () => {
  const { theme } = React.useContext(RootContext);

  useTheme(theme);
  useWindowScrollTo();

  return (
    <Base>
      <Switch>
        <Route component={ Landing } path="/" />
      </Switch>
    </Base>
  );
};
