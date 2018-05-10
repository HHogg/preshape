import React, { Component } from 'react';
import DocumentationPage from '../Documentation/DocumentationPage';
import variableList from './index';
import GuideCodeBlock from '../Guide/GuideCodeBlock';
import GuideSection from '../Guide/GuideSection';
import GuideText from '../Guide/GuideText';

export default class Variables extends Component {
  render() {
    return (
      <DocumentationPage { ...this.props }>
        <GuideSection title="Accessing the variables">
          <GuideText>
            CSS variables (also known as custom properties) will be automatically
            added to the document as soon as something has been imported from the
            Preshape library.
          </GuideText>

          <GuideCodeBlock language="css">{
`.MyComponent {
  color: var(--color-accent--shade-1);
  padding: var(--size--x4);
  transition-duration: var(--transition-time--fast);
}`
          }</GuideCodeBlock>

          <GuideText>
            Javascript variables are top level exports, along with the components.
            These can be imported in the standard way.
          </GuideText>

          <GuideCodeBlock language="javascript">{
`import {
  colorAccent1Shade1,
  sizeX4,
  themes,
  transitionTimeFast,
} from 'preshape';`
          }</GuideCodeBlock>
        </GuideSection>

        { variableList.map(({ Component, name, id }) => (
          <Component
              id={ id }
              key={ id }
              title={ name } />
        )) }
      </DocumentationPage>
    );
  }
}
