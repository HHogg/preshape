/* eslint-disable */

import * as React from 'react';
import { motion } from 'framer-motion';
import { AnimVariants } from './AnimationUI';

const AnimChart: AnimVariants = {
  init: {
    x: 32,
    y: -154,
  },
  scene1: {
    y: -154,
  },
  scene3: {
    y: 31,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  }
};

const AnimXAxis: AnimVariants = {
  init: {
    opacity: 0,
    originX: 0,
    scaleX: 0,
  },
  scene1: {
    opacity: 0,
    originX: 0,
    scaleX: 0,
  },
  scene3: {
   opacity: 1,
   scaleX: 1,
  },
};

const AnimYAxis: AnimVariants = {
  init: {
    opacity: 0,
    originY: 1,
    scaleY: 0,
  },
  scene1: {
    opacity: 0,
    originY: 0,
    scaleY: 0,
  },
  scene3: {
   opacity: 1,
   scaleY: 1,
  },
};

const AnimTitle: AnimVariants = {
  init: {
    opacity: 0,
    originX: 0,
    scaleX: 0,
  },
  scene1: {
    opacity: 0,
    originX: 0,
    scaleX: 0,
  },
  scene3: {
   opacity: 1,
   scaleX: 1,
  },
};

const AnimBar = (): AnimVariants => ({
  init: {
    opacity: 0,
    originY: 1,
    scaleY: 0,
  },
  scene1: {
    opacity: 0,
    originY: 1,
    scaleY: 0,
  },
  scene3: {
   opacity: 1,
   scaleY: Math.random() * (0.95 - 0.25) + 0.25,
  },
});

export default () => {
  return (
    <motion.g variants={AnimChart} id="ui-screen-3_svg__BarChart" transform="translate(32 31)">
      <g id="ui-screen-3_svg__Group-5" transform="translate(132)">
        <motion.rect
          variants={AnimBar()}
          id="ui-screen-3_svg__Line-1-Copy-12"
          fill="#E64980"
          x={20}
          y={0}
          width={8}
          height={143}
          rx={1}
        />
        <motion.rect
          variants={AnimBar()}
          id="ui-screen-3_svg__Line-1-Copy-11"
          fill="var(--color-accent--shade-2)"
          x={10}
          y={0}
          width={8}
          height={143}
          rx={1}
        />
        <motion.rect
          variants={AnimBar()}
          id="ui-screen-3_svg__Line-1-Copy-10"
          fill="#12B886"
          x={0}
          y={0}
          width={8}
          height={143}
          rx={1}
        />
      </g>
      <g id="ui-screen-3_svg__Group-4" transform="translate(92)">
        <motion.rect
          variants={AnimBar()}
          id="ui-screen-3_svg__Line-1-Copy-9"
          fill="#E64980"
          x={20}
          y={0}
          width={8}
          height={143}
          rx={1}
        />
        <motion.rect
          variants={AnimBar()}
          id="ui-screen-3_svg__Line-1-Copy-8"
          fill="var(--color-accent--shade-2)"
          x={10}
          y={0}
          width={8}
          height={143}
          rx={1}
        />
        <motion.rect
          variants={AnimBar()}
          id="ui-screen-3_svg__Line-1-Copy-7"
          fill="#12B886"
          x={0}
          y={0}
          width={8}
          height={143}
          rx={1}
        />
      </g>
      <g id="ui-screen-3_svg__Group-3" transform="translate(52)">
        <motion.rect
          variants={AnimBar()}
          id="ui-screen-3_svg__Line-1-Copy-6"
          fill="#E64980"
          x={20}
          y={0}
          width={8}
          height={143}
          rx={1}
        />
        <motion.rect
          variants={AnimBar()}
          id="ui-screen-3_svg__Line-1-Copy-5"
          fill="var(--color-accent--shade-2)"
          x={10}
          y={0}
          width={8}
          height={143}
          rx={1}
        />
        <motion.rect
          variants={AnimBar()}
          id="ui-screen-3_svg__Line-1-Copy-4"
          fill="#12B886"
          x={0}
          y={0}
          width={8}
          height={143}
          rx={1}
        />
      </g>
      <g id="ui-screen-3_svg__Group" transform="translate(12)">
        <motion.rect
          variants={AnimBar()}
          id="ui-screen-3_svg__Line-1-Copy-3"
          fill="#E64980"
          x={20}
          y={0}
          width={8}
          height={143}
          rx={1}
        />
        <motion.rect
          variants={AnimBar()}
          id="ui-screen-3_svg__Line-1-Copy-2"
          fill="var(--color-accent--shade-2)"
          x={10}
          y={0}
          width={8}
          height={143}
          rx={1}
        />
        <motion.rect
          variants={AnimBar()}
          id="ui-screen-3_svg__Line-1-Copy"
          fill="#12B886"
          x={0}
          y={0}
          width={8}
          height={143}
          rx={1}
        />
      </motion.g>
      <motion.rect
        variants={AnimTitle}
        id="ui-screen-3_svg__Title"
        fill="var(--color-text--shade-1)"
        x={52}
        y={149}
        width={64}
        height={4}
        rx={1}
      />
      <motion.rect
        variants={AnimYAxis}
        id="ui-screen-3_svg__yAxis"
        fill="var(--color-text--shade-1)"
        x={0}
        y={0}
        width={2}
        height={144}
        rx={1}
      />
      <motion.rect
        variants={AnimXAxis}
        id="ui-screen-3_svg__xAxis"
        fill="var(--color-text--shade-1)"
        x={0}
        y={142}
        width={168}
        height={2}
        rx={1}
      />
    </motion.g>
  );
};
