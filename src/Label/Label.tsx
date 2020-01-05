import * as React from 'react';
import { Attributes } from '../Base/Base';
import Text, { TextProps } from '../Text/Text';
import './Label.css';

export interface LabelProps extends TextProps {}

const Label = React.forwardRef<HTMLDivElement, Attributes<HTMLDivElement, LabelProps>>((props, ref) => {
  const {
    backgroundColor = 'text-shade-1',
    textColor = 'background-shade-1',
    ...rest
  } = props;

  return (
    <Text { ...rest }
        backgroundColor={ backgroundColor }
        className="Label"
        ref={ ref }
        size="x1"
        strong
        tag="div"
        textColor={ textColor } />
  );
});

export default Label;
