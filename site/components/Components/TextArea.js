import React, { Component } from 'react';
import { TextArea } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

export default class ComponentTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TextArea: {
        placeholder: 'Type into me',
        value: '',
      },
    };
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <TextArea { ...this.state.TextArea }
              onChange={ (event) => this.setState(onEdit(this.state, 'TextArea', 'value', event.target.value)) } />
        </ComponentExample>

        <ComponentPropsTable
            components={ [ require('!!@brandwatch/axiom-documentation-loader!../../../src/TextArea/TextArea') ] }
            onEdit={ (...args) => this.setState(onEdit(this.state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
