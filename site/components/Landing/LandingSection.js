import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Text } from 'preshape';

export default class LandingSection extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    const { children, id, title, ...rest } = this.props;

    return (
      <Base { ...rest } id={ id } paddingVertical="x8">
        { title && <Text margin="x4" size="x4">{ title }</Text> }
        { children }
      </Base>
    );
  }
}
