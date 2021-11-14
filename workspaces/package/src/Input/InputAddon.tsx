import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import './Input.css';

export interface InputAddonProps extends BoxProps {}

const InputAddon: RefForwardingComponent<
  HTMLDivElement,
  Attributes<HTMLDivElement, InputAddonProps>
> = (props, ref) => {
  const { padding, paddingHorizontal = 'x3' } = props;

  return (
    <Box
      {...props}
      padding={padding}
      paddingHorizontal={padding || paddingHorizontal}
      ref={ref}
    />
  );
};

export default forwardRef(InputAddon);
