import React from 'react';
import { useMatchMedia, Box, Text } from 'preshape';
import { widthMedium, widthSmall } from '../Root';
import LandingSection, { Props } from '../Landing/LandingSection';
import SizingBorderTable from './SizingBorderTable';
import SizingGeneralTable from './SizingGeneralTable';
import SizingBorderRadiusTable from './SizingBorderRadiusTable';

const Sizing = (props: Props) => {
  const match = useMatchMedia([widthSmall, widthMedium]);

  return (
    <LandingSection {...props}>
      <Text margin="x4">
        The sizing and spacing of a UI defines section relationships and can
        instantly affect how an UI is received. Too little space and a UI can
        feel cluttered and chaotic, too much space and it can feel empty or
        unrelated.
      </Text>

      <Box
        flex={match(widthMedium) ? 'horizontal' : 'vertical'}
        gap="x4"
        margin="x4"
      >
        <Box basis={match(widthMedium) ? '0' : undefined} grow shrink>
          <SizingGeneralTable showCellCSS showCellVisual={match(widthSmall)} />
        </Box>

        <Box basis={match(widthMedium) ? '0' : undefined} grow shrink>
          <SizingBorderTable showCellCSS showCellVisual={match(widthSmall)} />

          <SizingBorderRadiusTable
            showCellCSS
            showCellVisual={match(widthSmall)}
          />
        </Box>
      </Box>
    </LandingSection>
  );
};

export default Sizing;
