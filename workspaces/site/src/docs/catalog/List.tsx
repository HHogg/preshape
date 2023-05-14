import { List, ListProps, ListItem, ListItemProps } from 'preshape';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramList';

const Item: CatalogueItem<{
  List: ListProps;
  ListItem: ListItemProps;
}> = {
  name: 'List',
  description:
    'Inline listing component, useful for separating out UI actions and a short list of options.',
  Pictogram,
  apis: [
    {
      module: '"List/ListItem"',
      name: 'ListItemProps',
      rename: 'ListItem',
    },
    {
      module: '"List/List"',
      name: 'ListProps',
      rename: 'List',
    },
  ],
  showcase: {
    state: {
      List: {},
      ListItem: {
        separator: '•',
      },
    },
    Component: (props) => (
      <List {...props.List}>
        {Array.from({ length: 5 }).map((_, n) => (
          <ListItem {...props.ListItem} key={n}>
            Lorem ipsum
          </ListItem>
        ))}
      </List>
    ),
    code: `
import { List, ListItem } from 'preshape';

<List>
  <ListItem>Lorem ipsum</ListItem>
  <ListItem>Lorem ipsum</ListItem>
</List>`,
  },
};

export default Item;
