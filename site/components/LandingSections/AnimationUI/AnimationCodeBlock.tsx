/* eslint-disable */

import * as React from 'react';
import { motion } from 'framer-motion';
import { AnimVariants } from './AnimationUI';

const AnimCode: AnimVariants = {
  init: {
    x: 32,
    y: 207,
  },
  scene1: {
    y: 207,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  scene2: {
    y: 171,
  },
  scene3: {
    y: 397,
  },
};

const AnimGutter: AnimVariants = {
  init: {
    originY: 0,
    scaleY: 0,
  },
  scene1: { scaleY: 1 },
  scene2: { scaleY: 1.65 },
  scene3: { scaleY: 0 },
};

const AnimBlocks: AnimVariants = {
  scene1: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const AnimBlock1: AnimVariants = {
  init: {
    originX: 0,
    scaleX: 0,
  },
  scene1: { scaleX: 1 },
  scene3: { scaleX: 0 },
};

const AnimBlock2: AnimVariants = {
  init: {
    originX: 0,
    scaleX: 0,
  },
  scene2: { scaleX: 1 },
  scene3: { scaleX: 0 },
};

const AnimPlacement: AnimVariants = {
  init: {
    opacity: 0,
    originX: 0.5,
    scale: 0,
    x: -42,
    y: -36,
  },
  scene1: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
    },
  },
  scene2: {
    scale: 0,
  },
};

const blocks: [number, number, number, boolean?, boolean?][] = [
  [10, 149, 9, false, true],
  [21, 139, 9, false, true],
  [14, 139, 5, false, true],
  [24, 129, 16, false, true],
  [35, 119, 16, false, true],
  [27, 119, 5, false, true],
  [14, 119, 10, false, true],
  [18, 109, 8, true, true],
  [10, 109, 5, false, true],
  [10, 86, 16],
  [31, 76, 5],
  [23, 76, 5, true],
  [15, 76, 5],
  [10, 66, 32],
  [45, 43.684, 5, true],
  [10, 43.684, 32],
  [76, 32.684, 16],
  [50, 32.684, 24],
  [42, 32.684, 5],
  [26, 32.684, 13],
  [16, 32.684, 8],
  [92, 22.684, 8],
  [79, 22.684, 11, true],
  [60, 22.684, 16],
  [50, 22.684, 8],
  [39, 22.684, 8],
  [21, 22.684, 16],
  [74, 11.684, 8],
  [63, 11.684, 8],
  [29, 11.684, 32],
  [16, 11.684, 11, true],
  [58, 0.684, 13],
  [45, 0.684, 11],
  [34, 0.684, 8],
  [11, 0.684, 21],
]


export default () => {
  return  (
    <motion.g
        variants={ AnimCode }
        id="animations_svg__Code-Block"
        transform="translate(32 207)">
    <motion.g
        variants={ AnimPlacement }
        id="animations_svg__Placement"
        transform="translate(-12 168)"
        fill="var(--color-text--shade-1)"
      >
        <rect
          id="animations_svg__Rectangle-Copy-6"
          x={0}
          y={0}
          width={128}
          height={27}
          rx={2}
        />
        <path
          d="M60.483 21.261l7.055-.048a2 2 0 012.013 2.014l-.047 7.055a2 2 0 01-1.987 1.986l-7.055.048a2 2 0 01-2.013-2.013l.047-7.055a2 2 0 011.987-1.987z"
          id="animations_svg__Rectangle-Copy-7"
          transform="rotate(45 64 26.765)"
        />
      </motion.g>

      <motion.g variants={ AnimBlocks }>
        { blocks.map(([x, y, width, accent, scene2], index) => (
          <motion.rect
            variants={ scene2 ? AnimBlock2 : AnimBlock1 }
            id="animations_svg__Code-18"
            fill={ accent
              ? 'var(--color-accent--shade-2)'
              : 'var(--color-text--shade-1)' }
            key={index}
            x={x}
            y={y}
            width={width}
            height={5}
            rx={1}
          />
        )) }
      </motion.g>

      <motion.rect
          variants={ AnimGutter }
          id="animations_svg__Gutter"
          fill="var(--color-text--shade-1)"
          x={0}
          y={-2}
          width={3}
          height={96}
          rx={1}
        />
    </motion.g>
  );
};
