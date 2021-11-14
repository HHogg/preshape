import React, { FC, useContext } from 'react';
import { Icons } from 'preshape';
import { RootContext } from '../Root';

const ThemeIcon: FC<{}> = (props) => {
  const { theme } = useContext(RootContext);

  return theme === 'day' ? <Icons.Sun {...props} /> : <Icons.Moon {...props} />;
};

export default ThemeIcon;
