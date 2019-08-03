import * as React from 'react';
import Flex, { Props as FlexProps } from '../Flex/Flex';

interface Props extends FlexProps {
  separator?: string;
}

const ListItem: React.FunctionComponent<Props> = (props: Props) => {
  const { children, separator, ...rest } = props;

  return (
    <Flex { ...rest }
        Component="li"
        alignChildrenVertical="middle"
        className="ListItem"
        data-separator={ separator }
        direction="horizontal">
      <Flex>{ children }</Flex>
    </Flex>
  );
};

ListItem.defaultProps = {
  separator: '/',
};

export default ListItem;
