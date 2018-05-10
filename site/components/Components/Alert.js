import React, { Component } from 'react';
import { Alert, Text } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

export default class ComponentAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Alert: {
        color: 'negative',
        flash: true,
        style: 'solid',
      },
    };
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Alert padding="x4" { ...this.state.Alert }>
            <Text size="small" strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              laoreet faucibus quam et fringilla. Maecenas vitae pulvinar augue.
              Suspendisse mollis bibendum leo, ac porta nisi convallis eget.</Text>
          </Alert>
        </ComponentExample>

        <ComponentPropsTable
            components={ [ require('!!@brandwatch/axiom-documentation-loader!../../../src/Alert/Alert') ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
