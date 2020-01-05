import * as React from 'react';
import { Attributes } from '../Base/Base';
import Text, { TextProps } from '../Text/Text';
import './Table.css';

export interface TableProps extends TextProps {}

const Table = React.forwardRef<HTMLTableElement, Attributes<HTMLTableElement, TableProps>>((props, ref) => {
  return (
    <Text { ...props } className="Table" ref={ ref } tag="table" />
  );
});

export default Table;
