import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';

export interface BulletPointProps extends BaseProps {}

const BulletPoint: React.RefForwardingComponent<HTMLLIElement, Attributes<HTMLLIElement, BulletPointProps>> = (props, ref) => {
  return (
    <Base { ...props }
        className="BulletPoints__point"
        ref={ ref }
        tag="li" />
  );
};

export default React.forwardRef(BulletPoint);
