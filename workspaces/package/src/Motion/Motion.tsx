import { motion, MotionProps } from 'framer-motion';
import { Box, BoxProps } from '../Box/Box';

export interface MotionsProps
  extends Omit<MotionProps, 'children'>,
    Omit<
      BoxProps,
      'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'style'
    > {}

export const Motion = motion.create(Box, { forwardMotionProps: false });
