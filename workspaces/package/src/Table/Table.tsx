import React, { forwardRef } from 'react';
import Text, { TextProps } from '../Text/Text';
import './Table.css';

/**
 * The root element used for constructing a table.
 */
export interface TableProps extends TextProps {}

const Table: React.ForwardRefRenderFunction<HTMLTableElement, TableProps> = (
  props,
  ref
) => {
  return <Text {...props} className="Table" ref={ref} tag="table" />;
};

export default forwardRef(Table);
