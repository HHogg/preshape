import * as React from 'react';
import classnames from 'classnames';
import Base, { Props as BaseProps } from '../Base/Base';
import './Alert.css';

interface Props extends BaseProps {
  /** Colours that is applied to the Alert to indicate the type of action */
  color: 'accent' | 'negative' | 'positive';
  /** Whether the alert is flashing, a great way to give it extra attention. */
  flash?: boolean;
  /** Style of how the alert is presented */
  style: 'outline' | 'solid';
}


const Alert: React.FunctionComponent<Props> = (props: Props) => {
  const { color, flash, style, ...rest } = props;
  const classes = classnames('Alert', `Alert--${color}`, `Alert--${style}`, {
    'Alert--flash': flash,
  });

  return (
    <Base { ...rest }
        borderSize={ style === 'outline' ? 'x2' : undefined }
        className={ classes } />
  );
};

export default Alert;
