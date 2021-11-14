import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import './Separator.css';

export interface SeparatorProps extends BoxProps {}

const Separator: RefForwardingComponent<
  HTMLElement,
  Attributes<HTMLElement, SeparatorProps>
> = (props, ref) => {
  const { borderColor = 'text-shade-1', borderSize = 'x1', ...rest } = props;

  return (
    <Box
      {...rest}
      borderColor={borderColor}
      borderSize={borderSize}
      className="Separator"
      ref={ref}
    />
  );
};

export default forwardRef(Separator);
