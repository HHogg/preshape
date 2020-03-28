import * as React from 'react';
import classnames from 'classnames';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';
import './Button.css';

/**
 * Button component with a fill and outline style with a variety of colours
 * for different purposes.
 */
export interface ButtonProps extends FlexProps {
  /** Retains the Button in its active state */
  active?: boolean;
  /**
   * Color that is applied to the button to indicate the type of action
   *
   * @default "accent"
   */
  color?: 'accent' | 'negative' | 'positive';
  /** A styled disabled state that disables all interactions */
  disabled?: boolean;
  /** Applies a filled in style to the button. */
  fill?: boolean;
}

const Button: React.RefForwardingComponent<HTMLButtonElement, Attributes<HTMLButtonElement, ButtonProps>> = (props, ref) => {
  const { active, color = 'accent', fill, ...rest } = props;
  const classes = classnames('Button', {
    'Button--active': active,
    'Button--fill': fill,
    [`Button--${color}`]: color,
  });

  return (
    <Flex { ...rest }
        alignChildren="middle"
        className={ classes }
        direction="horizontal"
        grow
        ref={ ref }
        tag="button" />
  );
};

export default React.forwardRef(Button);
