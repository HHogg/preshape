import * as React from 'react';
import { Attributes } from '../Base/Base';
import InputLabel from '../InputLabel/InputLabel';
import Text, { TextProps } from '../Text/Text';
import './Input.css';

export interface InputProps extends TextProps {
  /** A label that gives describes what the input is for */
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, Attributes<HTMLInputElement, InputProps>>((props, ref) => {
  const {
    disabled,
    label,
    margin,
    padding,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    ...rest
  } = props;

  return (
    <InputLabel
        disabled={ disabled }
        label={ label }
        margin={ margin }
        paddingHorizontal={ padding || paddingHorizontal }
        paddingVertical={ padding || paddingVertical }>
      <Text { ...rest }
          className="Input"
          disabled={ disabled }
          paddingHorizontal={ padding || paddingHorizontal }
          paddingVertical={ padding || paddingVertical }
          ref={ ref }
          size="x1"
          strong
          tag="input" />
    </InputLabel>
  );
});

export default Input;
