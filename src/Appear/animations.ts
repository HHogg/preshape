import { Variants } from 'framer-motion';
import { sizeX4Px } from '../variables';
import { TypeAnimation } from './Appear';

const variants: {
  [key in TypeAnimation]: Variants;
} = {
  Fade: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
  FadeSlideUp: {
    hidden: {
      opacity: 0,
      origin: 0.5,
      y: sizeX4Px,
    },
    visible: {
      opacity: 1,
      origin: 0.5,
      y: 0,
    },
  },
  FadeSlideRight: {
    hidden: {
      opacity: 0,
      origin: 0.5,
      x: -sizeX4Px,
    },
    visible: {
      opacity: 1,
      origin: 0.5,
      x: 0,
    },
  },
  FadeSlideDown: {
    hidden: {
      opacity: 0,
      origin: 0.5,
      y: -sizeX4Px,
    },
    visible: {
      opacity: 1,
      origin: 0.5,
      y: 0,
    },
  },
  FadeSlideLeft: {
    hidden: {
      opacity: 0,
      origin: 0.5,
      x: sizeX4Px,
    },
    visible: {
      opacity: 1,
      origin: 0.5,
      x: 0,
    },
  },
  Pop: {
    hidden: {
      scale: 0,
      opacity: 1,
      origin: 0.5,
    },
    visible: {
      scale: 1,
      opacity: 1,
      origin: 0.5,
    },
  },
  ScaleYDown: {
    hidden: {
      originY: 0,
      scaleY: 0,
    },
    visible: {
      originY: 0,
      scaleY: 1,
    },
  },
  ScaleYUp: {
    hidden: {
      originY: 1,
      scaleY: 0,
    },
    visible: {
      originY: 1,
      scaleY: 1,
    },
  },
};

export default variants;
