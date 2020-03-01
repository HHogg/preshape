import { Variant } from 'framer-motion';
import { sizeX4Px } from '../variables';
import { TypeAnimation } from './Appear';

const variants: {
  [key in TypeAnimation]: (originX?: number, originY?: number) => {
    hidden: Variant;
    visible: Variant;
  };
} = {
  Expand: () => ({
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
  }),
  Fade: () => ({
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }),
  FadeSlideUp: () => ({
    hidden: {
      opacity: 0,
      y: sizeX4Px,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }),
  FadeSlideRight: () => ({
    hidden: {
      opacity: 0,
      x: -sizeX4Px,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }),
  FadeSlideDown: () => ({
    hidden: {
      opacity: 0,
      y: -sizeX4Px,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }),
  FadeSlideLeft: () => ({
    hidden: {
      opacity: 0,
      x: sizeX4Px,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  }),
  Pop: (originX = 0.5, originY = 0.5) => ({
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
  }),
  ScaleYDown: (originX = 0.5, originY = 0) => ({
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
  }),
  ScaleYUp: (originX = 0.5, originY = 1) => ({
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
  }),
};

export default variants;
