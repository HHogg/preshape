import * as React from 'react';
import { Link, LinkProps } from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';

const Item: CatalogueItem<{
  Link: LinkProps;
}> = {
  name: 'Link',
  description:
    'React Router compatible links (when provided with a "to" destination).',
  pictogram: require('../../../assets/pictogram-link.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <Link {...props.Link}>Lorem ipsum</Link>
      </Showcase>
    ),
    state: {
      Link: {
        isTextLink: true,
      },
    },
  },
  apis: [
    {
      module: '"Link/Link"',
      name: 'LinkProps',
      rename: 'Link',
    },
  ],
};

export default Item;
