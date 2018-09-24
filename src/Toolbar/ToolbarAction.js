import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button/Button';

export default class ToolbarAction extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <Button { ...rest } style="fill">
        { children }
      </Button>
    );
  }
}
