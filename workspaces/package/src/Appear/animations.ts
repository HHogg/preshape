import { Transition, Variant } from 'framer-motion';
import { sizeX4Px, transitionTimingFunction } from '../variables';
import { TypeAnimation } from './Appear';

const defaultTransition: Transition = {
  ease: transitionTimingFunction,
};

const variants: Record<
  TypeAnimation,
  (
    originX?: number,
    originY?: number
  ) => {
    transition?: Transition;
    variants: {
      hidden: Variant;
      visible: Variant;
    };
  }
> = {
  Expand: () => ({
    transition: defaultTransition,
    variants: {
      hidden: {
        height: 0,
        opacity: 0,
        overflow: 'hidden',
      },
      visible: {
        height: 'auto',
        opacity: 1,
        overflow: 'visible',
      },
    },
  }),
  Fade: () => ({
    transition: defaultTransition,
    variants: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    },
  }),
  FadeSlideUp: () => ({
    transition: defaultTransition,
    variants: {
      hidden: {
        opacity: 0,
        y: sizeX4Px,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
  }),
  FadeSlideRight: () => ({
    transition: defaultTransition,
    variants: {
      hidden: {
        opacity: 0,
        x: -sizeX4Px,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },
  }),
  FadeSlideDown: () => ({
    transition: defaultTransition,
    variants: {
      hidden: {
        opacity: 0,
        y: -sizeX4Px,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
  }),
  FadeSlideLeft: () => ({
    transition: defaultTransition,
    variants: {
      hidden: {
        opacity: 0,
        x: sizeX4Px,
      },
      visible: {
        opacity: 1,
        x: 0,
      },
    },
  }),
  Pop: (originX = 0.5, originY = 0.5) => ({
    transition: {
      type: 'spring',
      damping: 15,
      mass: 0.75,
      stiffness: 400,
      velocity: 1,
    },
    variants: {
      hidden: {
        opacity: 0,
        originX: originX,
        originY: originY,
        scale: 0,
      },
      visible: {
        scale: 1,
        originX: originX,
        originY: originY,
        opacity: 1,
      },
    },
  }),
  ScaleYDown: (originX = 0.5, originY = 0) => ({
    transition: defaultTransition,
    variants: {
      hidden: {
        opacity: 0,
        originX: originX,
        originY: originY,
        scaleY: 0,
      },
      visible: {
        opacity: 1,
        originX: originX,
        originY: originY,
        scaleY: 1,
      },
    },
  }),
  ScaleYUp: (originX = 0.5, originY = 1) => ({
    transition: defaultTransition,
    variants: {
      hidden: {
        opacity: 0,
        originX: originX,
        originY: originY,
        scaleY: 0,
      },
      visible: {
        opacity: 1,
        originX: originX,
        originY: originY,
        scaleY: 1,
      },
    },
  }),
};

export default variants;
