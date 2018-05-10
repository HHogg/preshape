import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import Link from '../Link/Link';

export default class Tab extends Component {
  static propTypes = {
    /** Applies the active styling to the Tab */
    active: PropTypes.bool,
    /** SKIP */
    children: PropTypes.node.isRequired,
  };

  render() {
    const { active, children, ...rest } = this.props;
    const classes = classnames('Tab', {
      'Tab--active': active,
    });

    return (
      <Base { ...rest } className={ classes }>
        <Base
            backgroundColor={ active ? null : 'text-shade-1' }
            className="Tab__background"
            color={ active ? null : 'background-shade-1' }>
          <Link
              display="block"
              padding="x3"
              size="small">
            { children }
          </Link>
        </Base>
      </Base>
    );
  }
}
