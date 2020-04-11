import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';

export interface BulletPointProps extends BaseProps {}

const BulletPoint: React.RefForwardingComponent<HTMLLIElement, Attributes<HTMLLIElement, BulletPointProps>> = (props, ref) => {
  const { children, ...rest } = props;

  return (
    <Base { ...rest }
        className="BulletPoints__point"
        ref={ ref }
        tag="li">
      <Base className="BulletPoints__point-content">{ children }</Base>
    </Base>
  );
};

export default React.forwardRef(BulletPoint);
