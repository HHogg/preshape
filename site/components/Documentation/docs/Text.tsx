import * as React from 'react' ;
import { Text, TextProps } from 'preshape';
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
      <React.Fragment>
        <Text heading size="x5" { ...props.Text } margin="x3">
          The spectacle before us was indeed sublime.
        </Text>

        <Text>
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
      </React.Fragment>
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
