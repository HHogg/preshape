import { forwardRef } from 'react';
import classnames from 'classnames';
import { TypeSize } from '../types';
import { Box, BoxProps } from '../Box/Box';

/**
 * Button container component that joins or separates child components.
 */
export interface ButtonsProps extends BoxProps {
  /**
   * Spacing applied between child Button items, values are global spacing variables.
   *
   * @default "x1"
   */
  gap?: TypeSize;
  /** Configures the children Buttons to be joined together. */
  joined?: boolean;
}

export const Buttons = forwardRef<any, ButtonsProps>((props, ref) => {
  const { flex = 'horizontal', gap = 'x1', joined, ...rest } = props;
  const classes = classnames('Buttons', {
    'Buttons--joined-horizontal': joined && flex === 'horizontal',
    'Buttons--joined-vertical': joined && flex === 'vertical',
  });

  return (
    <Box
      {...rest}
      className={classes}
      flex={flex}
      gap={joined ? undefined : gap}
      ref={ref}
      shrink
    />
  );
});
