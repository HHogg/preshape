import * as React from 'react';
import Flex, { Props as FlexProps } from '../Flex/Flex';

interface Props extends FlexProps {
  separator?: string;
}

const ListItem: React.FunctionComponent<Props> = (props: Props) => {
  const { children, separator = '/', ...rest } = props;

  return (
    <Flex { ...rest }
        alignChildrenVertical="middle"
        className="ListItem"
        Component="li"
        data-separator={ separator }
        direction="horizontal">
      <Flex>{ children }</Flex>
    </Flex>
  );
};

export default ListItem;
