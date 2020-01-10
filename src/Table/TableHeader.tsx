
import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';

export interface TableHeaderProps extends BaseProps {}

const TableHeader: React.RefForwardingComponent<HTMLTableSectionElement, Attributes<HTMLTableSectionElement, TableHeaderProps>> = (props, ref) => {
  return (
    <Base { ...props }
        className="Table__header"
        ref={ ref }
        tag="thead" />
  );
};

export default React.forwardRef(TableHeader);
