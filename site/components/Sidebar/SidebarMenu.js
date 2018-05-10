import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Text } from 'preshape';

export default class SidebarMenu extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
  };

  render() {
    const { children, title, ...rest } = this.props;

    return (
      <Base { ...rest } margin="x8">
        { title && (
          <Text
              margin="x3"
              paddingHorizontal="x4"
              size="small"
              strong
              uppercase>
            { title }
          </Text>
        ) }

        { children }
      </Base>
    );
  }
}
