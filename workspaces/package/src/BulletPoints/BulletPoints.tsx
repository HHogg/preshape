import classnames from 'classnames';
import { forwardRef } from 'react';
import { Text, TextProps } from '../Text/Text';
import './BulletPoints.css';

/**
 * A vertical list component for listing your todos,
 * ordered and chaos modes included.
 */
export interface BulletPointsProps extends TextProps {
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
    <Text
      {...rest}
      className={classes}
      ref={ref}
      tag={numbered ? 'ol' : 'ul'}
    />
  );
});
