import * as React from 'react' ;
import { useMediaQuery, Link, Text } from 'preshape';
import { widthMedium, widthSmall, RootContext } from '../Root';
import ColorsGeneralTable from './ColorsGeneralTable';
import LandingSection, { Props } from '../Landing/LandingSection';

export default (props: Props) => {
  const { onChangeTheme } = React.useContext(RootContext);
  const match = useMediaQuery([widthSmall, widthMedium]);

  return (
    <LandingSection { ...props }>
      <Text margin="x4">
        A minimal set of colours to provide clear contrast across
        the <Link onClick={ () => onChangeTheme('day') } underline>Day</Link> and <Link onClick={ () => onChangeTheme('night') } underline>Night</Link> themes.
        All colours are from the optimised open source <Link href="https://yeun.github.io/open-color/" underline>Open Color</Link> scheme.
      </Text>

      <ColorsGeneralTable
          showCellCSS={ match(widthMedium) }
          showCellValue={ match(widthSmall) }
          showCellVisual />
    </LandingSection>
  );
};
