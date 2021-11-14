import * as React from 'react';
import classnames from 'classnames';
import Box, { Attributes, BoxProps, TypeSize } from '../Box/Box';

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

const Buttons: React.RefForwardingComponent<
  HTMLElement,
  Attributes<HTMLElement, ButtonsProps>
> = (props, ref) => {
  const { gap = 'x1', joined, ...rest } = props;
  const classes = classnames('Buttons', {
    'Buttons--joined': joined,
  });

  return (
    <Box
      {...rest}
      className={classes}
      flex="horizontal"
      gap={joined ? undefined : gap}
      ref={ref}
      shrink
    />
  );
};

export default React.forwardRef(Buttons);
