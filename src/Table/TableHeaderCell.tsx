import * as React from 'react';
import { Attributes } from '../Base/Base';
import Link from '../Link/Link';
import Text, { TextProps } from '../Text/Text';

export interface TableHeaderCellProps extends TextProps {
  /** Applies styling indication that this column is sortable */
  sortable?: boolean;
  /** Applies styling indication that this column is currently being sorted */
  sorted?: boolean;
}

const TableHeaderCell = React.forwardRef<HTMLTableHeaderCellElement, Attributes<HTMLTableHeaderCellElement, TableHeaderCellProps>>((props, ref) => {
  const { children, sortable, sorted, ...rest } = props;

  return (
    <Text { ...rest }
        className="Table__header-cell"
        ref={ ref }
        size="x1"
        strong
        tag="th"
        uppercase>
      { sortable ? (
        <Link active={ sorted }>
          { children }
        </Link>
      ) : (
        children
      ) }
    </Text>
  );
});

export default TableHeaderCell;
