import * as React from 'react';
import classnames from 'classnames';
import Base, { Attributes, BaseProps } from '../Base/Base';

export interface TableRowProps extends BaseProps {}

const TableRow: React.RefForwardingComponent<HTMLTableRowElement, Attributes<HTMLTableRowElement, TableRowProps>> = (props, ref) => {
  const { clickable, ...rest } = props;
  const classes = classnames('Table__row', {
    'Table__row--clickable': clickable,
  });

  return (
    <Base { ...rest }
        className={ classes }
        clickable={ clickable }
        ref={ ref }
        tag="tr" />
  );
};

export default React.forwardRef(TableRow);
