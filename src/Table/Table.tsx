import * as React from 'react';
import Text, { Props as TextProps } from '../Text/Text';
import './Table.css';

export interface Props extends TextProps {}

const Table: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Text { ...props } className="Table" Component="table" />
  );
};

export default Table;
