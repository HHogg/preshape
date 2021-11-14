import React, { forwardRef } from 'react';
import { useHref, useLinkClickHandler } from 'react-router-dom';
import classnames from 'classnames';
import { Attributes } from '../Box/Box';
import Text, { TextProps } from '../Text/Text';
import './Link.css';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link = forwardRef<any, Attributes<HTMLAnchorElement, LinkProps>>(
  (props, ref) => {
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
  }
);

export default Link;
