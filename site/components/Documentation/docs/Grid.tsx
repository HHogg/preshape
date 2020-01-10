import * as React from 'react' ;
import { Grid, GridProps, GridItem, GridItemProps, Flex } from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';
import ThemeIcon from '../../ThemeIcon/ThemeIcon';

const Item: CatalogueItem<{
  Grid: GridProps;
  GridItem: GridItemProps;
}> = {
  name: 'Grid',
  description: 'A use case driven grid system (using display: grid;) for auto flowing, flexible and fixed column layouts.',
  pictogram: require('../../../assets/pictogram-grid.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <Grid { ...props.Grid }>
          { Array.from({ length: 9 }).map((_, n) => (
            <GridItem { ...props.GridItem } key={ n }>
              <Flex
                  alignChildren="middle"
                  backgroundColor="text-shade-1"
                  direction="vertical"
                  height="3rem"
                  textColor="background-shade-1"
                  width="3rem">
                <ThemeIcon size="1.5rem" />
              </Flex>
            </GridItem>
          )) }
        </Grid>
      </Showcase>
    ),
    state: {
      Grid: {
        alignChildren: 'middle',
        gap: 'x1',
        repeat: 3,
      },
      GridItem: {},
    },
  },
  apis: [{
    module:'"Grid/Grid"',
    name: 'GridProps',
    rename: 'Grid',
  }, {
    module:'"Grid/GridItem"',
    name: 'GridItemProps',
    rename: 'GridItem',
  }],
};

export default Item;
