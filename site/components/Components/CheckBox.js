import React, { Component } from 'react';
import { CheckBox } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

export default class ComponentCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: false,
      2: false,
      3: false,
      CheckBox: {
        label: 'Lorem Ipsum',
      },
    };
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <CheckBox { ...this.state.CheckBox }
              checked={ this.state[1] }
              margin="x2"
              onChange={ (event) => this.setState({ 1: event.target.checked }) } />
          <CheckBox { ...this.state.CheckBox }
              checked={ this.state[2] }
              margin="x2"
              onChange={ (event) => this.setState({ 2: event.target.checked }) } />
          <CheckBox { ...this.state.CheckBox }
              checked={ this.state[3] }
              margin="x2"
              onChange={ (event) => this.setState({ 3: event.target.checked }) } />
        </ComponentExample>

        <ComponentPropsTable
            components={ [ require('!!@brandwatch/axiom-documentation-loader!../../../src/CheckBox/CheckBox') ] }
            onEdit={ (...args) => this.setState(onEdit(this.state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
