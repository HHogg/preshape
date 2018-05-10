import React, { Component } from 'react';
import { Base, Flex } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';
import ThemeIcon from '../ThemeIcon/ThemeIcon';

export default class ComponentBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Base: {
        backgroundColor: 'shade-3',
        color: true,
        padding: 'x3',
      },
    };
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Base { ...this.state.Base }>
            <Flex alignChildren="middle" direction="vertical">
              <ThemeIcon size="1.5rem" />
            </Flex>
          </Base>
        </ComponentExample>

        <ComponentPropsTable
            components={ [ require('!!@brandwatch/axiom-documentation-loader!../../../src/Base/Base') ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
