import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  themes,
  Base,
  Flex,
  Image,
  Link,
  Text,
  ThemeSwitcher,
} from 'preshape';
import { RootContext, widthSmall, widthMedium } from '../Root';
import Documentation from '../Documentation/Documentation';
import landingSections from '../LandingSections';
import LandingSection from './LandingSection';
import Logo from '../Logo/Logo';

export default () => {
  const { onChangeTheme, theme } = React.useContext(RootContext);

  return (
    <Base
        backgroundColor="background-shade-1"
        padding="x6">
      <Switch>
        <Route component={ Documentation } path="/api/:id" />
      </Switch>

      <Base absolute="top-right" padding="x12">
        <ThemeSwitcher onChange={ onChangeTheme } theme={ theme } />
      </Base>

      <Base
          maxWidth={ widthMedium }
          paddingHorizontal="x8"
          paddingVertical="x16">
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

            <Flex alignChildren="middle" direction="horizontal" margin="x8">
              <Link display="block" href="https://www.npmjs.com/package/preshape">
                <Image
                    alt="npm version"
                    async
                    height="18"
                    src={ `https://img.shields.io/npm/v/preshape?color=${encodeURIComponent(themes[theme].colorAccentShade2)}&label=Preshape` } />
              </Link>
            </Flex>
          </Base>
        </LandingSection>

        { landingSections.map(({ Component, ...rest }) => (
          <Component { ...rest } key={ rest.id } />
        )) }
      </Base>
    </Base>
  );
};
