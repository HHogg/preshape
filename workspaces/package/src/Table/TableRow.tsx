import React, { forwardRef } from 'react';
import classnames from 'classnames';
import Box, { BoxProps } from '../Box/Box';

/**
 * A row element of the table. This should be placed
 * directly under the TableBody component or TableHeader component.
 */
export interface TableRowProps extends BoxProps {
  /** Retains the row in its active state */
  active?: boolean;
}

const TableRow: React.ForwardRefRenderFunction<
  HTMLTableRowElement,
  TableRowProps
> = (props, ref) => {
  const { active, clickable, ...rest } = props;
  const classes = classnames('Table__row', {
    'Table__row--active': active,
    'Table__row--clickable': clickable,
  });

  return (
    <Box
      {...rest}
      className={classes}
      clickable={clickable}
      ref={ref}
      tag="tr"
    />
  );
};

export default forwardRef(TableRow);
