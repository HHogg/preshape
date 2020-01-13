import * as React from 'react' ;
import { Icon, IconProps } from 'preshape';
import SiteContext from '../SiteContext';

const ThemeIcon: React.FC<Omit<IconProps, 'name'>> = (props) => {
  const { theme } = React.useContext(SiteContext);

  return (
    <Icon { ...props } name={ theme === 'day' ? 'Sun' : 'Moon' } />
  );
};

export default ThemeIcon;
