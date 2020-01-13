/* eslint-disable */

import * as React from 'react';
import { motion } from 'framer-motion';
import { AnimVariants } from './AnimationUI';

const RowSize = 26;

const AnimTableContainer: AnimVariants = {
  init: {
    // opacity: 0,
    x: 0,
    y: 144,
  },
  scene1: {
    // opacity: 1,
    y: 144,
    transition: {
      staggerChildren: 0.15,
      // when: 'beforeChildren',
    }
  },
  scene2: {
    y: 64,
  },
}

const AnimTable = {
  scene1: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
  scene2: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1,
    },
  },
};

const AnimRow: AnimVariants = {
  init: {
    opacity: 0,
  },
  scene1: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  },
  scene3: {  },
};

const AnimRowAfter = (y: number): AnimVariants => ({
  init: {
    opacity: 0,
    y: y + 32,
  },
  scene1: {
    opacity: 0,
    y: y + 32,
    transition: {
      when: 'beforeChildren',
    }
  },
  scene2: {
    opacity: 1,
    y: y,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  },
  scene3: {  },
});

const AnimCellAfter: AnimVariants = {
  init: {
    originX: 0,
    scaleX: 0,
  },
  scene1: { scaleX: 0 },
  scene2: { scaleX: 1 },
  scene3: { scaleX: 1 },
};

const AnimCell: AnimVariants = {
  init: {
    originX: 0,
    scaleX: 0,
  },
  scene1: { scaleX: 1 },
  scene3: {  },
};

const AnimDot: AnimVariants = {
  init: {
    originX: 0.5,
    scale: 0,
  },
  scene1: { scale: 1 },
  scene3: {  },
};

const AnimCheckbox = {
  init: {
    originX: 0.5,
    scale: 0,
    x: 401,
    y: 0,
  },
  scene1: { scale: 1 },
  scene3: {  },
};

const AnimButton = (x: number): AnimVariants => ({
  init: {
    originX: 0.5,
    scale: 0,
    x: x,
    y: 176,
  },
  scene1: {
    scale: 1,
    y: 176,
  },
  scene2: { y: 176 + (RowSize * 3) },
  scene3: {  },
});


