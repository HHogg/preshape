import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'preshape';

export default class SidebarMenuItem extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string,
  };

  render() {
    const { children, to, ...rest } = this.props;

    return (
      <Route children={ ({ match }) => (
        <Link { ...rest }
            active={ !!match }
            backgroundColor={ match ? 'shade-3' : null }
            display="block"
            paddingHorizontal="x4"
            paddingVertical="x2"
            size="x1"
            to={ to }>
          { children }
        </Link>
      ) } path={ to } />
    );
  }
}
