import React, { Component } from 'react';
import { Link } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

export default class ComponentLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Link { ...this.state.Link }>Lorem ipsum</Link>
        </ComponentExample>

        <ComponentPropsTable
            components={ [
              /* require('!!@brandwatch/axiom-documentation-loader!../../../src/Link/Link'), */
            ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
