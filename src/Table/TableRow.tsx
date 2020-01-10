import * as React from 'react';
import classnames from 'classnames';
import Base, { Attributes, BaseProps } from '../Base/Base';

export interface TableRowProps extends BaseProps {}

const TableRow: React.RefForwardingComponent<HTMLTableRowElement, Attributes<HTMLTableRowElement, TableRowProps>> = (props, ref) => {
  const classes = classnames('Table__row', {
    'Table__row--clickable': props.onClick,
  });

  return (
    <Base { ...props }
        className={ classes }
        ref={ ref }
        tag="tr" />
  );
};

export default React.forwardRef(TableRow);
