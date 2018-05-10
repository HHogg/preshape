import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base } from 'preshape';

export default class ComponentCodeBlockContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Base { ...this.props }
          backgroundColor="shade-2"
          borderColor="shade-2" borderSize="x2"
          margin="x6" />
    );
  }
}
