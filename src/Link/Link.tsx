import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import classnames from 'classnames';
import Text, { Props as TextProps } from '../Text/Text';
import './Link.css';

export interface Props extends TextProps {
  /** Retained active state, indicated with styling */
  active?: boolean;
  /**
   * React Router "to" prop, when applied the Component given to Text
   * is that of a RouterLink (from React Router DOM). Otherwise an
   * anchor tag is used.
   */
  to?: string;
  /** Applies and underlines style, perfect for within a block of text */
  underline?: boolean;
}

const Link: React.FunctionComponent<Props> = (props: Props) => {
  const { active, to, underline, ...rest } = props;
  const classes = classnames('Link', {
    'Link--active': active,
    'Link--underline': underline,
  });

  return (
    <Text color target={ to ? undefined : '_blank' } { ...rest }
        Component={ to ? RouterLink : 'a' }
        className={ classes }
        to={ to } />
  );
};

export default Link;
