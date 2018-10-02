import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Appear,
  ApplicationThemeControls,
  ApplicationTitle,
  Flex,
  Link,
} from 'preshape';
import { widthLarge } from '../Root';
import componentsList from '../Components';
import guidesList from '../Guides';
import Changelog from '../Changelog/Changelog';
import LogoWithText from '../Logo/LogoWithText';
import Variables from '../Variables/Variables';

export default class Documentation extends Component {
  render() {
    return (
      <Flex grow initial="none">
        <ApplicationTitle padding="x4">
          <Flex
              alignChildrenHorizontal="between"
              alignChildrenVertical="middle"
              direction="horizontal"
              gutter="x2">
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

        <Appear
            animation="FadeSlideUp"
            maxWidth={ widthLarge }
            paddingHorizontal="x12"
            paddingVertical="x16"
            time="fast">
          <Switch>
            { guidesList.map(({ Component, to, ...rest }, index) => (
              <Route key={ to } path={ to } render={ () => (
                <Component { ...rest }
                    back="Guides"
                    backTo="/#Guides"
                    next={ guidesList[index + 1] }
                    previous={ guidesList[index - 1] } />
              ) } />
            )) }

            { componentsList.map(({ Component, to, ...rest }, index) => (
              <Route key={ to } path={ to } render={ () => (
                <Component { ...rest }
                    back="Components"
                    backTo="/#Components"
                    next={ componentsList[index + 1] }
                    previous={ componentsList[index - 1] } />
              ) } />
            )) }

            <Route path="/changelog" render={ () => (
              <Changelog
                  description="A record of what has recently been added or changed."
                  name="Changelog" />
            ) } />

            <Route path="/variables" render={ () => (
              <Variables
                  back="Variables"
                  backTo="/#Variables"
                  description="A list of CSS and Javascript variables used to style that can be used outside of Preshape for custom CSS."
                  name="Variables" />
            ) } />
          </Switch>
        </Appear>
      </Flex>
    );
  }
}
