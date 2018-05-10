import React, { Component, Fragment } from 'react';
import { Bounds, Text } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

export default class ComponentBounds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Bounds: {},
    };
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Bounds { ...this.state.Bounds }>
            { ({ width, height }) => (
              <Fragment>
                <Text><Text inline strong>Element width: </Text>{ width ? `${width}px` : 'Initialising...' }</Text>
                <Text><Text inline strong>Element height: </Text>{ height ? `${height}px` : 'Initialising...' }</Text>
              </Fragment>
            ) }
          </Bounds>
        </ComponentExample>

        <ComponentPropsTable
            components={ [ require('!!@brandwatch/axiom-documentation-loader!../../../src/Bounds/Bounds') ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
