import * as React from 'react';
import { motion, MotionProps } from 'framer-motion';
import omit from 'lodash.omit';
import Base, { Attributes, BaseProps } from '../Base/Base';

type MotionsProps = Attributes<Element, MotionProps & BaseProps>;

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
    <Base { ...omit(props, motionProps) } ref={ ref } />
  ));

export default Motion;
