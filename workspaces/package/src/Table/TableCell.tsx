import React, { forwardRef } from 'react';
import Text, { TextProps } from '../Text/Text';

/**
 * A table cell is a child of the Table component. It should be
 * placed in a TableRow component.
 */
export interface TableCellProps extends TextProps {
  /** Applies styling indication that this column is currently being sorted */
  sorted?: boolean;
}

const TableCell: React.ForwardRefRenderFunction<
  HTMLTableCellElement,
  TableCellProps
> = (props, ref) => {
  const {
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    sorted,
    ...rest
  } = props;

  return (
    <Text
      {...rest}
      className="Table__cell"
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      ref={ref}
      strong={sorted}
      tag="td"
    />
  );
};

export default forwardRef(TableCell);
