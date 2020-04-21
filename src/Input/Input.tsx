import * as React from 'react';
import { Attributes } from '../Base/Base';
import Flex from '../Flex/Flex';
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
    <Flex basis="none" grow>
      <Text { ...rest }
          className="Input"
          paddingHorizontal={ padding || paddingHorizontal }
          paddingVertical={ padding || paddingVertical }
          ref={ ref }
          size={ size }
          strong
          tag="input" />
    </Flex>
  );
};

export default React.forwardRef(Input);
