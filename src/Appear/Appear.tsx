import * as React from 'react';
import { MotionProps, Transition } from 'framer-motion';
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

const defaultTransition = {
  type: 'spring',
  damping: 15,
  mass: 0.75,
  stiffness: 400,
  velocity: 1,
};


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
  /** Callback for when the animation has ended */
  onAnimationEnd?: () => void;
  /** Callback for when the animation has started */
  onAnimationStart?: () => void;
  /** The animation origin on the X axis, from 0 -1 */
  originX?: number;
  /** The animation origin on the Y axis, from 0 -1 */
  originY?: number;
  /**
   * Framer Motion transition.
   */
  transition?: Transition;
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
    originX,
    originY,
    transition,
    visible = true,
    visibleInitially = false,
    ...rest
  } = props;

  const variantsConfig = animations[animation];

  if (!variantsConfig) {
    return null;
  }

  return (
    <Motion { ...rest }
        animate={ visible ? 'visible' : 'hidden' }
        initial={ visibleInitially ? 'visible' : 'hidden' }
        ref={ ref }
        transition={ transition || {
          ...defaultTransition,
          delay: delay / 1000,
        } }
        variants={ animations[animation](originX, originY) } />
  );
};

export default React.forwardRef(Appear);
