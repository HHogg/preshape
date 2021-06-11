import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';

export interface PlacementContentProps extends BaseProps {

}

const PlacementContent: React.RefForwardingComponent<HTMLElement, Attributes<HTMLElement, PlacementContentProps>> = (props, ref) => {
  return (
    <Base { ...props } container ref={ ref } />
  );
};

export default React.forwardRef(PlacementContent);
