import React, { forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';
import omit from 'lodash.omit';
import Box, { Attributes, BoxProps } from '../Box/Box';

type MotionsProps = Attributes<Element, MotionProps & BoxProps>;

const motionProps: (keyof MotionProps | 'positionTransition')[] = [
  'animate',
  'initial',
  'onAnimationComplete',
  'onAnimationStart',
  'positionTransition',
  'transition',
  'variants',
  'whileHover',
  'whileTap',
];

const Motion = motion<MotionsProps>(
  forwardRef<Element, MotionsProps>(function Motion(props, ref) {
    return <Box {...(omit(props, motionProps) as BoxProps)} ref={ref} />;
  })
);

export default Motion;
