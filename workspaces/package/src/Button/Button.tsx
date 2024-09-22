import classnames from 'classnames';
import { CSSProperties, forwardRef, MouseEvent } from 'react';
import { useHref, useLinkClickHandler } from 'react-router-dom';
import { Text, TextProps } from '../Text/Text';
import { TypeColor } from '../types';
import './Button.css';

export type TypeButtonSize = 'x1' | 'x2' | 'x3';

/**
 * Button component with a fill and outline style with a variety of colours
 * for different purposes.
 */
export interface ButtonProps extends TextProps {
  /** Retains the Button in its active state */
  active?: boolean;
  /** Background color when active */
  backgroundColorActive?: TypeColor;
  /** Background color when hovered */
  backgroundColorHover?: TypeColor;
  /** border color when active */
  borderColorActive?: TypeColor;
  /** border color when hover */
  borderColorHover?: TypeColor;
  /**
   * Color that is applied to the button to indicate the type of action
   *
   * @default "accent"
   */
  color?: 'accent' | 'negative' | 'positive';
  /** A styled disabled state that disables all interactions */
  disabled?: boolean;
  /** text color when active */
  textColorActive?: TypeColor;
  /** border color when hover */
  textColorHover?: TypeColor;
  /**
   * React Router "to" prop, when applied the Component given to Button
   * is that of a RouterLink (from React Router DOM). Otherwise an
   * anchor tag is used.
   */
  to?: string;
  /**
   * Changes the visual priority of the button
   *
   * @default "secondary"
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export const Button = forwardRef<any, ButtonProps>((props, ref) => {
  const {
    active,
    alignChildren = 'middle',
    alignChildrenHorizontal = alignChildren,
    alignChildrenVertical = alignChildren,
    backgroundColor,
    backgroundColorActive,
    backgroundColorHover,
    borderColor,
    borderColorActive,
    borderColorHover,
    borderRadius = 'x1',
    borderSize = 'x2',
    color,
    flex = 'horizontal',
    href: hrefProp,
    size = 'x3',
    padding,
    paddingHorizontal = padding || 'x3',
    paddingVertical = padding || 'x2',
    tag,
    textColor,
    textColorActive,
    textColorHover,
    to = '',
    variant = 'secondary',
    weight = 'x2',
    ...rest
  } = props;

  const classes = classnames('Button', {
    'Button--active': active,
    [`Button--${color}`]: color,
    [`Button--${variant}`]: variant,
  });

  const href = useHref(to);
  const internalOnClick = useLinkClickHandler(to);
  const originalOnClick = rest.onClick;

  if (to) {
    rest.onClick = (event: MouseEvent<any>) => {
      if (originalOnClick) originalOnClick(event);
      internalOnClick(event as MouseEvent<HTMLAnchorElement>);
    };
  }

  const style = Object.entries({
    backgroundColor,
    backgroundColorActive,
    backgroundColorHover,
    borderColor,
    borderColorActive,
    borderColorHover,
    textColor,
    textColorActive,
    textColorHover,
  }).reduce<CSSProperties>(
    (acc, [key, value]) => {
      if (value) {
        acc[`--Button-${key}`] = `var(--color-${value})`;
      }

      return acc;
    },
    { ...props.style }
  );

  return (
    <Text
      {...rest}
      alignChildrenHorizontal={alignChildrenHorizontal}
      alignChildrenVertical={alignChildrenVertical}
      borderRadius={borderRadius}
      borderSize={borderSize}
      className={classes}
      flex={flex}
      href={to ? href : hrefProp}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      ref={ref}
      size={size}
      style={style}
      tag={to || hrefProp ? 'a' : (tag ?? 'button')}
      weight={weight}
    />
  );
});
