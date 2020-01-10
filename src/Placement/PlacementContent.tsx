import * as React from 'react';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';

export interface PlacementContentProps extends FlexProps {

}

const PlacementContent: React.RefForwardingComponent<HTMLElement, Attributes<HTMLElement, PlacementContentProps>> = (props, ref) => {
  return (
    <Flex { ...props } container ref={ ref } />
  );
};

export default React.forwardRef(PlacementContent);
