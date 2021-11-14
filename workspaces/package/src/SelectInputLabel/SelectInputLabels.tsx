import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import './SelectInputLabels.css';

export interface SelectInputLabelsProps extends BoxProps {}

const BulletPoints: RefForwardingComponent<
  HTMLDivElement,
  Attributes<HTMLDivElement, SelectInputLabelsProps>
> = (props, ref) => {
  return (
    <Box {...props} borderRadius="x2" className="SelectInputLabels" ref={ref} />
  );
};

export default forwardRef(BulletPoints);
