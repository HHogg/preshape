import React, { useContext } from 'react';
import { BoxProps } from 'preshape';
import LogoDay from '../SVGs/PDay';
import LogoNight from '../SVGs/PNight';
import { RootContext } from '../Root';
import './Logo.css';

interface Props extends BoxProps {}

const Logo = (props: Props) => {
  const { theme } = useContext(RootContext);

  return theme === 'day' ? <LogoDay {...props} /> : <LogoNight {...props} />;
};

export default Logo;
