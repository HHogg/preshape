import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

interface Props extends BoxProps {}

const Form: RefForwardingComponent<
  HTMLFormElement,
  Attributes<HTMLFormElement, Props>
> = (props, ref) => {
  return <Box {...props} ref={ref} tag="form" />;
};

export default forwardRef(Form);
