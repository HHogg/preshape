import * as React from 'react';
import classnames from 'classnames';
import { Attributes, TypeSize } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';
import './List.css';

export interface ListProps extends FlexProps {
  /**
   * Spacing applied between child ListItems, values are global spacing variables.
   *
   * @default "x1"
   */
  gap?: TypeSize;
}

const List: React.RefForwardingComponent<HTMLUListElement, Attributes<HTMLUListElement, ListProps>> = (props, ref) => {
  const { gap = 'x1', ...rest } = props;
  const classes = classnames('List', `List--${gap}`);

  return (
    <Flex { ...rest }
        alignChildrenVertical="middle"
        className={ classes }
        direction="horizontal"
        gap={ gap }
        ref={ ref }
        tag="ul"
        wrap />
  );
};

export default React.forwardRef(List);
