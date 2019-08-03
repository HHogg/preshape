import * as React from 'react';
import classnames from 'classnames';
import Flex, { Props as FlexProps } from '../Flex/Flex';
import './Button.css';

export interface Props extends FlexProps {
  /** Retains the Button in its active state */
  active?: boolean;
  /** Colours that is applied to the button to indicate the type of action */
  color?: 'accent' | 'negative' | 'positive';
  /** A styled disabled state that disables all interactions */
  disabled?: boolean;
  /** Visual style of the Button */
  style?: 'fill' | 'outline';
}

const Button: React.FunctionComponent<Props> = (props: Props) => {
  const { active, color, style, ...rest } = props;
  const classes = classnames('Button', {
    'Button--active': active,
    [`Button--${color}`]: color,
    [`Button--${style}`]: style,
  });

  return (
    <Flex { ...rest }
        Component="button"
        alignChildren="middle"
        className={ classes }
        color
        direction="horizontal"
        grow />
  );
};

Button.defaultProps = {
  color: 'accent',
  style: 'outline',
};

export default Button;
