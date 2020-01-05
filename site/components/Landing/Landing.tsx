import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Base,
  Flex,
  Link,
  List,
  ListItem,
  Text,
} from 'preshape';
import { version } from '../../../package.json';
import { widthSmall, widthMedium } from '../Root';
import Documentation from '../Documentation/Documentation';
import landingSections from '../LandingSections';
import LandingSection from './LandingSection';
import Logo from '../Logo/Logo';

export default () => {
  return (
    <Base
        maxWidth={ widthMedium }
        paddingHorizontal="x8"
        paddingVertical="x16">
      <Switch>
        <Route component={ Documentation } path="/api/:id" />
      </Switch>

      <LandingSection>
        <Base maxWidth={ widthSmall }>
          <Flex alignChildrenHorizontal="middle" direction="vertical" gap="x4">
            <Flex shrink>
              <Logo height="6rem" width="6rem" />
            </Flex>
            <Flex shrink>
              <Text align="middle" margin="x2" size="x5" strong>Preshape</Text>
              <Text align="middle">
                A minimal design system and library of composable React components.
              </Text>
            </Flex>
          </Flex>

          <Base margin="x16">
            <List alignChildren="middle">
              { landingSections.map(({ title, id }) => (
                <ListItem key={ title } separator="~" >
                  <Link
                      className="MyLink"
                      href={ `#${id}` }
                      size="x1"
                      strong
                      underline>{ title }</Link>
                </ListItem>
              )) }
            </List>

            <List alignChildren="middle" margin="x6">
              <ListItem separator="|">
                <Text size="x1">v{ version }</Text>
              </ListItem>

              <ListItem separator="|">
                <Link
                    href="https://github.com/HHogg/preshape/blob/master/CHANGELOG.md"
                    size="x1"
                    target="PreshapeGithub"
                    underline>CHANGELOG</Link>
              </ListItem>
            </List>
          </Base>
        </Base>
      </LandingSection>

      { landingSections.map(({ Component, ...rest }) => (
        <Component { ...rest } key={ rest.id } />
      )) }
    </Base>
  );
};
