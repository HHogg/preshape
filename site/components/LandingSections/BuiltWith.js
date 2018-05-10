import React, { Component } from 'react';
import { Responsive, Text } from 'preshape';
import { widthMedium, widthSmall } from '../Root';
import BuiltWithGrid from './BuiltWithGrid';
import LandingSection from '../Landing/LandingSection';
import './BuiltWith.css';

export default class BuiltWith extends Component {
  render() {
    return (
      <LandingSection { ...this.props }>
        <Text margin="x3">
          I built Preshape as a way of shortcutting the repetitive development
          of common UI patterns for my own side projects. Here's a list of stuff
          built with it.
        </Text>

        <Responsive queries={ [widthSmall, widthMedium] }>
          { (match) => (
            <BuiltWithGrid
                columnCount={ match({
                  [widthMedium]: 3,
                  [widthSmall]: 2,
                }) || 1 }
                margin="x6" />
          ) }
        </Responsive>
      </LandingSection>
    );
  }
}
