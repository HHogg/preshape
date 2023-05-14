import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';

/**
 * The body element of the table. This should be placed
 * directly under the Table component.
 */
export interface TableBodyProps extends BoxProps {}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (props, ref) => {
    return <Box {...props} className="Table__body" ref={ref} tag="tbody" />;
  }
);