export default () => {
  return (
    <motion.g variants={ AnimTableContainer } transform="translate(0 144)">
      <motion.g
          variants={ AnimCheckbox }
          id="animations_svg__Checkbox"
          transform="translate(401 144)">
        <rect
          id="animations_svg__Rectangle-Copy-3"
          fill="var(--color-text--shade-1)"
          x={0}
          y={0}
          width={95}
          height={20}
          rx={1}
        />
        <rect
          id="animations_svg__Rectangle-Copy-4"
          fill="var(--color-background--shade-1)"
          x={6}
          y={5}
          width={10}
          height={10}
          rx={0.5}
        />
        <rect
          id="animations_svg__Rectangle-Copy-5"
          fill="var(--color-accent--shade-2)"
          x={9}
          y={8}
          width={4}
          height={4}
          rx={0.5}
        />
        <rect
          id="animations_svg__Rectangle-Copy"
          fill="var(--color-background--shade-1)"
          x={22}
          y={8}
          width={64}
          height={4}
          rx={0.5}
        />
      </motion.g>

      <motion.g
          variants={ AnimTable }
          id="animations_svg__Table"
          transform="translate(32 36)">
        <motion.g
            variants={ AnimRow }
            id="animations_svg__Header"
            fill="var(--color-text--shade-1)">
          <rect
            id="animations_svg__Divider"
            x={0}
            y={16}
            width={464}
            height={4}
            rx={1}
          />
          <motion.rect
            variants={ AnimCell }
            id="animations_svg__Cell-6"
            x={408}
            y={0}
            width={56}
            height={8}
            rx={1}
          />
          <motion.rect
            variants={ AnimCell }
            id="animations_svg__Cell-5"
            x={304}
            y={0}
            width={92}
            height={8}
            rx={1}
          />
          <motion.rect
            variants={ AnimCell }
            id="animations_svg__Cell-4"
            x={244}
            y={0}
            width={48}
            height={8}
            rx={1}
          />
          <motion.rect
            variants={ AnimCell }
            id="animations_svg__Cell-3"
            x={176}
            y={0}
            width={56}
            height={8}
            rx={1}
          />
          <motion.rect
            variants={ AnimCell }
            id="animations_svg__Cell-2"
            x={116}
            y={0}
            width={48}
            height={8}
            rx={1}
          />
          <motion.rect
            variants={ AnimCell }
            id="animations_svg__Cell-1"
            x={20}
            y={0}
            width={56}
            height={8}
            rx={1}
          />
        </motion.g>

        { Array.from({ length: 7 }).map((_, index) => (
          <motion.g
              key={ index }
              transform={ `translate(0, ${28 + (index * RowSize)})` }
              variants={ index >= 4 ? AnimRowAfter(28 + (index * RowSize)) : AnimRow }
              id="animations_svg__Row-4">
            <rect
              id="animations_svg__Divider"
              fill="var(--color-text--shade-1)"
              x={0}
              y={16}
              width={464}
              height={2}
              rx={1}
            />
            <motion.rect
              variants={ index >= 4 ? AnimCellAfter : AnimCell }
              id="animations_svg__Cell-6"
              fill="var(--color-text--shade-1)"
              x={432}
              y={0}
              width={32}
              height={8}
              rx={1}
            />
            <motion.rect
              variants={ index >= 4 ? AnimCellAfter : AnimCell }
              id="animations_svg__Cell-5"
              fill="var(--color-text--shade-1)"
              x={350}
              y={0}
              width={46}
              height={8}
              rx={1}
            />
            <motion.rect
              variants={ index >= 4 ? AnimCellAfter : AnimCell }
              id="animations_svg__Cell-4"
              fill="var(--color-text--shade-1)"
              x={268}
              y={0}
              width={24}
              height={8}
              rx={1}
            />
            <motion.rect
              variants={ index >= 4 ? AnimCellAfter : AnimCell }
              id="animations_svg__Cell-3"
              fill="var(--color-text--shade-1)"
              x={200}
              y={0}
              width={32}
              height={8}
              rx={1}
            />
            <motion.rect
              variants={ index >= 4 ? AnimCellAfter : AnimCell }
              id="animations_svg__Cell-2"
              fill="var(--color-text--shade-1)"
              x={140}
              y={0}
              width={24}
              height={8}
              rx={1}
            />
            <motion.rect
              variants={ index >= 4 ? AnimCellAfter : AnimCell }
              id="animations_svg__Cell-1"
              fill="var(--color-text--shade-1)"
              x={20}
              y={0}
              width={72}
              height={8}
              rx={1}
            />
            <motion.rect
              variants={ AnimDot }
              id="animations_svg__Dot"
              fill="var(--color-accent--shade-2)"
              x={8}
              y={0}
              width={8}
              height={8}
              rx={4}
            />
          </motion.g>
        )) }
      </motion.g>

      <motion.g
          variants={ AnimButton(424) }
          id="animations_svg__Button-Left">
        <path
          d="M2 0h28a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"
          id="animations_svg__Rectangle-Copy-52"
          fill="var(--color-text--shade-1)"
        />
        <path
          id="animations_svg__Rectangle-Copy-53"
          fill="var(--color-background--shade-1)"
          d="M12 6h8v4h-8z"
        />
      </motion.g>

      <motion.g
          variants={ AnimButton(464) }
          id="animations_svg__Button-Right"
          transform="translate(464 320)">
        <path
          d="M2 0h28a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"
          id="animations_svg__Rectangle-Copy-10"
          fill="var(--color-text--shade-1)"
        />
        <path
          id="animations_svg__Rectangle"
          fill="var(--color-background--shade-1)"
          d="M12 6h8v4h-8z"
        />
      </motion.g>
    </motion.g>
  );
}
