import React, { Component } from 'react';
import {
  Application,
  ApplicationDetails,
  ApplicationFooter,
  ApplicationThemeControls,
  ApplicationTitle,
  Flex,
  Text,
} from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';
import LogoWithText from '../Logo/LogoWithText';

export default class ComponentApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Application: {
        theme: 'day',
      },
      ApplicationDetails: {
        github: 'https://github.com/HHogg/preshape',
        license: 'MIT',
        licenseUrl: 'https://github.com/HHogg/preshape/tree/master/LICENSE.md',
      },
    };
  }

  render() {
    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample>
          <Application { ...this.state.Application } grow height="20rem">
            <ApplicationTitle { ...this.state.ApplicationTitle }
                backgroundColor="shade-3"
                padding="x4">
              <Flex alignChildrenHorizontal="between" direction="horizontal">
                <Flex>
                  <LogoWithText alignChildrenHorizontal="middle" />
                </Flex>

                <Flex>
                  <ApplicationThemeControls { ...this.state.ApplicationThemeControls } />
                </Flex>
              </Flex>
            </ApplicationTitle>

            <Flex alignChildren="middle" direction="horizontal" grow>
              <Text strong>Content</Text>
            </Flex>

            <ApplicationFooter { ...this.state.ApplicationFooter }
                backgroundColor="shade-3"
                padding="x4">
              <ApplicationDetails { ...this.state.ApplicationDetails } />
            </ApplicationFooter>
          </Application>
        </ComponentExample>

        <ComponentPropsTable
            components={ [
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Application/Application'),
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Application/ApplicationDetails'),
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Application/ApplicationFooter'),
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Application/ApplicationThemeControls'),
              require('!!@brandwatch/axiom-documentation-loader!../../../src/Application/ApplicationTitle'),
            ] }
            onEdit={ (...args) => this.setState((state) => onEdit(state, ...args)) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
