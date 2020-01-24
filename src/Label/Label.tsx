import * as React from 'react';
import classnames from 'classnames';
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
    clickable,
    ...rest
  } = props;

  const classes = classnames('Label', {
    'Label--active': active,
    'Label--clickable': clickable,
  });

  return (
    <Text { ...rest }
        className={ classes }
        clickable={ clickable }
        ref={ ref }
        size="x1"
        strong
        tag="div" />
  );
};

export default React.forwardRef(Label);
