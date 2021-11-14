import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

export interface TabContentProps extends BoxProps {}

const TabContent: RefForwardingComponent<
  HTMLElement,
  Attributes<HTMLElement, TabContentProps>
> = (props, ref) => {
  const { backgroundColor = 'background-shade-1', ...rest } = props;

  return (
    <Box
      {...rest}
      backgroundColor={backgroundColor}
      className="TabContent"
      ref={ref}
    />
  );
};

export default forwardRef(TabContent);
