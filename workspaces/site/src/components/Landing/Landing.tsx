import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  themes,
  Box,
  Image,
  Link,
  Text,
  ThemeSwitcher,
} from 'preshape';
import { RootContext, widthSmall } from '../Root';
import Documentation from '../Documentation/Documentation';
import landingSections from '../LandingSections';
import LandingSection from './LandingSection';
import Logo from '../Logo/Logo';

export default () => {
  const { onChangeTheme, theme } = React.useContext(RootContext);

  return (
    <Box
        backgroundColor="background-shade-1"
        padding="x6">
      <Switch>
        <Route component={ Documentation } path="/api/:id" />
      </Switch>

      <Box absolute="top-right" padding="x12">
        <ThemeSwitcher onChange={ onChangeTheme } theme={ theme } />
      </Box>

      <Box
          paddingHorizontal="x8"
          paddingVertical="x16">
        <LandingSection>
          <Box maxWidth={ widthSmall }>
            <Box alignChildrenHorizontal="middle" flex="vertical" gap="x4">
              <Box shrink>
                <Logo height="96px" width="96px" />
              </Box>

              <Box shrink>
                <Text align="middle" margin="x2" size="x8" strong>Preshape</Text>
                <Text align="middle">
                  A minimal design system and library of composable React components.
                </Text>
              </Box>
            </Box>

            <Box alignChildren="middle" flex="horizontal" margin="x8">
              <Link display="block" href="https://www.npmjs.com/package/preshape">
                <Image
                    alt="npm version"
                    async
                    height="18"
                    src={ `https://img.shields.io/npm/v/preshape?color=${encodeURIComponent(themes[theme].colorAccentShade4)}&label=Preshape` } />
              </Link>
            </Box>
          </Box>
        </LandingSection>

        { landingSections.map(({ Component, ...rest }) => (
          <Component { ...rest } key={ rest.id } />
        )) }
      </Box>
    </Box>
  );
};
