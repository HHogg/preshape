import * as React from 'react' ;
import { Box, Text, TextProps } from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  Text: TextProps;
}> = {
  name: 'Text',
  description: 'The core component for styling text. Instead of specifying various elements, a suitable and semantic element will be determined from the props.',
  pictogram: require('../../../assets/pictogram-text.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <Box
            backgroundColor="background-shade-1"
            padding="x6"
            textColor="text-shade-1"
            theme="night">
          <Box maxWidth="500px">
            <Text heading margin="x3" size="x4">The spectacle before us was indeed sublime.</Text>
            <Text heading margin="x3" size="x3">Apparently we had reached a great height in the atmosphere,
              for the sky was a dead black, and the stars had ceased
              to twinkle.</Text>
          </Box>
        </Box>

        <Box margin="x6" maxWidth="500px">
          <Text { ...props.Text } margin="x3">
            Apparently we had reached a great height in the atmosphere,
            for the sky was a dead black, and the stars had ceased
            to twinkle. By the same illusion which lifts the horizon
            of the sea to the level of the spectator on a hillside,
            the sable cloud beneath was dished out, and the car seemed
            to float in the middle of an immense dark sphere, whose
            upper half was strewn with silver. Looking down into the
            dark gulf below, I could see a ruddy light streaming
            through a rift in the clouds.
          </Text>

          <Text margin="x3" size="x1" strong>Apparently we had reached a great height in the atmosphere,
            for the sky was a dead black, and the stars had ceased
            to twinkle.</Text>
        </Box>
      </Showcase>
    ),
    state: {
      Text: {},
    },
  },
  apis: [{
    module: '"Text/Text"',
    name: 'TextProps',
    rename: 'Text',
  }],
};

export default Item;
