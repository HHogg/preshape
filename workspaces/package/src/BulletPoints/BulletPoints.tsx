import classnames from 'classnames';
import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import './BulletPoints.css';

/**
 * A vertical list component for listing your todos,
 * ordered and chaos modes included.
 */
export interface BulletPointsProps extends BoxProps {
  /**
   * Replaces the default unordered list styling with
   * numbers... everyone likes a bit of order.
   */
  numbered?: boolean;
}

export const BulletPoints = forwardRef<
  HTMLUListElement | HTMLOListElement,
  BulletPointsProps
>((props, ref) => {
  const { numbered, ...rest } = props;
  const classes = classnames('BulletPoints', {
    'BulletPoints--numbered': numbered,
  });

  return (
    <Box {...rest} className={classes} ref={ref} tag={numbered ? 'ol' : 'ul'} />
  );
});
