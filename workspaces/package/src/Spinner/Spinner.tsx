import { MotionProps } from 'framer-motion';
import { forwardRef } from 'react';
import * as Icons from '../Icon';
import { Motion } from '../Motion/Motion';

/**
 * A spinner component that can be used to indicate loading.
 */
export interface SpinnerProps extends MotionProps {
  /** Size of the spinner */
  size?: Icons.Props['size'];
}

export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ size = '1.5rem', ...rest }, ref) => {
    return (
      <Motion
        {...rest}
        animate={{ rotate: 360 }}
        display="block"
        transition={{
          ease: 'linear',
          repeat: Infinity,
          duration: 2,
        }}
      >
        <Icons.Loader display="block" ref={ref} size={size} />
      </Motion>
    );
  }
);
