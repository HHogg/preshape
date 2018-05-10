import React, { Component } from 'react';
import { Button, Buttons, Flex, Icon } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

export default class ComponentButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Flex direction="horizontal" gutter="x4">
            <Flex direction="horizontal" grow>
              <Buttons { ...this.state.Buttons } grow>
                <Button { ...this.state.Button }>Lorem ipsum</Button>
              </Buttons>
            </Flex>

            <Flex direction="horizontal" grow>
              <Buttons { ...this.state.Buttons } grow>
                <Button { ...this.state.Button }>
                  <Icon name="Beginning" size="1rem" />
                </Button>
                <Button { ...this.state.Button }>
                  <Icon name="Play" size="1rem" />
                </Button>
                <Button { ...this.state.Button }>
                  <Icon name="Pause" size="1rem" />
                </Button>
                <Button { ...this.state.Button }>
                  <Icon name="End" size="1rem" />
                </Button>
              </Buttons>
            </Flex>

            <Flex direction="horizontal" grow>
              <Buttons { ...this.state.Buttons } grow>
                <Button { ...this.state.Button }>Lorem ipsum</Button>
              </Buttons>
            </Flex>
          </Flex>
        </ComponentExample>

        <ComponentPropsTable
            components={ [
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Button/Button'),
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Button/Buttons'),
            ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
