
import * as React from 'react';
import classnames from 'classnames';
import Base, { Props as BaseProps } from '../Base/Base';

interface Props extends BaseProps {
  /** @Ignore */
  onClick?: (e: React.SyntheticEvent) => void;
}

const TableRow: React.FunctionComponent<Props> = (props: Props) => {
  const classes = classnames('Table__row', {
    'Table__row--clickable': props.onClick,
  });

  return (
    <Base { ...props }
        Component="tr"
        className={ classes } />
  );
};

export default TableRow;
