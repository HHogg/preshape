import React, { forwardRef } from 'react';
import Box, { BoxProps } from '../Box/Box';

/**
 * A grid item is a child of the Grid component. It can be
 * placed in a specific column and row.
 */
export interface GridItemProps extends BoxProps {
  /** Specifies a specific column this item should be in. */
  column?: number;
  /** Specifies a specific row this item should be in. */
  row?: number;
}

const GridItem: React.ForwardRefRenderFunction<any, GridItemProps> = (
  props,
  ref
) => {
  const { column, row, ...rest } = props;

  const style = {
    gridColumn: column,
    gridRow: row,
    ...rest.style,
  };

  return <Box {...rest} className="GridItem" ref={ref} style={style} />;
};

export default forwardRef(GridItem);
