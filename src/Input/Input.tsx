import classnames from 'classnames';
import * as React from 'react';
import Box, { Attributes } from '../Box/Box';
import Text, { TextProps } from '../Text/Text';
import './Input.css';

export interface InputProps extends TextProps {
  size?: 'x1' | 'x2';
}

const Input: React.RefForwardingComponent<HTMLInputElement, Attributes<HTMLInputElement, InputProps>> = (props, ref) => {
  const {
    size = 'x1',
    ...rest
  } = props;

  const classes = classnames('Input', {
    [`Input--${size}`]: size,
  });

  return (
    <Box basis="0" grow>
      <Text { ...rest }
          className={ classes }
          ref={ ref }
          strong
          tag="input" />
    </Box>
  );
};

export default React.forwardRef(Input);
