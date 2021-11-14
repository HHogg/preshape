import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import './Tabs.css';

export interface TabsProps extends BoxProps {}

const Tabs: RefForwardingComponent<
  HTMLElement,
  Attributes<HTMLElement, TabsProps>
> = (props, ref) => {
  return <Box {...props} className="Tabs" ref={ref} />;
};

export default forwardRef(Tabs);
