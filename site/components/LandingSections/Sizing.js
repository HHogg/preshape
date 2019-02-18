import React, { Component } from 'react';
import {
  Flex,
  Responsive,
  Text,
} from 'preshape';
import { widthMedium, widthSmall } from '../Root';
import LandingSection from '../Landing/LandingSection';
import SizingBorderTable from './SizingBorderTable';
import SizingGeneralTable from './SizingGeneralTable';

export default class Sizing extends Component {
  render() {
    return (
      <Responsive queries={ [widthSmall, widthMedium] }>
        { (match) => (
          <LandingSection { ...this.props }>
            <Text margin="x4">
              The sizing and spacing of a UI defines section relationships and
              can instantly affect how an UI is received. Too little space and a
              UI can feel cluttered and chaotic, too much space and it can feel
              empty or unrelated.
            </Text>

            <Flex
                direction={ match(widthMedium) ? 'horizontal' : 'vertical' }
                gap="x4"
                margin="x4">
              <Flex
                  grow
                  initial={ match(widthMedium) ? 'none' : null }
                  shrink>
                <SizingGeneralTable
                    showCellCSS
                    showCellVisual={ match(widthSmall) } />
              </Flex>

              <Flex
                  grow
                  initial={ match(widthMedium) ? 'none' : null }
                  shrink>
                <SizingBorderTable
                    showCellCSS
                    showCellVisual={ match(widthSmall) } />
              </Flex>
            </Flex>
          </LandingSection>
        ) }
      </Responsive>
    );
  }
}
