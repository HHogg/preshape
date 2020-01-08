import * as React from 'react';
import { motion, MotionProps } from 'framer-motion';
import omit from 'lodash.omit';
import { transitionTimeFast, transitionTimingFunction } from '../variables';
import animations from './animations';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';

const motionProps: (keyof MotionProps)[] = [
  'animate',
  'initial',
  'onAnimationComplete',
  'onAnimationStart',
  'style',
  'transition',
  'variants',
];

const FlexMotion = motion.custom<FlexProps>(
  React.forwardRef<HTMLElement, FlexProps>((props, ref) =>
    <Flex { ...omit(props, motionProps) } ref={ ref } />
  ));

export type TypeAnimation =
  'Fade' |
  'FadeSlideUp' |
  'FadeSlideRight' |
  'FadeSlideDown' |
  'FadeSlideLeft' |
  'Pop' |
  'ScaleYDown' |
  'ScaleYUp';

export interface AppearProps extends FlexProps, MotionProps {
  /**
   * Type of animation that is applied when appearing and disappearing.
   *
   * @default "FadeSlideUp"
   */
  animation?: TypeAnimation;
    // 'ScaleYUp';
  /**
   * Time (in milliseconds) that the appearance/disappearance animation is delayed for.
   *
   * @default 0
   */
  delay?: number;
  /**
   * @default 200
   */
  duration?: number;
  /** */
  onAnimationEnd?: () => void;
  /** */
  onAnimationStart?: () => void;
  /**
   * Trigger for appearance/disappearance animation.
   *
   * @default true
   * */
  visible?: boolean;
  /**
   * @default false
   */
  visibleInitially?: boolean;
}

const Appear = React.forwardRef<HTMLElement, Attributes<HTMLElement, AppearProps>>((props, ref) => {
  const {
    animation = 'FadeSlideUp',
    delay = 0,
    duration = transitionTimeFast,
    visible = true,
    visibleInitially = false,
    ...rest
  } = props;

  if (!animations[animation]) {
    return null;
  }

  return (
    <FlexMotion { ...rest }
        animate={ visible ? 'visible' : 'hidden' }
        initial={ visibleInitially ? 'visible' : 'hidden' }
        ref={ ref }
        transition={ {
          ease: transitionTimingFunction,
          delay: delay / 1000,
          duration: duration / 1000,
        } }
        variants={ animations[animation] } />
  );
});

export default Appear;
