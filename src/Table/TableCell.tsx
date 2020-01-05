import * as React from 'react';
import { Attributes } from '../Base/Base';
import Text, { TextProps } from '../Text/Text';

export interface TableCellProps extends TextProps {
  /** Applies styling indication that this column is currently being sorted */
  sorted?: boolean;
}

const TableCell = React.forwardRef<HTMLTableDataCellElement, Attributes<HTMLTableDataCellElement, TableCellProps>>((props, ref) => {
  const { sorted, ...rest } = props;

  return (
    <Text { ...rest }
        className="Table__cell"
        ref={ ref }
        strong={ sorted }
        tag="td" />
  );
});

export default TableCell;
