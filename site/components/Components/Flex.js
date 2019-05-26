import React, { Component } from 'react';
import pick from 'lodash.pick';
import { Flex } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';
import RenderRepeat from '../RenderRepeat/RenderRepeat';
import ThemeIcon from '../ThemeIcon/ThemeIcon';

export default class ComponentFlex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Flex: {
        alignChildren: 'middle',
        direction: 'horizontal',
        gap: 'x3',
        initial: 'content',
      },
    };
  }

  render() {

    const parentProps = [
      'alignChildren',
      'alignChildrenHorizontal',
      'alignChildrenVertical',
      'direction',
      'gap',
    ];

    const childProps = [
      'alignSelf',
      'grow',
      'initial',
      'shrink',
    ];

    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Flex { ...pick(this.state.Flex, parentProps) }>
            <RenderRepeat count={ 3 }>
              { (n) => (
                <Flex { ...pick(this.state.Flex, childProps) }
                    alignChildren="middle"
                    backgroundColor="shade-3"
                    color
                    direction="vertical"
                    key={ n }
                    padding="x3">
                  <ThemeIcon size="1.5rem" />
                </Flex>
              ) }
            </RenderRepeat>
          </Flex>
        </ComponentExample>

        <ComponentPropsTable
            components={ [ /* require('!!@brandwatch/axiom-documentation-loader!../../../src/Flex/Flex') */ ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
