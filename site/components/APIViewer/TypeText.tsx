import * as React from 'react';
import { Box, Text } from 'preshape';

interface Props {
  children: React.ReactNode;
  isArray?: boolean;
}

export default (props: Props) => {
  const { children, isArray } = props;

  return (
    <Box
        alignChildrenVertical="middle"
        flex="horizontal"
        gap="x1">
      <Box>
        { children }
      </Box>

      { isArray && (
        <Box>
          <Text inline strong>[]</Text>
        </Box>
      ) }
    </Box>
  );
};
