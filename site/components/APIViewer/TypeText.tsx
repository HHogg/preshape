import * as React from 'react';
import { Flex, Text } from 'preshape';

export default (props) => {
  const { children, isArray } = props;

  return (
    <Flex
        alignChildrenVertical="middle"
        direction="horizontal"
        gap="x1">
      <Flex>
        { children }
      </Flex>

      { isArray && (
        <Flex>
          <Text inline strong>[]</Text>
        </Flex>
      ) }
    </Flex>
  );
};
