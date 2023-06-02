import { motion, MotionProps } from 'framer-motion';
import omit from 'lodash.omit';
import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';

export interface MotionsProps
  extends Omit<MotionProps, 'children'>,
    Omit<
      BoxProps,
      'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'style'
    > {}

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

export const Motion = motion<MotionsProps>(
  forwardRef<Element, MotionsProps>(function Motion(props, ref) {
    return <Box {...(omit(props, motionProps) as BoxProps)} ref={ref} />;
  })
);
