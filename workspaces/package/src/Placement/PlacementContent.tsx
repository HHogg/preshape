import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

export interface PlacementContentProps extends BoxProps {}

const PlacementContent: RefForwardingComponent<
  HTMLElement,
  Attributes<HTMLElement, PlacementContentProps>
> = (props, ref) => {
  return <Box {...props} container ref={ref} />;
};

export default forwardRef(PlacementContent);
