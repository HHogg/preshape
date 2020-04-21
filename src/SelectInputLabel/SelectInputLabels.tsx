import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';
import './SelectInputLabels.css';

export interface SelectInputLabelsProps extends BaseProps {

}

const BulletPoints: React.RefForwardingComponent<HTMLDivElement, Attributes<HTMLDivElement, SelectInputLabelsProps>> = (props, ref) => {
  return (
    <Base { ...props }
        className="SelectInputLabels"
        ref={ ref } />
  );
};

export default React.forwardRef(BulletPoints);
