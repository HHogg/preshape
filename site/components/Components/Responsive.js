import React, { Component } from 'react';
import { Base, Code, Link, Responsive, Text } from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentCodeBlockContainer from '../Component/ComponentCodeBlockContainer';
import ComponentCodeBlockDescription from '../Component/ComponentCodeBlockDescription';
import ComponentCodeBlock from '../Component/ComponentCodeBlock';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

export default class ComponentResponsive extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Responsive queries={ ['30rem', '40rem', '50rem'] }>
            { (match) => (
              <Text align="middle" strong>
                <Link active={ match('50rem') } align="middle" display="block">Greater than 50rem</Link>
                <Link active={ match({ '50rem': false, '40rem': true }) } align="middle" display="block">Greater that 40rem and less than 50rem</Link>
                <Link active={ match({ '40rem': false, '30rem': true }) } align="middle" display="block">Greater than 30rem and less than 40rem</Link>
                <Link active={ !match('30rem') } align="middle" display="block">Less than 30rem</Link>
              </Text>
            ) }
          </Responsive>
        </ComponentExample>

        <ComponentPropsTable
            components={ [
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Responsive/Responsive'),
            ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />

        <Base margin="x12">
          <Text margin="x2" size="heading">The <Code>match</Code> callback</Text>
          <Text>The Responsive component uses the render callback pattern, and
            is provided with a single argument, a matching function, which
            matches against the queries given in the props.</Text>
          <ComponentCodeBlockContainer>
            <ComponentCodeBlockDescription
                language="javascript"
                title="match(String)">
              When provided with a <Code>String</Code>, it is the
              equivalent to saying "When matching the given query" or
              "When the screen size is equal or greater than the given query".
            </ComponentCodeBlockDescription>

            <ComponentCodeBlock language="jsx">{ `
<Responsive queries={ ['10rem', '20rem', '30rem' }>
  { (match) => {
    /** With a screen size of 9rem */
    match('10rem'); // false
    match('20rem'); // false
    match('30rem'); // false

    /** With a screen size of 20rem */
    match('10rem'); // true
    match('20rem'); // true
    match('30rem'); // false
  } }
</Responsive>
          ` }</ComponentCodeBlock>
          </ComponentCodeBlockContainer>

          <ComponentCodeBlockContainer>
            <ComponentCodeBlockDescription
                language="javascript"
                title="match(Object)">
              When provided with a <Code>Object</Code>, it will return the
              value for the highest query, or <Code>false</Code> if none
              have been matched.
            </ComponentCodeBlockDescription>

            <ComponentCodeBlock language="jsx">{ `
<Responsive queries={ ['10rem', '20rem', '30rem' }>
  { (match) => {
    /** With a screen size of 9rem */
    match({
      '10rem': <h1>Heading 1</h1>,
      '20rem': <h2>Heading 2</h2>,
      '30rem': <h3>Heading 3</h3>,
    }); // false

    /** With a screen size of 20rem */
    match({
      '10rem': <h1>Heading 1</h1>,
      '20rem': <h2>Heading 2</h2>,
      '30rem': <h3>Heading 3</h3>,
    }); // <h2>Heading 2</h2>
  } }
</Responsive>
          ` }</ComponentCodeBlock>
          </ComponentCodeBlockContainer>
        </Base>
      </DocumentationPage>
    );
  }
}
