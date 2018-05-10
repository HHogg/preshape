import React, { Component } from 'react';
import { List, ListItem } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';
import RenderRepeat from '../RenderRepeat/RenderRepeat';

export default class ComponentList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <List { ...this.state.List }>
            <RenderRepeat count={ 5 }>
              { (n) => (
                <ListItem { ...this.state.ListItem } key={ n }>
                  Lorem ipsum
                </ListItem>
              ) }
            </RenderRepeat>
          </List>
        </ComponentExample>

        <ComponentPropsTable
            components={ [
              require('!!@brandwatch/axiom-documentation-loader!../../../src/List/List'),
              require('!!@brandwatch/axiom-documentation-loader!../../../src/List/ListItem'),
            ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
