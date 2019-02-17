import React, { Component } from 'react';
import {
  Icon,
  Flex,
  Placement,
  PlacementManager,
  PlacementReference,
  Toolbar,
  ToolbarAction,
  ToolbarActionGroup,
} from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

export default class ComponentToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Toolbar: {
        visible: false,
      },
    };
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Flex
              alignChildren="middle"
              direction="horizontal">
            <Flex>
              <PlacementManager>
                <PlacementReference>
                  { ({ ref }) => (
                    <Icon innerRef={ ref } name="Star" size="2rem" />
                  ) }
                </PlacementReference>

                <Placement placement="top">
                  <Toolbar { ...this.state.Toolbar }>
                    <ToolbarActionGroup>
                      <ToolbarAction>
                        <Icon name="Pencil" size="1rem" />
                      </ToolbarAction>

                      <ToolbarAction>
                        <Icon name="Copy" size="1rem" />
                      </ToolbarAction>

                      <ToolbarAction>
                        <Icon name="Water" size="1rem" />
                      </ToolbarAction>
                    </ToolbarActionGroup>

                    <ToolbarActionGroup>
                      <ToolbarAction>
                        <Icon name="Delete" size="1rem" />
                      </ToolbarAction>

                      <ToolbarAction>
                        <Icon name="Eye" size="1rem" />
                      </ToolbarAction>
                    </ToolbarActionGroup>
                  </Toolbar>
                </Placement>
              </PlacementManager>
            </Flex>
          </Flex>
        </ComponentExample>

        <ComponentPropsTable
            components={ [ require('!!@brandwatch/axiom-documentation-loader!../../../src/Toolbar/Toolbar') ] }
            onEdit={ (...args) => this.setState(onEdit(this.state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
