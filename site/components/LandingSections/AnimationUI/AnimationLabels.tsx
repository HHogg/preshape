/* eslint-disable */

import * as React from 'react';
import { motion } from 'framer-motion';
import { AnimVariants } from './AnimationUI';

const AnimLabelParent: AnimVariants = {
  init: {
    opacity: 1,
    x: 32,
    y: 116,
  },
  scene1: {
    opacity: 1,
    y: 116,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  scene3: {
    opacity: 0,
    y: 306,
  },
};

const AnimLabel = (x: number = 0, y: number = 0): AnimVariants => ({
  init: {
    originX: 0.5,
    scale: 0,
    x: x,
    y: y,
  },
  scene1: { scale: 1 },
  scene3: { scale: 0 },
});

export default () => {
  return (
    <motion.g
        variants={ AnimLabelParent }
        id="animations_svg__Labels"
        transform="translate(32 116)">
      <motion.g
          variants={ AnimLabel(35.6, 13.2) }
          id="animations_svg__Label-8"
          transform="translate(33.6 11.2)">
        <rect
          id="animations_svg__Rectangle-Copy-23"
          fill="var(--color-text--shade-1)"
          x={0}
          y={0}
          width={22.4}
          height={9.6}
          rx={3.2}
        />
        <path
          d="M3.6 4h15.2c.22 0 .4.18.4.4v.8a.4.4 0 01-.4.4H3.6a.4.4 0 01-.4-.4v-.8c0-.22.18-.4.4-.4z"
          id="animations_svg__Rectangle-Copy-8"
          fill="var(--color-background--shade-1)"
        />
      </motion.g>
      <motion.g
          variants={ AnimLabel(0, 13.2) }
          id="animations_svg__Label-7"
          transform="translate(0 11.2)">
        <path
          d="M3.2 0h25.6A3.2 3.2 0 0132 3.2v3.2a3.2 3.2 0 01-3.2 3.2H3.2A3.2 3.2 0 010 6.4V3.2A3.2 3.2 0 013.2 0z"
          id="animations_svg__Rectangle-Copy-26"
          fill="var(--color-text--shade-1)"
        />
        <path
          d="M3.6 4h24.8c.22 0 .4.18.4.4v.8a.4.4 0 01-.4.4H3.6a.4.4 0 01-.4-.4v-.8c0-.22.18-.4.4-.4z"
          id="animations_svg__Rectangle-Copy-11"
          fill="var(--color-background--shade-1)"
        />
      </motion.g>
      <motion.g
          variants={ AnimLabel(140) }
          id="animations_svg__Label-6"
          transform="translate(130)">
        <rect
          id="animations_svg__Rectangle-Copy-28"
          fill="var(--color-text--shade-1)"
          x={0}
          y={0}
          width={19.2}
          height={9.6}
          rx={3.2}
        />
        <path
          d="M3.6 4h12c.22 0 .4.18.4.4v.8a.4.4 0 01-.4.4h-12a.4.4 0 01-.4-.4v-.8c0-.22.18-.4.4-.4z"
          id="animations_svg__Rectangle-Copy-18"
          fill="var(--color-background--shade-1)"
        />
      </motion.g>
      <motion.g
          variants={ AnimLabel(106) }
          id="animations_svg__Label-5"
          transform="translate(98)">
        <path
          d="M3.2 0h24a3.2 3.2 0 013.2 3.2v3.2a3.2 3.2 0 01-3.2 3.2h-24A3.2 3.2 0 010 6.4V3.2A3.2 3.2 0 013.2 0z"
          id="animations_svg__Rectangle-Copy-27"
          fill="var(--color-text--shade-1)"
        />
        <path
          d="M3.6 4h23.2c.22 0 .4.18.4.4v.8a.4.4 0 01-.4.4H3.6a.4.4 0 01-.4-.4v-.8c0-.22.18-.4.4-.4z"
          id="animations_svg__Rectangle-Copy-17"
          fill="var(--color-background--shade-1)"
        />
      </motion.g>
      <motion.g
          variants={ AnimLabel(82.8) }
          id="animations_svg__Label-4"
          transform="translate(76.8)">
        <rect
          id="animations_svg__Rectangle-Copy-24"
          fill="var(--color-text--shade-1)"
          x={0}
          y={0}
          width={19.2}
          height={9.6}
          rx={3.2}
        />
        <path
          d="M3.6 4h12c.22 0 .4.18.4.4v.8a.4.4 0 01-.4.4h-12a.4.4 0 01-.4-.4v-.8c0-.22.18-.4.4-.4z"
          id="animations_svg__Rectangle-Copy-9"
          fill="var(--color-background--shade-1)"
        />
      </motion.g>
      <motion.g
          variants={ AnimLabel(60) }
          id="animations_svg__Label-3"
          transform="translate(56)">
        <rect
          id="animations_svg__Rectangle-Copy-22"
          fill="var(--color-accent--shade-2)"
          x={0}
          y={0}
          width={19.2}
          height={9.6}
          rx={3.2}
        />
        <path
          d="M3.6 4h12c.22 0 .4.18.4.4v.8a.4.4 0 01-.4.4h-12a.4.4 0 01-.4-.4v-.8c0-.22.18-.4.4-.4z"
          id="animations_svg__Rectangle-Copy-7"
          fill="#FAFCFF"
        />
      </motion.g>
      <motion.g
          variants={ AnimLabel(26) }
          id="animations_svg__Label-2"
          transform="translate(24)">
        <path
          d="M3.2 0h24a3.2 3.2 0 013.2 3.2v3.2a3.2 3.2 0 01-3.2 3.2h-24A3.2 3.2 0 010 6.4V3.2A3.2 3.2 0 013.2 0z"
          id="animations_svg__Rectangle-Copy-25"
          fill="var(--color-text--shade-1)"
        />
        <path
          d="M3.6 4h23.2c.22 0 .4.18.4.4v.8a.4.4 0 01-.4.4H3.6a.4.4 0 01-.4-.4v-.8c0-.22.18-.4.4-.4z"
          id="animations_svg__Rectangle-Copy-10"
          fill="var(--color-background--shade-1)"
        />
      </motion.g>
      <motion.g
          variants={ AnimLabel() }
          id="animations_svg__Label-1">
        <rect
          id="animations_svg__Rectangle-Copy-21"
          fill="var(--color-text--shade-1)"
          x={0}
          y={0}
          width={22.4}
          height={9.6}
          rx={3.2}
        />
        <rect
          id="animations_svg__Rectangle-Copy-6"
          fill="var(--color-background--shade-1)"
          x={3.2}
          y={4}
          width={16}
          height={1.6}
          rx={0.4}
        />
      </motion.g>
    </motion.g>
  );
}
