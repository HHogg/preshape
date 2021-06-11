import * as React from 'react';
import { Attributes, Box, BoxProps, Text } from 'preshape';

export interface Props extends BoxProps {
  id?: string;
  title?: string;
}

export default (props: Attributes<HTMLElement, Props>) => {
  const { children, id, title, ...rest } = props;

  return (
    <Box { ...rest } id={ id } paddingVertical="x12">
      { title && (
        <Text
            margin="x4"
            size="x3"
            strong>{ title }</Text>
      ) }

      <Box>
        { children }
      </Box>
    </Box>
  );
};
