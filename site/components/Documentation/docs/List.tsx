import * as React from 'react' ;
import { List, ListProps, ListItem, ListItemProps } from 'preshape';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  List: ListProps;
  ListItem: ListItemProps;
}> = {
  name: 'List',
  description: 'Inline listing component, useful for separating out UI actions and a short list of options.',
  pictogram: require('../../../assets/pictogram-list.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <List { ...props.List }>
        { Array.from({ length: 5 }).map((_, n) => (
          <ListItem { ...props.ListItem } key={ n }>
            Lorem ipsum
          </ListItem>
        )) }
      </List>
    ),
    state: {
      List: {},
      ListItem: {},
    },
  },
  apis: [{
    module: '"List/ListItem"',
    name: 'ListItemProps',
    rename: 'ListItem',
  }, {
    module: '"List/List"',
    name: 'ListProps',
    rename: 'List',
  }],
};

export default Item;
