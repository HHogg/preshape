import * as React from 'react';
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
  React.forwardRef<Element, MotionsProps>((props, ref) =>
    <Box { ...omit(props, motionProps) as BoxProps } ref={ ref } />
  ));

export default Motion;
