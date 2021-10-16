import * as React from 'react';
import classnames from 'classnames';
import Box, { Attributes, BoxProps } from '../Box/Box';
import './Button.css';

/**
 * Button component with a fill and outline style with a variety of colours
 * for different purposes.
 */
export interface ButtonProps extends BoxProps {
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
  /**
   * Sets the size of the button
   *
   * @default "x2"
   */
  size?: 'x1' | 'x2' | 'x3';
  /**
   * Changes the visual priority of the button
   *
   * @default "secondary"
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.RefForwardingComponent<HTMLButtonElement, Attributes<HTMLButtonElement, ButtonProps>> = (props, ref) => {
  const {
    active,
    borderRadius = 'x2',
    borderSize = 'x2',
    color,
    size = 'x2',
    tag = 'button',
    variant = 'secondary',
    ...rest
  } = props;

  const classes = classnames('Button', {
    'Button--active': active,
    [`Button--${color}`]: color,
    [`Button--${size}`]: size,
    [`Button--${variant}`]: variant,
  });

  return (
    <Box { ...rest }
        alignChildren="middle"
        borderRadius={ borderRadius }
        borderSize={ borderSize }
        className={ classes }
        flex="horizontal"
        ref={ ref }
        tag={ tag } />
  );
};

export default React.forwardRef(Button);
