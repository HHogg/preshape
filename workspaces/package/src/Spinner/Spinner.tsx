import { MotionProps } from 'framer-motion';
import { LoaderIcon, LucideProps } from 'lucide-react';
import { forwardRef } from 'react';
import { Motion } from '../Motion/Motion';

/**
 * A spinner component that can be used to indicate loading.
 */
export interface SpinnerProps extends MotionProps {
  /** Size of the spinner */
  size?: LucideProps['size'];
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
        <LoaderIcon display="block" ref={ref} size={size} />
      </Motion>
    );
  }
);
