import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Flex from '../Flex/Flex';

export default class ListItem extends Component {
  static propTypes = {
    /** SKIP */
    children: PropTypes.node,
    separator: PropTypes.string,
  };

  static defaultProps = {
    separator: '/',
  };

  render() {
    const { children, separator, ...rest } = this.props;

    return (
      <Flex { ...rest }
          Component="li"
          alignChildrenVertical="middle"
          className="ListItem"
          data-separator={ separator }
          direction="horizontal">
        <Flex>{ children }</Flex>
      </Flex>
    );
  }
}
