
import * as React from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

export interface TableHeaderProps extends BoxProps {}

const TableHeader: React.RefForwardingComponent<HTMLTableSectionElement, Attributes<HTMLTableSectionElement, TableHeaderProps>> = (props, ref) => {
  return (
    <Box { ...props }
        className="Table__header"
        ref={ ref }
        tag="thead" />
  );
};

export default React.forwardRef(TableHeader);
