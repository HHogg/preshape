import React, { Component } from 'react';
import { transitionTimeSlow, Flex, Responsive, Text } from 'preshape';
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
                <Flex grow>
                  <AnimationsCurve time={ this.state.time } />
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
