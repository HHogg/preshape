import * as React from 'react';
import { Attributes } from '../Box/Box';
import Text, { TextProps } from '../Text/Text';
import './TextArea.css';

export interface TextAreaProps extends TextProps {}

const TextArea: React.RefForwardingComponent<HTMLTextAreaElement, Attributes<HTMLTextAreaElement, TextAreaProps>> = (props, ref) => {
  const {
    padding,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    ...rest
  } = props;

  return (
    <Text { ...rest }
        className="TextArea"
        paddingHorizontal={ padding || paddingHorizontal }
        paddingVertical={ padding || paddingVertical }
        ref={ ref }
        size="x1"
        strong
        tag="textarea" />
  );
};

export default React.forwardRef(TextArea);
