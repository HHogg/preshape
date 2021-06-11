import * as React from 'react';
import Box, { Attributes } from '../Box/Box';
import Text, { TextProps } from '../Text/Text';
import './Input.css';

export interface InputProps extends TextProps {}

const Input: React.RefForwardingComponent<HTMLInputElement, Attributes<HTMLInputElement, InputProps>> = (props, ref) => {
  const {
    padding,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    size = 'x1',
    ...rest
  } = props;

  return (
    <Box basis="0" grow>
      <Text { ...rest }
          className="Input"
          paddingHorizontal={ padding || paddingHorizontal }
          paddingVertical={ padding || paddingVertical }
          ref={ ref }
          size={ size }
          strong
          tag="input" />
    </Box>
  );
};

export default React.forwardRef(Input);
