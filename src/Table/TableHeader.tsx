
import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';

export interface TableHeaderProps extends BaseProps {}

const TableHeader = React.forwardRef<HTMLTableSectionElement, Attributes<HTMLTableSectionElement, TableHeaderProps>>((props, ref) => {
  return (
    <Base { ...props }
        className="Table__header"
        ref={ ref }
        tag="thead" />
  );
});

export default TableHeader;
