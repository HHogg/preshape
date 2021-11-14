import * as React from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

export interface ListItemProps extends BoxProps {
  /**
   * Separating string.
   *
   * @default "/"
   */
  separator?: string;
}

const ListItem: React.RefForwardingComponent<
  HTMLLIElement,
  Attributes<HTMLLIElement, ListItemProps>
> = (props, ref) => {
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

export default React.forwardRef(ListItem);
