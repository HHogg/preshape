import * as React from 'react' ;
import { Icon, IconProps } from 'preshape';
import { RootContext } from '../Root';

export default (props: Omit<IconProps, 'name'>) => {
  const { theme } = React.useContext(RootContext);

  return (
    <Icon { ...props } name={ theme === 'day' ? 'Sun' : 'Moon' } />
  );
};
