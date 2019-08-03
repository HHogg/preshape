import * as React from 'react';
import Base, { Props as BaseProps } from '../Base/Base';

interface Props extends BaseProps {}

const BulletPoint: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Base Component="li" { ...props } className="BulletPoints__point" />
  );
};

export default BulletPoint;
