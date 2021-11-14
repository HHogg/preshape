import React, { forwardRef, RefForwardingComponent } from 'react';
import classnames from 'classnames';
import Box, { Attributes, BoxProps } from '../Box/Box';
import './BulletPoints.css';

export interface BulletPointsProps extends BoxProps {
  /**
   * Replaces the default unordered list styling with
   * numbers... everyone likes a bit of order.
   */
  numbered?: boolean;
}

const BulletPoints: RefForwardingComponent<
  HTMLUListElement,
  Attributes<HTMLUListElement, BulletPointsProps>
> = (props, ref) => {
  const { numbered, ...rest } = props;
  const classes = classnames('BulletPoints', {
    'BulletPoints--numbered': numbered,
  });

  return (
    <Box {...rest} className={classes} ref={ref} tag={numbered ? 'ol' : 'ul'} />
  );
};

export default forwardRef(BulletPoints);
