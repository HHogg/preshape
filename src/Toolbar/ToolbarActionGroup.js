import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Buttons from '../Button/Buttons';

export default class ToolbarActionGroup extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Buttons { ...rest }>
        { children }
      </Buttons>
    );
  }
}
