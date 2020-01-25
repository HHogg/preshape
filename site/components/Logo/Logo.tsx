import * as React from 'react' ;
import { motion } from 'framer-motion';
import {
  sizeX12Px,
  transitionTimingFunction,
  transitionTimeSlow,
  Base,
  BaseProps,
} from 'preshape';
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
  return (
    <Base { ...props } className="Logo" tag="svg" theme="night" viewBox="0 0 160 201">
      <g fill="currentColor" fillRule="evenodd" stroke="currentColor" strokeLinejoin="bevel" strokeWidth="1" >
        <motion.path
            animate={ animate }
            d="M121,137 160,68.5 121.350807,0 Z"
            initial={ { fillOpacity: 0, pathLength: 0, x: d } }
            transition={ transition } />
        <motion.path
            animate={ animate }
            d="M120.654735,0 121,0.0727822345 121 136.815989 57,137Z"
            initial={ { fillOpacity: 0, pathLength: 0, y: d } }
            transition={ transition } />
        <motion.path
            animate={ animate }
            d="M57.1290172,137 121,0 0,0Z"
            initial={ { fillOpacity: 0, pathLength: 0, y: -d } }
            transition={ transition } />
        <motion.path
            animate={ animate }
            d="M57,201 57,136.844046 0,0Z"
            initial={ { fillOpacity: 0, pathLength: 0, x: d, y: d } }
            transition={ transition } />
        <motion.path
            animate={ animate }
            d="M57,201 0,0 0,201Z"
            initial={ { fillOpacity: 0, pathLength: 0, y: d } }
            transition={ transition } />
      </g>
    </Base>
  );
};
