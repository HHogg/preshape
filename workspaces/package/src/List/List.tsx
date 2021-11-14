import * as React from 'react';
import classnames from 'classnames';
import Box, { Attributes, BoxProps, TypeSize } from '../Box/Box';
import './List.css';

export interface ListProps extends BoxProps {
  /**
   * Spacing applied between child ListItems, values are global spacing variables.
   *
   * @default "x1"
   */
  gap?: TypeSize;
}

const List: React.RefForwardingComponent<
  HTMLUListElement,
  Attributes<HTMLUListElement, ListProps>
> = (props, ref) => {
  const { gap = 'x1', ...rest } = props;
  const classes = classnames('List', `List--${gap}`);

  return (
    <Box
      {...rest}
      alignChildrenVertical="middle"
      className={classes}
      flex="horizontal"
      gap={gap}
      ref={ref}
      tag="ul"
      wrap
    />
  );
};

export default React.forwardRef(List);
