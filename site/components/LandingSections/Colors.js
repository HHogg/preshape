import React, { Component } from 'react';
import { Link, Responsive, Text, ThemeContext } from 'preshape';
import { widthMedium, widthSmall } from '../Root';
import ColorsGeneralTable from './ColorsGeneralTable';
import LandingSection from '../Landing/LandingSection';

export default class Colors extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        { ({ onChangeTheme }) => (
          <LandingSection { ...this.props }>
            <Text margin="x4">
              A minimal set of colours to provide clear contrast across
              the <Link onClick={ () => onChangeTheme('day') }>Day</Link> and <Link onClick={ () => onChangeTheme('night') }>Night</Link> themes.
              All colours are from the optimised open source <Link href="https://yeun.github.io/open-color/">Open Color</Link> scheme.
            </Text>

            <Responsive queries={ [widthSmall, widthMedium] }>
              { (match) => (
                <ColorsGeneralTable
                    showCellCSS={ match(widthMedium) }
                    showCellValue={ match(widthSmall) }
                    showCellVisual />
              ) }
            </Responsive>
          </LandingSection>
        ) }
      </ThemeContext.Consumer>
    );
  }
}
