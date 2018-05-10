import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Input } from 'preshape';

export default class ComponentPropsEditorString extends Component {
  static propTypes = {
    onEdit: PropTypes.func.isRequired,
    value: PropTypes.any,
  };

  static defaultProps = {
    value: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.onEdit(e.target.value);
  }

  render() {
    const { value } = this.state;

    return (
      <Input
          onChange={ (e) => this.handleChange(e) }
          placeholder="Enter a string"
          value={ value } />
    );
  }
}
