import React, { Component } from 'react';
import { Flex, Icon } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

export default class ComponentIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Icon: {
        name: 'Github',
        size: '1.5rem',
      },
    };
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Flex alignChildren="middle" direction="vertical">
            <Icon { ...this.state.Icon } />
          </Flex>
        </ComponentExample>

        <ComponentPropsTable
            components={ [ /* require('!!@brandwatch/axiom-documentation-loader!../../../src/Icon/Icon') */ ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
