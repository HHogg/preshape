import * as React from 'react' ;
import { BlockQuote, BlockQuoteProps, Link } from 'preshape';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  BlockQuote: BlockQuoteProps;
}> = {
  name: 'BlockQuote',
  description: 'A visually indented way of representing quoted text.',
  type: 'component',
  showcase: {
    Component: (props) => (
      <BlockQuote { ...props.BlockQuote }>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        suscipit ante ante, a venenatis mauris auctor a. Donec est ante,
        ornare tincidunt porttitor id, vulputate id quam. Nam sollicitudin
        est in efficitur pulvinar. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Praesent non lacinia
        tortor.<br/>
        <Link href="https://www.lipsum.com/feed/html">Lorem Ipsum</Link>
      </BlockQuote>
    ),
    state: {
      BlockQuote: {},
    },
  },
  apis: [{
    module: '"BlockQuote/BlockQuote"',
    name: 'BlockQuoteProps',
    rename: 'BlockQuote',
  }],
};

export default Item;
