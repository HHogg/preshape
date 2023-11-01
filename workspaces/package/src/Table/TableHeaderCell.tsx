import { forwardRef } from 'react';
import { Link } from '../Link/Link';
import { Text, TextProps } from '../Text/Text';

/**
 * A table header cell is a child of the TableHeader component. It should be
 * placed in a TableRow component.
 */
export interface TableHeaderCellProps extends TextProps {
  /** Applies styling indication that this column is sortable */
  sortable?: boolean;
  /** Applies styling indication that this column is currently being sorted */
  sorted?: boolean;
}

export const TableHeaderCell = forwardRef<
  HTMLTableCellElement,
  TableHeaderCellProps
>((props, ref) => {
  const {
    children,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    sortable,
    sorted,
    ...rest
  } = props;

  return (
    <Text
      {...rest}
      className="Table__header-cell"
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      ref={ref}
      tag="th"
      uppercase
      weight="x2"
    >
      {sortable ? <Link active={sorted}>{children}</Link> : children}
    </Text>
  );
});
