import React, { Component } from 'react';
import { Code, Link, Text } from 'preshape';
import DocumentationPage from '../Documentation/DocumentationPage';
import GuideCodeBlock from '../Guide/GuideCodeBlock';
import GuideSection from '../Guide/GuideSection';
import GuideText from '../Guide/GuideText';

export default class ResponsiveDesign extends Component {
  render() {
    return (
      <DocumentationPage { ...this.props }>
        <GuideSection title="Responsive Approach">
          <GuideText>
            Typically CSS media queries are used to change the layout and design,
            when hitting certain breakpoints. That approach does have its limitation
            and can get quite custom depending on different layouts. The limitations, for React,
            come from not every prop can be configured in CSS and the structure
            of a render method might need to widly differ passed the point of
            legible CSS.
          </GuideText>
        </GuideSection>

        <GuideSection title="The Responsive Component">
          <GuideText>
            Preshape has a <Link to="/components/responsive"><Code>Responsive</Code></Link> component that
            uses the <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia"><Code>matchMedia</Code></Link> Javascript
            API to listen to when specific breakpoints are hit. This allows greater control over what
            props are set and what and how a component is rendered. This also provides a way to keep
            the render functions generic, without needing to give elements specific
            classes to target them with CSS.
          </GuideText>

          <GuideCodeBlock language="jsx">{
`import React, { Component } from 'react';
import { Flex, Responsive, Text } from 'preshape';

class MyComponent extends Component {
  render() {
    return (
      <Responsive queries={ ['10rem', '20rem'] }>
        { (match) => (
          <Flex direction={ match('10rem') ? 'horizontal' : 'vertical' }>
            {
              match({
                '10rem': <Text size="x2">Viewport is bigger than 10rem but less than 20rem</Text>,
                '20rem': <Text size="x3">Viewport is bigger than 20rem</Text>
              }) || (
                <Text size="x1">Viewport is less than 10rem</Text>
              )
            }
          </Flex>
        ) }
      </Responsive>
    );
  }
}`
          }</GuideCodeBlock>

        </GuideSection>

        <GuideSection title="Static Rendering and the Hydration stage">
          <GuideText>
            This approach does have its pitfall when <Link href="https://reactjs.org/docs/react-dom.html#hydrate">hydrating</Link> statically
            rendered templates from build time or dynamic server side rendering.
          </GuideText>

          <GuideText>
            Both of these types of static rendering happen <Text emphasis inline>before</Text> the viewport
            rending the React application are known. During Reacts hydration stage the initial template
            can differ from the one that has been optimised for that viewport. This can give the user
            a jarring experience if the application initialisation takes a long time and the templates
            widly differ.
          </GuideText>

          <GuideText>
            It's best to keep entry points as similar across breakpoints as possible
            and/or the app initialisation time as quick as possible.
          </GuideText>
        </GuideSection>
      </DocumentationPage>
    );
  }
}
