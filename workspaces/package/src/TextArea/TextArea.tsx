import React, { forwardRef, RefForwardingComponent, useContext } from 'react';
import { InputWrapperContext } from '../Input/InputWrapper';
import { Attributes } from '../Box/Box';
import Text, { TextProps } from '../Text/Text';
import './TextArea.css';

export interface TextAreaProps extends TextProps {}

const TextArea: RefForwardingComponent<
  HTMLTextAreaElement,
  Attributes<HTMLTextAreaElement, TextAreaProps>
> = (props, ref) => {
  const {
    padding,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    ...rest
  } = props;

  if (rest.disabled !== undefined) {
    // eslint-disable-next-line no-console
    console.error('Preshape [TextArea]: Pass "disabled" to TextAreaWrapper');
  }

  const { disabled } = useContext(InputWrapperContext);

  return (
    <Text
      {...rest}
      className="TextArea"
      disabled={disabled}
      paddingHorizontal={padding || paddingHorizontal}
      paddingVertical={padding || paddingVertical}
      ref={ref}
      size="x3"
      strong
      tag="textarea"
    />
  );
};

export default forwardRef(TextArea);
