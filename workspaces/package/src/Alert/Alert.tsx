import * as React from 'react';
import classnames from 'classnames';
import Box, { Attributes, BoxProps } from '../Box/Box';
import './Alert.css';

/**
 * An alerting component for bringing attention to a message.
 */
export interface AlertProps extends BoxProps {
  /** Color that is applied to the Alert to indicate the type of action */
  color: 'accent' | 'negative' | 'positive';
  /** Applies a filled in style to the alert. */
  fill?: boolean;
}

const Alert: React.RefForwardingComponent<
  HTMLDivElement,
  Attributes<HTMLDivElement, AlertProps>
> = (props, ref) => {
  const {
    borderRadius = 'x2',
    borderSize = 'x2',
    color,
    fill,
    ...rest
  } = props;

  const classes = classnames('Alert', `Alert--${color}`, {
    'Alert--fill': fill,
  });

  return (
    <Box
      {...rest}
      borderRadius={borderRadius}
      borderSize={borderSize}
      className={classes}
      ref={ref}
    />
  );
};

export default React.forwardRef(Alert);
