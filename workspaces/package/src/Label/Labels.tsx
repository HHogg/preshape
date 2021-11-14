import * as React from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

export interface LabelsProps extends BoxProps {}

const Labels: React.RefForwardingComponent<
  HTMLElement,
  Attributes<HTMLElement, LabelsProps>
> = (props, ref) => {
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

export default React.forwardRef(Labels);
