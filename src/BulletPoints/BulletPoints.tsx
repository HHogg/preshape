import * as React from 'react';
import classnames from 'classnames';
import Base, { Attributes, BaseProps } from '../Base/Base';
import './BulletPoints.css';

export interface BulletPointsProps extends BaseProps {
  numbered?: boolean;
}

const BulletPoints = React.forwardRef<HTMLUListElement, Attributes<HTMLUListElement, BulletPointsProps>>((props, ref) => {
  const { numbered, ...rest } = props;
  const classes = classnames('BulletPoints', {
    'BulletPoints--numbered': numbered,
  });

  return (
    <Base { ...rest }
        className={ classes }
        ref={ ref }
        tag="ul" />
  );
});

export default BulletPoints;
