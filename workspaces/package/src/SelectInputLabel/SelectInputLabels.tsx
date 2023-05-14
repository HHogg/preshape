import React, { forwardRef } from 'react';
import Box, { BoxProps } from '../Box/Box';
import './SelectInputLabels.css';

export interface SelectInputLabelsProps extends BoxProps {}

const BulletPoints: React.ForwardRefRenderFunction<
  any,
  SelectInputLabelsProps
> = (props, ref) => {
  return (
    <Box {...props} borderRadius="x2" className="SelectInputLabels" ref={ref} />
  );
};

export default forwardRef(BulletPoints);
