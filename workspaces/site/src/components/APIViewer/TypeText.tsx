import React from 'react';
import { Box, Text } from 'preshape';

interface Props {
  children: ReactNode;
  isArray?: boolean;
}

const TypeText = (props: Props) => {
  const { children, isArray } = props;

  return (
    <Box alignChildrenVertical="middle" flex="horizontal" gap="x1">
      <Box>{children}</Box>

      {isArray && (
        <Box>
          <Text inline strong>
            []
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default TypeText;
