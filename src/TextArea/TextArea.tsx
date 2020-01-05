import * as React from 'react';
import { Attributes, TypeSize } from '../Base/Base';
import InputLabel from '../InputLabel/InputLabel';
import Text, { TextProps } from '../Text/Text';
import './TextArea.css';

export interface TextAreaProps extends TextProps {
    /** A styled disabled state that disables all interactions */
    disabled?: boolean;
    /** A label that gives describes what the input is for */
    label?: string;
    /** @Ignore */
    margin?: TypeSize;
    /** @Ignore */
    padding?: TypeSize;
    /** @Ignore */
    paddingHorizontal?: TypeSize;
    /** @Ignore */
    paddingVertical?: TypeSize;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, Attributes<HTMLTextAreaElement, TextAreaProps>>((props, ref) => {
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
          className="TextArea"
          disabled={ disabled }
          paddingHorizontal={ padding || paddingHorizontal }
          paddingVertical={ padding || paddingVertical }
          ref={ ref }
          size="x1"
          strong
          tag="textarea" />
    </InputLabel>
  );
});

export default TextArea;
