import * as React from 'react';
import { MotionProps } from 'framer-motion';
import { transitionTimeFast, transitionTimingFunction } from '../variables';
import animations from './animations';
import { Attributes } from '../Base/Base';
import { FlexProps } from '../Flex/Flex';
import Motion from '../Motion/Motion';

export type TypeAnimation =
  'Expand' |
  'Fade' |
  'FadeSlideUp' |
  'FadeSlideRight' |
  'FadeSlideDown' |
  'FadeSlideLeft' |
  'Pop' |
  'ScaleYDown' |
  'ScaleYUp';


/**
 * Using framer-motion, the Appear component provides a variety of
 * ways to make parts of the UI appear in style.
 */
export interface AppearProps extends FlexProps, MotionProps {
  /**
   * Name of the animation to play when the visibility state changes.
   *
   * @default "FadeSlideUp"
   */
  animation?: TypeAnimation;
  /**
   * Time (in milliseconds) that the animation is delayed for.
   *
   * @default 0
   */
  delay?: number;
  /**
   * Duration (in milliseconds) of the animation from start to finish.
   *
   * @default 200
   */
  duration?: number;
  /** Callback for when the animation has ended */
  onAnimationEnd?: () => void;
  /** Callback for when the animation has started */
  onAnimationStart?: () => void;
  /**
   * Trigger for appearance/disappearance animation.
   *
   * @default true
   * */
  visible?: boolean;
  /**
   * The iniital visibility state, which determines the starting
   * animation state.
   *
   * @default false
   */
  visibleInitially?: boolean;
}

const Appear: React.RefForwardingComponent<HTMLElement, Attributes<HTMLElement, AppearProps>> = (props, ref) => {
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
    <Motion { ...rest }
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
};

export default React.forwardRef(Appear);
