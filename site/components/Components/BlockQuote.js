import React, { Component } from 'react';
import { BlockQuote, Link } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

export default class ComponentBlockQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BlockQuote: {},
    };
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <BlockQuote { ...this.state.BlockQuote }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            suscipit ante ante, a venenatis mauris auctor a. Donec est ante,
            ornare tincidunt porttitor id, vulputate id quam. Nam sollicitudin
            est in efficitur pulvinar. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Praesent non lacinia
            tortor.<br/>
            <Link href="https://www.lipsum.com/feed/html">Lorem Ipsum</Link>
          </BlockQuote>
        </ComponentExample>

        <ComponentPropsTable
            components={ [ /* require('!!@brandwatch/axiom-documentation-loader!../../../src/BlockQuote/BlockQuote') */ ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
