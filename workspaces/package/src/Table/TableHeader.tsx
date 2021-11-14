import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

export interface TableHeaderProps extends BoxProps {}

const TableHeader: RefForwardingComponent<
  HTMLTableSectionElement,
  Attributes<HTMLTableSectionElement, TableHeaderProps>
> = (props, ref) => {
  return <Box {...props} className="Table__header" ref={ref} tag="thead" />;
};

export default forwardRef(TableHeader);
