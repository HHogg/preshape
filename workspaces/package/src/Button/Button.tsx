import * as React from 'react';
import classnames from 'classnames';
import { Attributes, TypeSize } from '../Box/Box';
import Text, { TextProps } from '../Text/Text';
import './Button.css';

export type TypeButtonSize = 'x1' | 'x2' | 'x3';

/**
 * Button component with a fill and outline style with a variety of colours
 * for different purposes.
 */
export interface ButtonProps extends TextProps {
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
  size?: TypeButtonSize;
  /**
   * Changes the visual priority of the button
   *
   * @default "secondary"
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const sizePaddingMap: Record<TypeButtonSize, {
  paddingHorizontal: TypeSize;
  paddingVertical: TypeSize;
}> = {
  x1: {
    paddingHorizontal: 'x2',
    paddingVertical: 'x1',
  },
  x2: {
    paddingHorizontal: 'x3',
    paddingVertical: 'x2',
  },
  x3: {
    paddingHorizontal: 'x4',
    paddingVertical: 'x3',
  }
}

const Button: React.RefForwardingComponent<
  HTMLButtonElement,
  Attributes<HTMLButtonElement, ButtonProps>
> = (props, ref) => {
  const {
    alignChildren = 'middle',
    alignChildrenHorizontal = alignChildren,
    alignChildrenVertical = alignChildren,
    active,
    borderRadius = 'x1',
    borderSize = 'x2',
    color,
    size = 'x2',
    paddingHorizontal = sizePaddingMap[size].paddingHorizontal,
    paddingVertical = sizePaddingMap[size].paddingVertical,
    tag = 'button',
    variant = 'secondary',
    uppercase = true,
    ...rest
  } = props;

  const classes = classnames('Button', {
    'Button--active': active,
    [`Button--${color}`]: color,
    [`Button--${size}`]: size,
    [`Button--${variant}`]: variant,
  });

  return (
    <Text
      {...rest}
      alignChildrenHorizontal={ alignChildrenHorizontal }
      alignChildrenVertical={ alignChildrenVertical }
      borderRadius={borderRadius}
      borderSize={borderSize}
      className={classes}
      flex="horizontal"
      paddingHorizontal={ paddingHorizontal }
      paddingVertical={ paddingVertical }
      ref={ref}
      tag={tag}
      uppercase={ uppercase }
    />
  );
};

export default React.forwardRef(Button);
