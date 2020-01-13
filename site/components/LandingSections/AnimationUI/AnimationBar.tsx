/* eslint-disable */

import * as React from 'react';
import { motion } from 'framer-motion';
import { AnimVariants } from './AnimationUI';

const AnimBar: AnimVariants = ({
  init: {
    opacity: 0,
    x: 0,
    y: -40,
  },
  scene1: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      when: 'beforeChildren',
    }
  },
  out: {
    y: -40,
    transition: {
      ease: 'easeIn',
    }
  },
});

const AnimButton = {
  init: {
    originX: 0.5,
    scale: 0,
    x: 676,
    y: 9,
  },
  scene1: { scale: 1 },
};

const AnimLogo = {
  init: {
    originX: 0.5,
    scale: 0,
    x: 33,
    y: 7,
  },
  scene1: { scale: 1 },
};

export default () => {
  return (
    <motion.g
        variants={ AnimBar }
        id="animations_svg__Bar"
        transform="translate(-1 -1)">
      <rect height={42} fill="var(--color-text--shade-1)" width={768} x={0} y={-8} />
      <motion.g
          variants={ AnimButton }
          id="animations_svg__Button"
          transform="translate(676 9)">
        <rect
          id="animations_svg__Rectangle-Copy-10"
          fill="var(--color-accent--shade-2)"
          x={0}
          y={0}
          width={61}
          height={16}
          rx={2}
        />
        <rect
          id="animations_svg__Rectangle-Copy-24"
          fill="#FAFCFF"
          x={8}
          y={7}
          width={33}
          height={3}
          rx={1}
        />
        <rect
          id="animations_svg__Rectangle-Copy-25"
          fill="#FAFCFF"
          x={50}
          y={5}
          width={1}
          height={7}
          rx={0.5}
        />
        <rect
          id="animations_svg__Rectangle-Copy-26"
          fill="#FAFCFF"
          x={47}
          y={8}
          width={7}
          height={1}
          rx={0.5}
        />
      </motion.g>

      <motion.g
          variants={ AnimLogo }
          id="animations_svg__Icon"
          transform="translate(33 7)">
        <rect
          id="animations_svg__Rectangle-Copy-9"
          fill="var(--color-background--shade-1)"
          x={0}
          y={0}
          width={19.2}
          height={19.2}
          rx={0.6}
        />
        <path
          d="M0 18h19.2v.6a.6.6 0 01-.6.6H.6a.6.6 0 01-.6-.6V18z"
          id="animations_svg__Rectangle-Copy-10"
          fill="var(--color-accent--shade-2)"
        />
        <path
          id="animations_svg__Rectangle-Copy"
          fill="var(--color-text--shade-1)"
          d="M5.4 3.6h6.561l2.079 3.68-2.079 3.699-3.429.01V14.4H5.4z"
        />
      </motion.g>
    </motion.g>
  );
}
