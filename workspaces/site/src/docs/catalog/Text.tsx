import { Box, Text, TextProps } from 'preshape';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramText';

const Item: CatalogueItem<{
  Text: TextProps;
}> = {
  name: 'Text',
  description:
    'The core component for styling text. Instead of specifying various elements, a suitable and semantic element will be determined from the props.',
  Pictogram,
  apis: [
    {
      module: '"Text/Text"',
      name: 'TextProps',
      rename: 'Text',
    },
  ],
  showcase: {
    state: {
      Text: {},
    },
    Component: () => (
      <Box margin="x6" maxWidth="500px">
        <Text margin="x4" size="x8" weight="x2">
          An Animal of No Significance.
        </Text>

        <Text margin="x4" size="x7" weight="x2">
          About 13.5 billion years ago.
        </Text>

        <Text margin="x4" size="x6">
          Matter, energy, time and space came into being in what is known as the
          Big Bang. The story of these fundamental features of our universe is
          called physics..
        </Text>

        <Text margin="x3" size="x5" weight="x2">
          The spectacle before us was indeed sublime. Apparently we had reached
          a great height in the atmosphere.
        </Text>

        <Text margin="x3">
          About 300,000 years after their appearance, matter and energy started
          to coalesce into complex structures, called atoms, which then combined
          into molecules. The story of atoms, molecules and their interactions
          is called chemistry.
        </Text>

        <Text margin="x3" size="x3">
          About 3.8 billion years ago, on a planet called Earth, certain
          molecules combined to form particularly large and intricate structures
          called organisms. The story of organisms is called biology. About
          70,000 years ago, organisms belonging to the species Homo sapiens
          started to form even more elaborate structures called cultures. The
          subsequent development of these human cultures is called history.
        </Text>

        <Text margin="x3" size="x2">
          Excerpt from Sapiens: A Brief History of Humankind by Yuval Noah
          Harari © 2015 by Yuval Noah Harari. Reprinted courtesy of Harper, an
          imprint of HarperCollins Publishers without permission in writing from
          the publisher.
        </Text>
      </Box>
    ),
    code: `
import { Text } from 'preshape';

<Text margin="x4" size="x8" weight="x2>
  ...
</Text>
`,
  },
};

export default Item;
