import React, { Component } from 'react';
import { Tabs, Tab, TabContent, Text } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';
import RenderRepeat from '../RenderRepeat/RenderRepeat';

export default class ComponentTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      Tab: {
        active: false,
      },
    };
  }

  handleClick(activeTab) {
    this.setState({
      ...onEdit(this.state, 'Tab', 'active', false),
      activeTab,
    });
  }

  handleEdit(component, prop, value) {
    if (prop === 'active') {
      this.setState({
        ...onEdit(this.state, component, prop, value),
        activeTab: null,
      });
    } else {
      this.setState(onEdit(this.state, component, prop, value));
    }
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Tabs { ...this.state.Tabs }>
            <RenderRepeat count={ 3 }>
              { (n) => (
                <Tab { ...this.state.Tab }
                    active={ this.state.activeTab === n || this.state.Tab.active }
                    key={ n }
                    onClick={ () => this.handleClick(n) }>
                  Lorem ipsum
                </Tab>
              ) }
            </RenderRepeat>
          </Tabs>

          <TabContent padding="x3">
            <Text size="heading">Lorem Ipsum ({ this.state.activeTab })</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean sed risus ex. Aliquam blandit vitae enim at vestibulum.
              Quisque aliquam, nibh eu euismod pharetra, turpis mi varius
              lectus, vel sodales risus orci in dolor.</Text>
          </TabContent>
        </ComponentExample>

        <ComponentPropsTable
            components={ [
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Tab/Tabs'),
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Tab/Tab'),
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Tab/TabContent'),
            ] }
            onEdit={ (...args) => this.handleEdit(...args) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
