import * as React from 'react';
import InputLabel from '../InputLabel/InputLabel';
import Text, { Props as TextProps } from '../Text/Text';
import './Input.css';

interface Props extends TextProps {
  /** A styled disabled state that disables all interactions */
  disabled?: boolean;
  /** A label that gives describes what the input is for */
  label?: string;
}

const Input: React.FunctionComponent<Props> = (props: Props) => {
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
          Component="input"
          disabled={ disabled }
          paddingHorizontal={ padding || paddingHorizontal }
          paddingVertical={ padding || paddingVertical }
          size="x1"
          strong />
    </InputLabel>
  );
};

export default Input;
