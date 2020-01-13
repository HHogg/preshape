/* eslint-disable */

import * as React from 'react';
import { motion } from 'framer-motion';
import { AnimVariants } from './AnimationUI';
import AnimationBarChart from './AnimationBarChart';
import AnimationCodeBlock from './AnimationCodeBlock';
import AnimationLabels from './AnimationLabels';
import AnimationText from './AnimationText';

const AnimSidebar: AnimVariants = {
  init: {
    x: 528 + 240,
    y: 32,
  },
  scene1: {
    x: 528,
    transition: {
      staggerChildren: 0.05,
      when: 'beforeChildren',
    },
  },
};

export default () => {
  return (
    <motion.g
        variants={ AnimSidebar }
        id="animations_svg__Sidebar"
        transform="translate(528 0)">
      <rect
          height={384}
          width={300}
          x={0}
          y={-32}
          fill="var(--color-background--shade-3)" />
      <AnimationBarChart />
      <AnimationText />
      <AnimationLabels />
      <AnimationCodeBlock />
    </motion.g>
  );
}
