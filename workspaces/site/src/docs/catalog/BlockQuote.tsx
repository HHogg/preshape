import { BlockQuote, BlockQuoteProps, Link, Text } from 'preshape';
import { CatalogueItem } from '..';
import Pictogram from './pictograms/PictogramBlockquote';

const Item: CatalogueItem<{
  BlockQuote: BlockQuoteProps;
}> = {
  name: 'BlockQuote',
  description:
    'A component to indicate that the contents is an extended quotation, by visually indenting and styling.',
  Pictogram,
  apis: [
    {
      module: '"BlockQuote/BlockQuote"',
      name: 'BlockQuoteProps',
      rename: 'BlockQuote',
    },
  ],
  showcase: {
    state: {
      BlockQuote: {},
    },
    Component: (props) => (
      <BlockQuote {...props.BlockQuote}>
        <Text margin="x1">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          suscipit ante ante, a venenatis mauris auctor a. Donec est ante,
          ornare tincidunt porttitor id, vulputate id quam. Nam sollicitudin est
          in efficitur pulvinar. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Praesent non lacinia
          tortor."
        </Text>

        <Text margin="x1">
          <Link href="https://www.lipsum.com/feed/html" isTextLink strong>
            Lorem Ipsum
          </Link>
        </Text>
      </BlockQuote>
    ),
    code: `
import { BlockQuote } from 'preshape';

<BlockQuote>
  ...
</BlockQuote>
`,
  },
};

export default Item;
