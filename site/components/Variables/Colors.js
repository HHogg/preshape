import React, { Component } from 'react';
import {
  Responsive,
} from 'preshape';
import { widthLarge, widthMedium, widthSmall } from '../Root';
import GuideSection from '../Guide/GuideSection';
import ColorsGeneralTable from '../LandingSections/ColorsGeneralTable';

export default class Colors extends Component {
  render() {
    return (
      <Responsive queries={ [widthSmall, widthMedium, widthLarge] }>
        { (match) => (
          <GuideSection { ...this.props }>
            <ColorsGeneralTable
                margin="x8"
                showCellCSS
                showCellJS={ match(widthLarge) }
                showCellValue={ match(widthMedium) }
                size="small" />
          </GuideSection>
        ) }
      </Responsive>
    );
  }
}
