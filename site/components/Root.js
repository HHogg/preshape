import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Application,
  ApplicationDetails,
  ApplicationFooter,
  Flex,
  SwitchTransition,
} from 'preshape';
import Landing from './Landing/Landing';
import Documentation from './Documentation/Documentation';

export const widthApplicationContainer = '72rem';
export const widthLarge = '64rem';
export const widthMedium = '52rem';
export const widthSmall = '30rem';

export default class Root extends Component {
  constructor(props) {
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
        <SwitchTransition Component={ Flex } direction="horizontal" grow>
          <Route component={ Landing } exact path="/" />
          <Route component={ Documentation } path="/" />
        </SwitchTransition>

        <ApplicationFooter backgroundColor="shade-2">
          <ApplicationDetails
              alignChildrenHorizontal="middle"
              github="https://github.com/HHogg/preshape"
              license="MIT"
              licenseUrl="https://github.com/HHogg/preshape/LICENSE.md" />
        </ApplicationFooter>
      </Application>
    );
  }
}
