import React, { Component } from 'react';
import { transitionTimeFast, themeDay, Link } from 'preshape';
import DocumentationPage from '../Documentation/DocumentationPage';
import GuideCodeBlock from '../Guide/GuideCodeBlock';
import GuideSection from '../Guide/GuideSection';
import GuideText from '../Guide/GuideText';

export default class GettingStarted extends Component {
  render() {
    return (
      <DocumentationPage { ...this.props }>
        <GuideSection title="Installation">
          <GuideText>
            Standard install from the NPM repository using Yarn or NPM.
          </GuideText>

          <GuideCodeBlock>
            $ yarn add preshape
          </GuideCodeBlock>
        </GuideSection>

        <GuideSection title="Components">
          <GuideText>
            The components are designed with a flexible and <Link to="/guides/composition">composable</Link> API
            to handle common styling. But Instead of the components simply being
            a low level CSS interface, they provide a restricted set of values
            that direct the end result towards a consistent design.
          </GuideText>

          <GuideText>
            <Link to="/#Components">Components</Link> and <Link to="/variables">variables</Link> should be imported
            directly from the patternig library, similar to other React component
            libraries.
          </GuideText>

          <GuideCodeBlock language="jsx">{
`import {
  themeDay,
  transitionTimeFast,
  Flex,
  Text,
} from 'preshape';

console.log(transitionTimeFast); // ${transitionTimeFast}
console.log(themeDay.colorAccentShade1); // ${themeDay.colorAccentShade1}

<Flex></Flex>
<Text></Text>`
          }</GuideCodeBlock>
        </GuideSection>

        <GuideSection title="Handling the CSS">
          <GuideText>
            Preshape uses standard CSS for it's styling and each component imports
            the required CSS that it needs. Your build system needs to have something
            to handle this.
          </GuideText>

          <GuideText>
            For example using Webpack, the config might look like this...
          </GuideText>

          <GuideCodeBlock language="javascript">{
`module.exports = {
  module: {
    rules: [{
      test: /\\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    }],
  },
};`
          }</GuideCodeBlock>
        </GuideSection>
      </DocumentationPage>
    );
  }
}



