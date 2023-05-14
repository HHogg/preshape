import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';

/**
 * The header element of the table. This should be placed
 * directly under the Table component.
 */
export interface TableHeaderProps extends BoxProps {}

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>((props, ref) => {
  return <Box {...props} className="Table__header" ref={ref} tag="thead" />;
});
