import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Appear,
  ApplicationThemeControls,
  ApplicationTitle,
  Flex,
  Icon,
  Link,
} from 'preshape';
import { widthLarge } from '../Root';
import componentsList from '../Components';
import guidesList from '../Guides';
import Changelog from '../Changelog/Changelog';
import DocumentationSidebar from './DocumentationSidebar';
import LogoWithText from '../Logo/LogoWithText';
import Variables from '../Variables/Variables';

const documentation = [
  ...guidesList,
  ...componentsList, {
    name: 'Changelog',
    to: '/changelog',
    Component: Changelog,
    description: 'A record of what has recently been added or changed.',
  }, {
    name: 'Variables',
    to: '/variables',
    Component: Variables,
    description: 'A list of CSS and Javascript variables used to style that can be used outside of Preshape for custom CSS.',
  },
];

export default class Documentation extends Component {
  static propTypes = {
    isSidebarFullscreen: PropTypes.bool.isRequired,
    isSidebarVisible: PropTypes.bool.isRequired,
    onCloseSidebar: PropTypes.func.isRequired,
    onOpenSidebar: PropTypes.func.isRequired,
  };

  render() {
    const {
      isSidebarFullscreen,
      isSidebarVisible,
      onCloseSidebar,
      onOpenSidebar,
    } = this.props;

    return (
      <Flex grow initial="none">
        <ApplicationTitle
            backgroundColor="shade-2"
            padding="x4">
          <Flex
              alignChildrenHorizontal="between"
              alignChildrenVertical="middle"
              direction="horizontal"
              gutter="x2">
            { isSidebarFullscreen && (
              <Flex>
                <Link onClick={ onOpenSidebar }>
                  <Icon
                      name={ isSidebarVisible ? 'Cross' : 'Menu' }
                      size="1.5rem" />
                </Link>
              </Flex>
            ) }

            <Flex>
              <Link to="/">
                <LogoWithText />
              </Link>
            </Flex>

            <Flex>
              <ApplicationThemeControls />
            </Flex>
          </Flex>
        </ApplicationTitle>

        <Flex direction="horizontal">
          <Flex direction="horizontal">
            { (isSidebarVisible || !isSidebarFullscreen) && (
              <DocumentationSidebar
                  fullscreen={ isSidebarFullscreen }
                  onClose={ onCloseSidebar } />
            ) }
          </Flex>

          <Appear
              Component={ Flex }
              animation="FadeSlideLeft"
              grow
              initial="none"
              maxWidth={ widthLarge }
              paddingHorizontal="x12"
              paddingVertical="x16">
            <Switch>
              { documentation.map(({ Component, to, ...rest }) => (
                <Route key={ to } path={ to } render={ () => (
                  <Component { ...rest } />
                ) } />
              )) }
            </Switch>
          </Appear>
        </Flex>
      </Flex>
    );
  }
}
