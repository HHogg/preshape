import * as React from 'react';
import { Attributes } from '../Base/Base';
import Text, { TextProps } from '../Text/Text';
import './Label.css';

export interface LabelProps extends TextProps {
  /** Retains the Label in its active state */
  active?: boolean;
}

const Label: React.RefForwardingComponent<HTMLDivElement, Attributes<HTMLDivElement, LabelProps>> = (props, ref) => {
  const {
    active,
    backgroundColor = 'text-shade-1',
    textColor = 'background-shade-1',
    ...rest
  } = props;

  return (
    <Text { ...rest }
        backgroundColor={ active ? 'accent-shade-2' : backgroundColor }
        className="Label"
        ref={ ref }
        size="x1"
        strong
        tag="div"
        textColor={ active ? 'light-shade-2' : textColor } />
  );
};

export default React.forwardRef(Label);
