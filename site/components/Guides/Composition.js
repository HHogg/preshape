import React, { Component } from 'react';
import { Code, Link } from 'preshape';
import DocumentationPage from '../Documentation/DocumentationPage';
import GuideCodeBlock from '../Guide/GuideCodeBlock';
import GuideSection from '../Guide/GuideSection';
import GuideText from '../Guide/GuideText';

export default class Composition extends Component {
  render() {
    return (
      <DocumentationPage { ...this.props }>
        <GuideSection title="Composing Components">
          <GuideText>
            Each component has it own use, but sometimes combining
            the behaviour is useful and necessary. A common case for this
            is adding flexing abilities to non-layout components.
          </GuideText>

          <GuideCodeBlock language="jsx">{
`import React, { Component } from 'react';
import { Appear, Flex } from 'preshape';


class MyComponent extends Component {
  render() {
    return (
      <Flex direction="horizontal">
        <Appear Component={ Flex }
            animation="Pop"
            grow
            initial="none">
          ...
        </Appear>

        <Appear Component={ Flex }
            animation="Pop"
            grow
            initial="none">
          ...
        </Appear>
      </Flex>
    );
  }
}

`
          }</GuideCodeBlock>

          <GuideText>
            This example, would combine the behaviour of both <Link to="/components/appear"><Code>Appear</Code></Link> and <Link to="/components/flex"><Code>Flex</Code></Link>, allowing
            each of the components props to be set on a single element. This works by each component
            picking off the props that it cares about before spreading what's left onto the next component.
          </GuideText>

          <GuideText>
            By default, every component ends with the <Link to="/components/base">Base</Link> component
            to provide the general utility stylign on anything. Beware that some components may be internally
            composing and intercepting certain props.
          </GuideText>
        </GuideSection>
      </DocumentationPage>
    );
  }
}
