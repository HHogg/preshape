import * as React from 'react';
import classnames from 'classnames';
import Base, { Attributes, BaseProps } from '../Base/Base';
import './BulletPoints.css';

export interface BulletPointsProps extends BaseProps {
  /**
   * Replaces the default unordered list styling with
   * numbers... everyone likes a bit of order.
   */
  numbered?: boolean;
}

const BulletPoints: React.RefForwardingComponent<HTMLUListElement, Attributes<HTMLUListElement, BulletPointsProps>> = (props, ref) => {
  const { numbered, ...rest } = props;
  const classes = classnames('BulletPoints', {
    'BulletPoints--numbered': numbered,
  });

  return (
    <Base { ...rest }
        className={ classes }
        ref={ ref }
        tag={ numbered ? 'ol' : 'ul' } />
  );
};

export default React.forwardRef(BulletPoints);
