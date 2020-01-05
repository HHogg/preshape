import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';

export interface TableBodyProps extends BaseProps {}

const TableBody = React.forwardRef<HTMLTableSectionElement, Attributes<HTMLTableSectionElement, TableBodyProps>>((props, ref) => {
  return (
    <Base { ...props } className="Table__body" ref={ ref } tag="tbody" />
  );
});

export default TableBody;
