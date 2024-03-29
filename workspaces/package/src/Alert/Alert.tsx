import classnames from 'classnames';
import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import './Alert.css';

/**
 * An alerting component for bringing attention to a message.
 */
export interface AlertProps extends Omit<BoxProps, 'fill'> {
  /** Color that is applied to the Alert to indicate the type of action */
  color: 'accent' | 'negative' | 'positive';
  /** Applies a filled in style to the alert. */
  fill?: boolean;
}

export const Alert = forwardRef<any, AlertProps>((props, ref) => {
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
});
