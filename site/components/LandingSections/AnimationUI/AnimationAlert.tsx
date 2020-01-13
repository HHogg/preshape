/* eslint-disable */

import * as React from 'react';
import { motion } from 'framer-motion';
import { AnimVariants } from './AnimationUI';

const AnimAlert: AnimVariants = ({
  init: {
    opacity: 0,
    originX: 0.5,
    scale: 0,
    x: 32,
    y: 64,
  },
  scene1: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.05,
      when: 'beforeChildren',
    }
  },
  scene2: {
    opacity: 0,
    scale: 0,
  },
});

const AnimText: AnimVariants = ({
  init: {
    originX: 0,
    scaleX: 0,
  },
  scene1: { scaleX: 1 },
  scene2: { scaleX: 0 },
});

const AnimIcon: AnimVariants = ({
  init: {
    originX: 0.5,
    scale: 0,
  },
  scene1: { scale: 1 },
  scene2: { scale: 0 },
});

export default () => {
  return (
    <motion.g
        variants={ AnimAlert }
        id="animations_svg__Alert"
        transform="translate(32 64)">
      <rect
        id="animations_svg__text-copy"
        fill="#E64980"
        x={0}
        y={0}
        width={464}
        height={48}
        rx={2}
      />
      <motion.path
        variants={ AnimIcon }
        d="M27.24 15.426L16.919 32.482A1 1 0 0017.774 34h20.468a1 1 0 00.86-1.511L28.955 15.432a1 1 0 00-1.715-.006z"
        id="animations_svg__accent-copy"
        fill="#FAFCFF"
      />
      <motion.rect
        variants={ AnimText }
        id="animations_svg__background-copy-2"
        fill="#FAFCFF"
        x={56}
        y={27}
        width={294}
        height={4}
        rx={1}
      />
      <motion.rect
        variants={ AnimText }
        id="animations_svg__background-copy"
        fill="#FAFCFF"
        x={56}
        y={17}
        width={392}
        height={4}
        rx={1}
      />
    </motion.g>
  );
}
