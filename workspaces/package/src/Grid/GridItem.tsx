import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

export interface GridItemProps extends BoxProps {
  /** Specifies a specific column this item should be in. */
  column?: number;
  /** Specifies a specific row this item should be in. */
  row?: number;
}

const GridItem: RefForwardingComponent<
  HTMLElement,
  Attributes<HTMLElement, GridItemProps>
> = (props, ref) => {
  const { column, row, ...rest } = props;

  const style = {
    gridColumn: column,
    gridRow: row,
    ...rest.style,
  };

  return <Box {...rest} className="GridItem" ref={ref} style={style} />;
};

export default forwardRef(GridItem);
