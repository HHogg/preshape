import * as React from 'react';
import classnames from 'classnames';
import Base, { Props as BaseProps } from '../Base/Base';
import './Alert.css';

export interface Props extends BaseProps {
  /** Colour that is applied to the Alert to indicate the type of action */
  color: 'accent' | 'negative' | 'positive';
  /** Whether the alert is flashing, a great way to give it extra attention. */
  flash?: boolean;
  /** Style of how the alert is presented */
  type: 'outline' | 'solid';
}

const Alert: React.FunctionComponent<Props> = (props: Props) => {
  const { color, flash, type, ...rest } = props;
  const classes = classnames('Alert', `Alert--${color}`, `Alert--${type}`, {
    'Alert--flash': flash,
  });

  return (
    <Base { ...rest }
        borderSize={ type === 'outline' ? 'x2' : undefined }
        className={ classes } />
  );
};

export default Alert;
