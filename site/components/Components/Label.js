import React, { Component } from 'react';
import { Labels, Label } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';
import RenderRepeat from '../RenderRepeat/RenderRepeat';

export default class ComponentLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Labels { ...this.state.Labels }>
            <RenderRepeat count={ 5 }>
              { (n) => (
                <Label { ...this.state.Label } key={ n }>
                  Lorem ipsum
                </Label>
              ) }
            </RenderRepeat>
          </Labels>
        </ComponentExample>

        <ComponentPropsTable
            components={ [
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Label/Labels'),
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Label/Label'),
            ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
