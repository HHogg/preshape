
import * as React from 'react';
import Link from '../Link/Link';
import Text, { Props as TextProps } from '../Text/Text';

interface Props extends TextProps {
  /** @Ignore */
  children?: React.ReactNode;
  /** Applies styling indication that this column is sortable */
  sortable?: boolean;
  /** Applies styling indication that this column is currently being sorted */
  sorted?: boolean;
}

const TableHeaderCell: React.FunctionComponent<Props> = (props: Props) => {
  const { children, sortable, sorted, ...rest } = props;

  return (
    <Text { ...rest }
        Component="th"
        className="Table__header-cell"
        size="x1"
        strong
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
};

export default TableHeaderCell;
