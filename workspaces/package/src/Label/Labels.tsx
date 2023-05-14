import React, { forwardRef } from 'react';
import Box, { BoxProps } from '../Box/Box';

/**
 * A wrapper component for Label components.
 */
export interface LabelsProps extends BoxProps {}

const Labels: React.ForwardRefRenderFunction<any, LabelsProps> = (
  props,
  ref
) => {
  return (
    <Box
      {...props}
      className="Labels"
      flex="horizontal"
      gap="x1"
      ref={ref}
      wrap
    />
  );
};

export default forwardRef(Labels);
