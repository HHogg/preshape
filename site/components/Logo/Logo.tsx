import * as React from 'react' ;
import { BaseProps } from 'preshape';
import LogoDay from '../../assets/P-day.svg';
import LogoNight from '../../assets/P-night.svg';
import { RootContext } from '../Root';
import './Logo.css';

interface Props extends BaseProps {}

export default (props: Props) => {
  const { theme } = React.useContext(RootContext);

  return theme === 'day'
  ? <LogoDay { ...props } />
  : <LogoNight { ...props } />;
};
