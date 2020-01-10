import * as React from 'react';
import classnames from 'classnames';
import Base, { Attributes, BaseProps } from '../Base/Base';
import './Alert.css';

/**
 * Alert component for bringing attention to a message.
 */
export interface AlertProps extends BaseProps {
  /** Colour that is applied to the Alert to indicate the type of action */
  color: 'accent' | 'negative' | 'positive';
  /** Appies a filled in style to the alert. */
  fill?: boolean;
}

const Alert: React.RefForwardingComponent<HTMLDivElement, Attributes<HTMLDivElement, AlertProps>> = (props, ref) => {
  const { color, fill, ...rest } = props;
  const classes = classnames('Alert', `Alert--${color}`, {
    'Alert--fill': fill,
  });

  return (
    <Base { ...rest }
        borderSize="x2"
        className={ classes }
        ref={ ref } />
  );
};

export default React.forwardRef(Alert);
