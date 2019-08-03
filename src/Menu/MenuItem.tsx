
import * as React from 'react';
import { Route } from 'react-router-dom';
import MenuItemElement, { Props as MenuItemElementProps } from './MenuItemElement';

interface Props extends MenuItemElementProps {
  /** Flag to apply styling when a menu item is active */
  active?: boolean;
  /** Rearch Router "exact" prop */
  exact?: boolean;
  /**
   * React Router "to" prop, when applied it will also be used to apply
   * the active state when that path is active.
   */
  to?: string;
}

const MenuItem: React.FunctionComponent<Props> = (props: Props) => {
  const { active, exact, to, ...rest } = props;

  if (to) {
    return (
      <Route children={ ({ match }) => (
        <MenuItemElement { ...rest }
            active={ !!match || active }
            to={ to } />
      ) } exact={ exact } path={ to } />
    );
  }

  return (
    <MenuItemElement { ...props } />
  );
};

export default MenuItem;
