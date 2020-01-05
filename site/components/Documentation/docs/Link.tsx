import * as React from 'react' ;
import { Link, LinkProps } from 'preshape';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  Link: LinkProps;
}> = {
  name: 'Link',
  description: 'React Router compatible links (when provided with a "to" destination).',
  type: 'component',
  showcase: {
    Component: (props) => (
      <Link { ...props.Link }>Lorem ipsum</Link>
    ),
    state: {
      Link: {
        underline: true,
      },
    },
  },
  apis: [{
    module: '"Link/Link"',
    name: 'LinkProps',
    rename: 'Link',
  }],
};

export default Item;
