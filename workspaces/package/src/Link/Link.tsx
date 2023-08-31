import classnames from 'classnames';
import { forwardRef } from 'react';
import { useHref, useLinkClickHandler } from 'react-router-dom';
import { Text, TextProps } from '../Text/Text';
import { TypeBorderSize, TypeColor } from '../types';
import './Link.css';

/**
 * A link component that can be used to navigate to other pages
 * or sections of the page.
 */
export interface LinkProps extends TextProps {
  /** Retained active state, indicated with styling */
  active?: boolean;
  /** Adds an underline to the link. With a default color of accent */
  underline?: boolean;
  /** The color of the links underline */
  underlineColor?: TypeColor;
  /** The size of the underline color */
  underlineSize?: TypeBorderSize;
  /** The color of the active state */
  textColorActive?: TypeColor;
  /** The color of the hover state */
  textColorHover?: TypeColor;
  /**
   * React Router "to" prop, when applied the Link will behave like a
   * React Router Link component.
   */
  to?: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    active,
    textColorActive = 'accent-shade-4',
    textColorHover = 'accent-shade-3',
    to = '',
    underline,
    underlineColor = underline ? 'accent-shade-3' : undefined,
    underlineSize = underline ? 'x2' : undefined,
    ...rest
  } = props;
  const classes = classnames('Link', {
    'Link--active': active,
    'Link--underline': underline,
    [`Link--underline-color-${underlineColor}`]: underlineColor,
    [`Link--underline-size-${underlineSize}`]: underlineSize,
    [`Link--text-color-active-${textColorActive}`]: textColorActive,
    [`Link--text-color-hover-${textColorHover}`]: textColorHover,
  });

  const href = useHref(to);
  const internalOnClick = useLinkClickHandler(to);
  const originalOnClick = rest.onClick;

  if (to) {
    rest.onClick = (event) => {
      if (originalOnClick) originalOnClick(event);
      internalOnClick(event);
    };
  }

  return (
    <Text
      {...rest}
      className={classes}
      href={to ? href : rest.href}
      ref={ref}
      tag="a"
    />
  );
});
