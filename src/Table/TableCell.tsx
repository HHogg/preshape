
import * as React from 'react';
import Text, { Props as TextProps } from '../Text/Text';

interface Props extends TextProps {
  /** Applies styling indication that this column is currently being sorted */
  sorted?: boolean;
}

const TableCell: React.FunctionComponent<Props> = (props: Props) => {
  const { sorted, ...rest } = props;

  return (
    <Text { ...rest }
        Component="td"
        className="Table__cell"
        strong={ sorted } />
  );
};

export default TableCell;
