import classnames from 'classnames';
import * as React from 'react';
import Box, { Attributes } from '../Box/Box';
import Text, { TextProps } from '../Text/Text';
import './Input.css';
import { InputWrapperContext } from './InputWrapper';

export interface InputProps extends TextProps {
  size?: 'x1' | 'x2';
}

const Input: React.RefForwardingComponent<HTMLInputElement, Attributes<HTMLInputElement, InputProps>> = (props, ref) => {
  const {
    size = 'x1',
    ...rest
  } = props;

  if (rest.disabled !== undefined) {
    // eslint-disable-next-line no-console
    console.error('Preshape [Input]: Pass "disabled" to InputWrapper');
  }

  const { disabled } = React.useContext(InputWrapperContext);
  const classes = classnames('Input', {
    [`Input--${size}`]: size,
  });

  return (
    <Box basis="0" grow>
      <Text { ...rest }
          className={ classes }
          disabled={ disabled }
          ref={ ref }
          strong
          tag="input" />
    </Box>
  );
};

export default React.forwardRef(Input);
