import React, { Component } from 'react';
import { Code, Flex, Icon, Link, Responsive, Text, ThemeContext } from 'preshape';
import { widthMedium } from '../Root';
import LandingSection from '../Landing/LandingSection';
import LinkBox from '../LinkBox/LinkBox';

const themes = [{
  name: 'Day',
  icon: 'Sun',
  theme: 'day',
}, {
  name: 'Night',
  icon: 'Moon',
  theme: 'night',
}];

export default class Themes extends Component {
  render() {
    return (
      <Responsive queries={ [widthMedium] }>
        { (match) => (
          <ThemeContext.Consumer>
            { ({ onChangeTheme, theme: contextTheme }) => (
              <LandingSection { ...this.props }>
                <Flex { ...this.props }
                    direction={ match(widthMedium) ? 'horizontal' : 'vertical' }
                    gutter="x4"
                    margin="x4">
                  { themes.map(({ name, icon, theme }) => (
                    <Flex grow key={ theme }>
                      <LinkBox
                          active={ contextTheme === theme }
                          onClick={ () => onChangeTheme(theme) }
                          padding="x4"
                          theme={ theme }>
                        <Flex
                            alignChildren="middle"
                            direction="horizontal"
                            gutter="x3">
                          <Flex>
                            <Icon name={ icon } size="2rem" />
                          </Flex>
                          <Flex>
                            <Text align="start">{ name } Theme</Text>
                            <Code align="start" weak>theme="{ theme }"</Code>
                          </Flex>
                        </Flex>
                      </LinkBox>
                    </Flex>
                  )) }
                </Flex>

                <Text margin="x4">
                  Themes give a UI a unique appearance, while still retaining an overal consitent
                  feel of the design system. The right theme choice depends on factors such as the UI's
                  focal point, the target audience or what time the majority of activty occurs.
                </Text>

                <Flex direction={ match(widthMedium) ? 'horizontal' : 'vertical' } gutter="x4">
                  <Flex grow initial={ match(widthMedium) ? 'none' : null } shrink>
                    <Text>
                      The <Link onClick={ () => onChangeTheme('day') }>Day</Link> theme may be better
                      used for websites where the main focus is the text, that are being looked
                      at for a short duration.
                    </Text>
                  </Flex>

                  <Flex grow initial={ match(widthMedium) ? 'none' : null } shrink>
                    <Text>
                      The <Link onClick={ () => onChangeTheme('night') }>Night</Link> theme may be better
                      for a UI where users spend long periods of time concentrating on the content.
                    </Text>
                  </Flex>
                </Flex>
              </LandingSection>
            ) }
          </ThemeContext.Consumer>
        ) }
      </Responsive>
    );
  }
}
