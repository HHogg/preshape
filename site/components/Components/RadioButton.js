import React, { Component } from 'react';
import { RadioButton } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

export default class ComponentRadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: null,
      RadioButton: {
        label: 'Lorem Ipsum',
      },
    };
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <RadioButton { ...this.state.RadioButton }
              checked={ this.state.checked === 1 }
              margin="x2"
              onChange={ () => this.setState({ checked: 1 }) } />
          <RadioButton { ...this.state.RadioButton }
              checked={ this.state.checked === 2 }
              margin="x2"
              onChange={ () => this.setState({ checked: 2 }) } />
          <RadioButton { ...this.state.RadioButton }
              checked={ this.state.checked === 3 }
              margin="x2"
              onChange={ () => this.setState({ checked: 3 }) } />
        </ComponentExample>

        <ComponentPropsTable
            components={ [ require('!!@brandwatch/axiom-documentation-loader!../../../src/RadioButton/RadioButton') ] }
            onEdit={ (...args) => this.setState(onEdit(this.state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
