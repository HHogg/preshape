import React, { Component } from 'react';
import { Code, Link } from 'preshape';
import DocumentationPage from '../Documentation/DocumentationPage';
import GuideCodeBlock from '../Guide/GuideCodeBlock';
import GuideSection from '../Guide/GuideSection';
import GuideText from '../Guide/GuideText';

export default class Themeing extends Component {
  render() {
    return (
      <DocumentationPage { ...this.props }>
        <GuideSection title="Custom Properties and the `theme` prop">
          <GuideText>
            Themeing is achieved by using <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">CSS Custom Properties</Link> (CSS Variables),
            and are applied by adding the relevant HTML class to an element. All
            descendants elements will also start using that theme.
          </GuideText>

          <GuideText>
            The <Link to="/components/base">Base</Link> component provides a <Code>theme</Code> prop
            that will apply the classes mentioned above. As mentioend in the <Link to="/guides/composition">
            composition</Link> guide, <Code>Base</Code> is the end of the chain for all other
            components so the <Code>theme</Code> prop is available on any other component too.
          </GuideText>
        </GuideSection>

        <GuideSection title="Global theme">
          <GuideText>
            Applications need a global theme, which is applied by adding a theme class to the <Code>html</Code> element.
          </GuideText>

          <GuideCodeBlock language="html">{
`<!DOCTYPE html>
<html class="Theme--day">
  <head>
  </head>
  <body>
  </body>
</html>`
          }</GuideCodeBlock>
        </GuideSection>

        <GuideSection title="Theme Context Components">
          <GuideText>
            <Link href="https://reactjs.org/docs/context.html">React Context Provider and Consumer</Link> components
            are available to get the current theme or change it.
          </GuideText>

          <GuideText>
            Provider example...
          </GuideText>

          <GuideCodeBlock language="jsx">{
`import React, { Component } from 'react';
import { ThemeContext } from 'preshape';

export default class TopComponent extends Component {
  constructor() {
    super(props);
    this.state = {
      theme: 'day',
    };
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeContext.Provider
          onChangeTheme={ (theme) => this.setState({ theme }) }
          theme={ theme }>
        { children }
      </ThemeContext.Provider>
    );
  }
}`
          }</GuideCodeBlock>

          <GuideText>
            Consumer example...
          </GuideText>

          <GuideCodeBlock language="jsx">{
`import React, { Component } from 'react';
import { Button, Buttons, ThemeContext, Text } from 'preshape';

export default class LowerDown extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        { ({ onChangeTheme, theme }) => (
          <Fragment>
            <Text>Current theme is: { theme }</Text>
            <Buttons>
              <Button onCick={ () => onChangeTheme('day') }>Day</Button>
              <Button onCick={ () => onChangeTheme('night') }>Night</Button>
            </Buttons>
          </Fragment>
        ) }
      </ThemeContext.Consumer>
    );
  }
}`
          }</GuideCodeBlock>

          <GuideText>
             If using the Application component, there is no need to use
             the <Code>ThemeContext.Provider</Code> component, see below.
          </GuideText>
        </GuideSection>


        <GuideSection title="The Application component">
          <GuideText>
            The Application component provides handling for updating and
            setting the theme, at global leve.
          </GuideText>

          <GuideCodeBlock language="jsx">{
`import React, { Component } from 'react';
import { Application, ApplicationThemeControls  } from 'preshape';

export default class Root extends Component {
  constructor() {
    super(props);
    this.state = {
      theme: 'day',
    };
  }

  render() {
    const { theme } = this.state;

    return (
      <Application
          onChangeTheme={ (theme) => this.setState({ theme }) }
          theme={ theme }>
        <ApplicationThemeControls />
      </Application>
    );
  }
}`
          }</GuideCodeBlock>
        </GuideSection>
      </DocumentationPage>
    );
  }
}
