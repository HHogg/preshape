import * as React from 'react' ;
import { Icon, IconProps } from 'preshape';
import { RootContext } from '../Root';

const ThemeIcon: React.FC<Omit<IconProps, 'name'>> = (props) => {
  const { theme } = React.useContext(RootContext);

  return (
    <Icon { ...props } name={ theme === 'day' ? 'Sun' : 'Moon' } />
  );
};

export default ThemeIcon;
