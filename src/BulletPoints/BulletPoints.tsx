import * as React from 'react';
import classnames from 'classnames';
import Base, { Props as BaseProps } from '../Base/Base';
import './BulletPoints.css';

interface Props extends BaseProps {
  numbered?: boolean;
}

const BulletPoints: React.FunctionComponent<Props> = (props: Props) => {
  const { numbered, ...rest } = props;
  const classes = classnames('BulletPoints', {
    'BulletPoints--numbered': numbered,
  });

  return (
    <Base Component="ul" { ...rest } className={ classes } />
  );
};

export default BulletPoints;
