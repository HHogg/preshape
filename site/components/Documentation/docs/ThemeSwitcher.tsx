import * as React from 'react' ;
import { ThemeSwitcher, ThemeSwitcherProps } from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  ThemeSwitcher: ThemeSwitcherProps;
}> = {
  name: 'ThemeSwitcher',
  description: '',
  // pictogram: require('../../../assets/pictogram-textarea.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <ThemeSwitcher { ...props.ThemeSwitcher } />
      </Showcase>
    ),
    state: {
      ThemeSwitcher: {
        onChange: () => {},
        size: 32,
        theme: 'day',
      },
    },
  },
  apis: [{
    module: '"ThemeSwitcher/ThemeSwitcher"',
    name: 'ThemeSwitcherProps',
    rename: 'ThemeSwitcher',
  }],
};

export default Item;
