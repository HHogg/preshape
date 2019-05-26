import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  Application,
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
      <BrowserRouter>
        <Application
            onChangeTheme={ (theme) => this.setState({ theme }) }
            theme={ theme }>
          <SwitchTransition Component={ Flex } direction="horizontal" grow>
            <Route component={ Landing } exact path="/" />
            <Route component={ Documentation } path="/" />
          </SwitchTransition>
        </Application>
      </BrowserRouter>
    );
  }
}
