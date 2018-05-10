import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Flex from '../Flex/Flex';
import Link from '../Link/Link';

export default class MenuItem extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
  };

  render() {
    const { active, children, to, ...rest } = this.props;
    const classes = classnames('MenuItem', {
      'MenuItem--active': active,
    });

    return (
      <Flex { ...rest } className={ classes }>
        <Link
            active={ active }
            display="block"
            size="small"
            to={ to }>
          <div className="MenuItemElement">{ children }</div>
        </Link>
      </Flex>
    );
  }
}
