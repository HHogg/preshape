import * as React from 'react';
import classnames from 'classnames';
import { Attributes } from '../Box/Box';
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

  const classes = classnames('Label', {
    'Label--active': active,
  });

  return (
    <Text { ...rest }
        backgroundColor={ backgroundColor }
        className={ classes }
        ref={ ref }
        size="x1"
        strong
        tag="div"
        textColor={ textColor } />
  );
};

export default React.forwardRef(Label);
