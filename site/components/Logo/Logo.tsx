import * as React from 'react' ;
import { motion } from 'framer-motion';
import {
  sizeX12Px,
  themesOpposite,
  transitionTimingFunction,
  transitionTimeSlow,
  Base,
  BaseProps,
} from 'preshape';
import { RootContext } from '../Root';
import './Logo.css';

const d = sizeX12Px;

const transition = {
  duration: (transitionTimeSlow / 1000) * 1.5,
  easing: transitionTimingFunction,
};

const animate = {
  fillOpacity: [0, 0, 1],
  pathLength: 1,
  x: 0,
  y: 0,
};

interface Props extends BaseProps {

}

export default (props: Props) => {
  const { theme } = React.useContext(RootContext);

  return (
    <Base { ...props } className="Logo" tag="svg" theme={ themesOpposite[theme] } viewBox="0 0 160 201">
      <g fill="none" fillRule="evenodd" stroke="none" strokeLinejoin="bevel" strokeWidth="1" >
        <motion.path
            animate={ animate }
            d="M121,137 160,68.5 121.350807,0 Z"
            fill="#ADB5BD"
            initial={ { fillOpacity: 0, pathLength: 0, x: d } }
            stroke="#ADB5BD"
            transition={ transition } />
        <motion.path
            animate={ animate }
            d="M120.654735,0 121,0.0727822345 121 136.815989 57,137Z"
            fill="#868E96"
            initial={ { fillOpacity: 0, pathLength: 0, y: d } }
            stroke="#868E96"
            transition={ transition } />
        <motion.path
            animate={ animate }
            d="M57.1290172,137 121,0 0,0Z"
            fill="#495057"
            initial={ { fillOpacity: 0, pathLength: 0, y: -d } }
            stroke="#484F58"
            transition={ transition } />
        <motion.path
            animate={ animate }
            d="M57,201 57,136.844046 0,0Z"
            fill="#212529"
            initial={ { fillOpacity: 0, pathLength: 0, x: d, y: d } }
            stroke="#202529"
            transition={ transition } />
        <motion.path
            animate={ animate }
            d="M57,201 0,0 0,201Z"
            fill="#343A40"
            initial={ { fillOpacity: 0, pathLength: 0, y: d } }
            stroke="#343A41"
            transition={ transition } />
      </g>
    </Base>
  );
};
