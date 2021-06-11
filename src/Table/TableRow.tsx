import * as React from 'react';
import classnames from 'classnames';
import Box, { Attributes, BoxProps } from '../Box/Box';

export interface TableRowProps extends BoxProps {
  /** Retains the row in its active state */
  active?: boolean;
}

const TableRow: React.RefForwardingComponent<HTMLTableRowElement, Attributes<HTMLTableRowElement, TableRowProps>> = (props, ref) => {
  const { active, clickable, ...rest } = props;
  const classes = classnames('Table__row', {
    'Table__row--active': active,
    'Table__row--clickable': clickable,
  });

  return (
    <Box { ...rest }
        className={ classes }
        clickable={ clickable }
        ref={ ref }
        tag="tr" />
  );
};

export default React.forwardRef(TableRow);
