import * as React from 'react';
import { Attributes } from '../Box/Box';
import Text, { TextProps } from '../Text/Text';

export interface TableCellProps extends TextProps {
  /** Applies styling indication that this column is currently being sorted */
  sorted?: boolean;
}

const TableCell: React.RefForwardingComponent<HTMLTableDataCellElement, Attributes<HTMLTableDataCellElement, TableCellProps>> = (props, ref) => {
  const {
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    sorted,
    ...rest
  } = props;

  return (
    <Text { ...rest }
        className="Table__cell"
        paddingHorizontal={ paddingHorizontal }
        paddingVertical={ paddingVertical }
        ref={ ref }
        strong={ sorted }
        tag="td" />
  );
};

export default React.forwardRef(TableCell);
