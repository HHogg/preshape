import React, { Component } from 'react';
import { Appear, Flex } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';
import RenderRepeat from '../RenderRepeat/RenderRepeat';
import ThemeIcon from '../ThemeIcon/ThemeIcon';

export default class ComponentAppear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Appear: {
        animation: 'Fade',
        visible: true,
      },
    };
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Appear { ...this.state.Appear }>
            <Flex direction="horizontal" gap="x3">
              <RenderRepeat count={ 3 }>
                { (n) => (
                  <Flex
                      alignChildren="middle"
                      backgroundColor="shade-3"
                      color
                      direction="vertical"
                      grow
                      initial="none"
                      key={ n }
                      padding="x3">
                    <ThemeIcon size="1.5rem" />
                  </Flex>
                ) }
              </RenderRepeat>
            </Flex>
          </Appear>
        </ComponentExample>

        <ComponentPropsTable
            components={ [ require('!!@brandwatch/axiom-documentation-loader!../../../src/Appear/Appear') ] }
            onEdit={ (...args) => this.setState(onEdit(this.state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
