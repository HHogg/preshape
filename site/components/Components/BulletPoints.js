import React, { Component } from 'react';
import { BulletPoints, BulletPoint } from 'preshape';
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
          <BulletPoints { ...this.state.BulletPoints }>
            <RenderRepeat count={ 5 }>
              { (n) => (
                <BulletPoint { ...this.state.BulletPoint } key={ n }>
                  Lorem ipsum
                </BulletPoint>
              ) }
            </RenderRepeat>
          </BulletPoints>
        </ComponentExample>

        <ComponentPropsTable
            components={ [
              /* require('!!@brandwatch/axiom-documentation-loader!../../../src/BulletPoints/BulletPoints'), */
              /* require('!!@brandwatch/axiom-documentation-loader!../../../src/BulletPoints/BulletPoint'), */
            ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
