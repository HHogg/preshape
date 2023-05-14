import { Box, Grid, GridProps, GridItem, GridItemProps } from 'preshape';
import { CatalogueItem } from '..';
import ThemeIcon from '../../components/ThemeIcon/ThemeIcon';
import { Pictogram } from './pictograms/PictogramGrid';

const Item: CatalogueItem<{
  Grid: GridProps;
  GridItem: GridItemProps;
}> = {
  name: 'Grid',
  description:
    'A use case driven grid system (using display: grid;) for auto flowing, flexible and fixed column layouts.',
  Pictogram,
  apis: [
    {
      module: '"Grid/Grid"',
      name: 'GridProps',
      rename: 'Grid',
    },
    {
      module: '"Grid/GridItem"',
      name: 'GridItemProps',
      rename: 'GridItem',
    },
  ],
  showcase: {
    state: {
      Grid: {
        alignChildren: 'middle',
        gap: 'x1',
        repeat: 3,
      },
      GridItem: {},
    },
    Component: (props) => (
      <Grid {...props.Grid}>
        {Array.from({ length: 9 }).map((_, n) => (
          <GridItem {...props.GridItem} key={n}>
            <Box
              alignChildren="middle"
              backgroundColor="text-shade-1"
              flex="vertical"
              height="3rem"
              textColor="background-shade-1"
              width="3rem"
            >
              <ThemeIcon />
            </Box>
          </GridItem>
        ))}
      </Grid>
    ),
    code: `
import { Grid } from 'preshape';

<Grid gap="x8" repeatWidthMin="240px">
  ...
</Grid>`,
  },
};

export default Item;
