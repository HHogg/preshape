import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';

export interface GridItemProps extends BaseProps {
  /** Specifies a specific column this item should be in. */
  column?: number;
  /** Specifies a specific row this item should be in. */
  row?: number;
}

const GridItem: React.RefForwardingComponent<HTMLElement, Attributes<HTMLElement, GridItemProps>> = (props, ref) => {
  const {
    column,
    row,
    ...rest
  } = props;

  const style = {
    gridColumn: column,
    gridRow: row,
    ...rest.style,
  };

  return (
    <Base { ...rest } className="GridItem" ref={ ref } style={ style } />
  );
};

export default React.forwardRef(GridItem);
