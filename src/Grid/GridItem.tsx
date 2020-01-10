import * as React from 'react';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';

export interface GridItemProps extends FlexProps {
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
  };

  return (
    <Flex { ...rest } className="GridItem" ref={ ref } style={ style } />
  );
};

export default React.forwardRef(GridItem);
