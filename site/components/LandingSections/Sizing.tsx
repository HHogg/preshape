import * as React from 'react' ;
import {
  useMediaQuery,
  Flex,
  Text,
} from 'preshape';
import { widthMedium, widthSmall } from '../Root';
import LandingSection, { Props } from '../Landing/LandingSection';
import SizingBorderTable from './SizingBorderTable';
import SizingGeneralTable from './SizingGeneralTable';

export default (props: Props) => {
  const match = useMediaQuery([widthSmall, widthMedium]);

  return (
    <LandingSection { ...props }>
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
            basis={ match(widthMedium) ? 'none' : undefined }
            grow
            shrink>
          <SizingGeneralTable
              showCellCSS
              showCellVisual={ match(widthSmall) } />
        </Flex>

        <Flex
            basis={ match(widthMedium) ? 'none' : undefined }
            grow
            shrink>
          <SizingBorderTable
              showCellCSS
              showCellVisual={ match(widthSmall) } />
        </Flex>
      </Flex>
    </LandingSection>
  );
};
