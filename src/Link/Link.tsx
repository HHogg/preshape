import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classnames from 'classnames';
import { Attributes } from '../Box/Box';
import Text, { TextProps } from '../Text/Text';
import './Link.css';

const isModifiedEvent = (event: React.MouseEvent) =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

export interface LinkProps extends TextProps {
  /** Retained active state, indicated with styling */
  active?: boolean;
  /**
   * @Ignore
  */
  navigate?: () => void;
  /**
   * React Router "to" prop, when applied the Component given to Text
   * is that of a RouterLink (from React Router DOM). Otherwise an
   * anchor tag is used.
   */
  to?: string;
  /** Applies and underlines style, perfect for within a block of text */
  underline?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link = React.forwardRef<any, Attributes<HTMLAnchorElement, LinkProps>>((props, ref) => {
  const { active, navigate, target, to, underline, ...rest } = props;
  const classes = classnames('Link', {
    'Link--active': active,
    'Link--underline': underline,
  });

  if (to) {
    return (
      <RouterLink { ...props }
          component={ Link }
          ref={ ref }
          to={ to } />
    );
  }

  if (navigate) {
    rest.onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (props.onClick) {
        props.onClick(event);
      }

      // https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Link.js
      if (
        !event.defaultPrevented && // onClick prevented default
        event.button === 0 && // ignore everything but left clicks
        (!target || target === '_self') && // let browser handle "target=_blank" etc.
        !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
        event.preventDefault();
        navigate();
      }
    };
  }

  return (
    <Text { ...rest }
        className={ classes }
        ref={ ref }
        tag="a"
        target={ target } />
  );
});

export default Link;
