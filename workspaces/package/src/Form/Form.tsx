import * as React from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

interface Props extends BoxProps {}

const Form: React.RefForwardingComponent<
  HTMLFormElement,
  Attributes<HTMLFormElement, Props>
> = (props, ref) => {
  return <Box {...props} ref={ref} tag="form" />;
};

export default React.forwardRef(Form);
