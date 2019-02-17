import React, { Component } from 'react';
import {
  transitionTimeSlow,
  transitionTimingFunction,
  Bounds,
  Code,
  Flex,
  Responsive,
  Text,
  ThemeContext,
} from 'preshape';
import { widthMedium, widthSmall } from '../Root';
import AnimationsControls from './AnimationsControls';
import AnimationsCurve from './AnimationsCurve';
import AnimationsIcons from './AnimationsIcons';
import LandingSection from '../Landing/LandingSection';
import './Animations.css';

export default class Animations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: transitionTimeSlow,
    };
  }

  render() {
    return (
      <Responsive queries={ [widthSmall, widthMedium] }>
        { (match) => (
          <LandingSection { ...this.props }>
            <Flex direction="vertical" gutter="x4" margin="x4">
              <Flex direction="horizontal" gutter="x4">
                <Flex
                    borderColor
                    borderSize="x2"
                    direction="vertical"
                    grow
                    gutter="x4"
                    padding="x4">
                  <Flex
                      borderColor
                      borderSize="x2"
                      className="CubicBezier__svg-container"
                      container
                      grow>
                    <Bounds absolute="fullscreen">
                      { ({ width, height }) => (
                        width && height && (
                          <ThemeContext.Consumer>
                            { ({ theme }) => (
                              <AnimationsCurve
                                  height={ height }
                                  theme={ theme }
                                  time={ this.state.time }
                                  width={ width } />
                            ) }
                          </ThemeContext.Consumer>
                        )
                      ) }
                    </Bounds>
                  </Flex>

                  <Flex alignChildren="middle">
                    <Text align="middle" margin="x1" size="x1" strong>
                      cubic-bezier({ transitionTimingFunction.join(', ') })
                    </Text>

                    <Text align="middle" size="x1">
                      <Code inline>var(--transition-timing-function)</Code>
                    </Text>
                  </Flex>
                </Flex>

                { match(widthSmall) && (
                  <Flex direction="vertical" grow gutter="x4">
                    <Flex direction={ match(widthMedium) ? 'horizontal' : 'vertical' } grow gutter="x2">
                      <AnimationsIcons time={ this.state.time } />
                    </Flex>

                    { match(widthMedium) && (
                      <Flex>
                        <AnimationsControls
                            onChange={ (time) => this.setState({ time }) }
                            time={ this.state.time } />
                      </Flex>
                    ) }
                  </Flex>
                ) }
              </Flex>

              { !match(widthSmall) && (
                <Flex direction="horizontal" gutter="x2">
                  <AnimationsIcons time={ this.state.time } />
                </Flex>
              ) }

              { !match(widthMedium) && (
                <Flex>
                  <AnimationsControls
                      onChange={ (time) => this.setState({ time }) }
                      time={ this.state.time } />
                </Flex>
              ) }
            </Flex>

            <Text margin="x4">
              Animations, when used functionally, are a great way to visually ease
              from one state to another and subtley provide an extended form of feedback that
              a state has changed.
            </Text>

            <Text margin="x4">
              The human brain is adept to idenitifying subtle inconsistencies (like
              noticing outo of sync audio on the TV), so a consistent approach to
              animations and transitions is important otherwise there is the risk of
              presenting chaos.
            </Text>
          </LandingSection>
        ) }
      </Responsive>
    );
  }
}
