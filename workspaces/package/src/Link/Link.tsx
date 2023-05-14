import { forwardRef } from 'react';
import { useHref, useLinkClickHandler } from 'react-router-dom';
import classnames from 'classnames';
import { Text, TextProps } from '../Text/Text';
import './Link.css';

/**
 * A link component that can be used to navigate to other pages
 * or sections of the page.
 */
export interface LinkProps extends TextProps {
  /** Retained active state, indicated with styling */
  active?: boolean;
  /** Applies visual style to indicate that text is clickable */
  isTextLink?: boolean;
  /**
   * React Router "to" prop, when applied the Link will behave like a
   * React Router Link component.
   */
  to?: string;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { active, to = '', isTextLink, ...rest } = props;
  const classes = classnames('Link', {
    'Link--active': active,
    'Link--text-link': isTextLink,
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
