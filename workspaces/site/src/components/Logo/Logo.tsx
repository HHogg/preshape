import * as React from 'react';
import { BoxProps } from 'preshape';
import LogoDay from '../../assets/P-day.svg';
import LogoNight from '../../assets/P-night.svg';
import { RootContext } from '../Root';
import './Logo.css';

interface Props extends BoxProps {}

const Logo = (props: Props) => {
  const { theme } = React.useContext(RootContext);

  return theme === 'day' ? <LogoDay {...props} /> : <LogoNight {...props} />;
};

export default Logo;
