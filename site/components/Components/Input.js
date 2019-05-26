import React, { Component } from 'react';
import { Input } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

export default class ComponentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Input: {
        placeholder: 'Type into me',
        value: '',
      },
    };
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Input { ...this.state.Input }
              onChange={ (event) => this.setState(onEdit(this.state, 'Input', 'value', event.target.value)) } />
        </ComponentExample>

        <ComponentPropsTable
            components={ [ /* require('!!@brandwatch/axiom-documentation-loader!../../../src/Input/Input') */ ] }
            onEdit={ (...args) => this.setState(onEdit(this.state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
