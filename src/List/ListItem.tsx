import * as React from 'react';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';

export interface ListItemProps extends FlexProps {
  /**
   * Separating string.
   *
   * @default "/"
   */
  separator?: string;
}

const ListItem: React.RefForwardingComponent<HTMLLIElement, Attributes<HTMLLIElement, ListItemProps>> = (props, ref) => {
  const { children, separator = '/', ...rest } = props;

  return (
    <Flex { ...rest }
        alignChildrenVertical="middle"
        className="ListItem"
        data-separator={ separator }
        direction="horizontal"
        ref={ ref }
        tag="li">
      <Flex>{ children }</Flex>
    </Flex>
  );
};

export default React.forwardRef(ListItem);
