import * as React from 'react';
import { motion, MotionProps } from 'framer-motion';
import omit from 'lodash.omit';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';

type MotionsProps = Attributes<Element, MotionProps & FlexProps>;

const motionProps: (keyof MotionProps)[] = [
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

const Motion = motion.custom<MotionsProps>(
  React.forwardRef<Element, MotionsProps>((props, ref) =>
    <Flex { ...omit(props, motionProps) } ref={ ref } />
  ));

export default Motion;
