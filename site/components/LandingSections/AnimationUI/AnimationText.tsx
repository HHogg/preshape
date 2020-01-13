/* eslint-disable */

import * as React from 'react';
import { motion } from 'framer-motion';
import { AnimVariants } from './AnimationUI';

const AnimTextParent: AnimVariants = {
  init: {
    x: 32,
    y: 32,
  },
  scene1: {
    y: 32,
    transition: {
      staggerChildren: 0.05,
    },
  },
  scene3: {
    y: 222,
  },
};

const AnimText = (scaleX =  Math.random() * (0.95 - 0.55) + 0.55): AnimVariants => ({
  init: {
    originX: 0,
    scaleX: 0,
  },
  scene1: { scaleX },
});

export default () => {
  return (
    <motion.g
        variants={ AnimTextParent }
        id="animations_svg__Text"
        transform="translate(32 32)">
      <motion.rect
        variants={ AnimText(1) }
        id="animations_svg__Line-1"
        fill="var(--color-accent--shade-2)"
        x={0}
        y={0}
        width={168}
        height={8}
        rx={1}
        />

      { Array.from({ length: 7 }).map((_, index) => (
        <motion.rect
          variants={ AnimText() }
          id="animations_svg__Line-8"
          fill="var(--color-text--shade-1)"
          key={ index }
          x={0}
          y={ 16 + (index * 8) }
          width={168}
          height={4}
          rx={1}
        />
      )) }
    </motion.g>
  );
}
