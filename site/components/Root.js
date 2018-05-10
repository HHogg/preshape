import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {
  Application,
  ApplicationDetails,
  ApplicationFooter,
  Flex,
  Responsive,
  SwitchTransition,
} from 'preshape';
import Landing from './Landing/Landing';
import Documentation from './Documentation/Documentation';

export const widthApplicationContainer = '72rem';
export const widthLarge = '64rem';
export const widthMedium = '52rem';
export const widthSmall = '30rem';

export const zIndexSidebar = '1';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarVisible: false,
      theme: 'day',
    };
  }

  handleQueryChange(query, matches) {
    if (matches && this.state.isSidebarVisible) {
      this.handleCloseSidebar();
    }
  }

  handleCloseSidebar() {
    document.body.style.overflow = 'auto';
    this.setState({ isSidebarVisible: false });
  }

  handleOpenSidebar() {
    document.body.style.overflow = 'hidden';
    this.setState({ isSidebarVisible: true });
  }

  render() {
    const { isSidebarVisible, theme } = this.state;

    return (
      <Responsive
          onChange={ (query, matches) => this.handleQueryChange(query, matches) }
          queries={ [widthLarge] }>
        { (match) => (
          <Application
              onChangeTheme={ (theme) => this.setState({ theme }) }
              theme={ theme }>
            <SwitchTransition Component={ Flex } direction="horizontal" grow>
              <Route component={ Landing } exact path="/" />
              <Route path="/" render={ () => (
                <Documentation
                    isSidebarFullscreen={ !match(widthLarge) }
                    isSidebarVisible={ isSidebarVisible }
                    onCloseSidebar={ () => this.handleCloseSidebar() }
                    onOpenSidebar={ () => this.handleOpenSidebar() } />
              ) } />
            </SwitchTransition>

            <ApplicationFooter backgroundColor="shade-2">
              <ApplicationDetails
                  alignChildrenHorizontal="middle"
                  github="https://github.com/HHogg/preshape"
                  license="MIT"
                  licenseUrl="https://github.com/HHogg/preshape/LICENSE.md" />
            </ApplicationFooter>
          </Application>
        ) }
      </Responsive>
    );
  }
}
