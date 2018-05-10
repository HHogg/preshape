import React, { Component } from 'react';
import ComponentPropsEditorOneOf from './ComponentPropsEditorOneOf';

export default class ComponentPropsEditorBoolean extends Component {
  render() {
    return (
      <ComponentPropsEditorOneOf { ...this.props } values={ [true, false] } />
    );
  }
}
