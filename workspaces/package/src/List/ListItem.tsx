import React, { forwardRef } from 'react';
import Box, { BoxProps } from '../Box/Box';

/**
 * A list item component that can be used in a list.
 */
export interface ListItemProps extends BoxProps {
  /**
   * Separating string.
   *
   * @default "/"
   */
  separator?: string;
}

const ListItem: React.ForwardRefRenderFunction<HTMLLIElement, ListItemProps> = (
  props,
  ref
) => {
  const { children, separator = '/', ...rest } = props;

  return (
    <Box
      {...rest}
      alignChildrenVertical="middle"
      className="ListItem"
      data-separator={separator}
      flex="horizontal"
      ref={ref}
      tag="li"
    >
      <Box>{children}</Box>
    </Box>
  );
};

export default forwardRef(ListItem);
