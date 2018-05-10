import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ComponentPropsEditorString from './ComponentPropsEditorString';

export default class ComponentPropsEditorNumber extends Component {
  static propTypes = {
    onEdit: PropTypes.func.isRequired,
  };

  handleEdit(value) {
    const { onEdit } = this.props;

    if (value === '') {
      onEdit(null);
    } else if (Number.isFinite(parseInt(value))) {
      this.props.onEdit(parseInt(value));
    }
  }

  render() {
    return (
      <ComponentPropsEditorString { ...this.props }
          onEdit={ (value) => this.handleEdit(value) } />
    );
  }
}
