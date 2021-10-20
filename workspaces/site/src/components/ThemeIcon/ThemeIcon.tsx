import * as React from 'react' ;
import { Icons } from 'preshape';
import { RootContext } from '../Root';

const ThemeIcon: React.FC<{}> = (props) => {
  const { theme } = React.useContext(RootContext);

  return theme === 'day'
    ? <Icons.Sun { ...props } />
    : <Icons.Moon { ...props } />;
};

export default ThemeIcon;
