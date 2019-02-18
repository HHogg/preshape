import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Buttons, Button, Flex, Link, List, ListItem, Responsive, Text } from 'preshape';
import { version } from '../../../package.json';
import { widthMedium, widthSmall } from '../Root';
import landingSections from '../LandingSections';
import LandingSection from './LandingSection';
import Logo from '../Logo/Logo';

export default class Landing extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { push } = this.props.history;

    return (
      <Base
          maxWidth={ widthMedium }
          paddingHorizontal="x8"
          paddingVertical="x16">
        <LandingSection>
          <Responsive log queries={ [widthMedium] }>
            { (match) => (
              <Base maxWidth={ widthSmall }>
                <Flex
                    alignChildrenHorizontal="middle"
                    alignChildrenVertical="end"
                    direction={ match(widthMedium) ? 'horizontal' : 'vertical' }
                    gap="x8">
                  <Flex shrink><Logo height="6rem" width="6rem" /></Flex>
                  <Flex shrink>
                    <Text align={ match(widthMedium) ? null : 'middle' } margin="x2" size="x5">Preshape</Text>
                    <Text align={ match(widthMedium) ? null : 'middle' } color="shade-3">
                      A minimal design system and library of composable React components,
                      primarily for <Link href="https://hogg.io">my personal projects</Link>.
                    </Text>
                  </Flex>
                </Flex>

                <Base margin="x16">
                  <Buttons joined margin="x3">
                    <Button onClick={ () => push('/guides/getting-started') }>
                      Getting Started
                    </Button>

                    <Button onClick={ () => push('/#Components') }>
                      Components
                    </Button>
                  </Buttons>

                  <List alignChildren="middle">
                    { landingSections.map(({ name, id }) => (
                      <ListItem key={ name } separator="~">
                        <Link
                            color="shade-3"
                            href={ `#${id}` }
                            size="x1"
                            target="">{ name }</Link>
                      </ListItem>
                    )) }
                  </List>

                  <List alignChildren="middle" margin="x6">
                    <ListItem separator="|">
                      <Text
                          color="shade-3"
                          size="x1">v{ version }</Text>
                    </ListItem>

                    <ListItem separator="|">
                      <Link
                          color="shade-3"
                          size="x1"
                          to="/changelog">CHANGELOG</Link>
                    </ListItem>
                  </List>
                </Base>
              </Base>
            ) }
          </Responsive>
        </LandingSection>

        { landingSections.map(({ Component, id, name }) =>
          <Component id={ id } key={ name } title={ name } />
        ) }
      </Base>
    );
  }
}
