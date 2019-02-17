import React, { Component } from 'react';
import { Base, Responsive } from 'preshape';
import { widthMedium, widthSmall } from '../Root';
import GuideSection from '../Guide/GuideSection';
import SizingBorderTable from '../LandingSections/SizingBorderTable';
import SizingGeneralTable from '../LandingSections/SizingGeneralTable';

export default class Sizing extends Component {
  render() {
    return (
      <Responsive queries={ [widthSmall, widthMedium] }>
        { (match) => (
          <GuideSection { ...this.props }>
            <Base margin="x8">
              <SizingGeneralTable
                  showCellCSS
                  showCellJS={ match(widthSmall) }
                  showCellValue={ match(widthMedium) }
                  size="x1" />
            </Base>

            <Base margin="x8">
              <SizingBorderTable
                  showCellCSS
                  showCellJS={ match(widthSmall) }
                  showCellValue={ match(widthMedium) }
                  size="x1" />
            </Base>
          </GuideSection>
        ) }
      </Responsive>
    );
  }
}
