import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MenuItemElement from './MenuItemElement';

export default class MenuItem extends Component {
  static propTypes = {
    /** Flag to apply styling when a menu item is active */
    active: PropTypes.bool,
    /** SKIP */
    children: PropTypes.node.isRequired,
    /** Rearch Router "exact" prop */
    exact: PropTypes.bool,
    /**
     * React Router "to" prop, when applied it will also be used to apply
     * the active state when that path is active.
     */
    to: PropTypes.string,

  };

  render() {
    const { active, exact, to, ...rest } = this.props;

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
      <MenuItemElement { ...this.props } />
    );
  }
}
