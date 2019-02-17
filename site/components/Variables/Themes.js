import React, { Component } from 'react';
import {
  Base,
  Code,
  Responsive,
  Text,
} from 'preshape';
import { widthLarge, widthMedium, widthSmall } from '../Root';
import GuideSection from '../Guide/GuideSection';
import ThemesTable from '../LandingSections/ThemesTable';

export default class Colors extends Component {
  render() {
    return (
      <Responsive queries={ [widthSmall, widthMedium, widthLarge] }>
        { (match) => (
          <GuideSection { ...this.props }>
            <Text margin="x2">
              The CSS theme variables will take their value from the
              nearest element containing a theme
              class (<Code>.Theme--day</Code> or <Code>.Theme--night</Code>).
              This class can be applied by giving any Preshape Component
              the <Code>theme=""</Code> prop.
            </Text>

            <Base margin="x8">
              <Text margin="x2" strong>Theme Day</Text>
              <ThemesTable
                  showCellCSS
                  showCellJS={ match(widthLarge) }
                  showCellValue={ match(widthMedium) }
                  size="x1"
                  theme="day" />
            </Base>

            <Base margin="x8">
              <Text margin="x2" strong>Theme Night</Text>
              <ThemesTable
                  showCellCSS
                  showCellJS={ match(widthLarge) }
                  showCellValue={ match(widthMedium) }
                  size="x1"
                  theme="night" />
            </Base>
          </GuideSection>
        ) }
      </Responsive>
    );
  }
}
