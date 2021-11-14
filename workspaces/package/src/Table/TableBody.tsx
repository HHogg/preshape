import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

export interface TableBodyProps extends BoxProps {}

const TableBody: RefForwardingComponent<
  HTMLTableSectionElement,
  Attributes<HTMLTableSectionElement, TableBodyProps>
> = (props, ref) => {
  return <Box {...props} className="Table__body" ref={ref} tag="tbody" />;
};

export default forwardRef(TableBody);
