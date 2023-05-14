import { Icons, InputLabel, Range, RangeProps } from 'preshape';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramRange';

const Item: CatalogueItem<{
  Range: RangeProps;
}> = {
  name: 'Range',
  description:
    'A slider control for selecting a number between a given min and max number.',
  Pictogram,
  apis: [
    {
      module: '"Range/Range"',
      name: 'RangeProps',
      rename: 'Range',
    },
  ],
  showcase: {
    state: {
      Range: {},
    },
    Component: (props) => (
      <InputLabel
        description="This doesn't update anything."
        label="Level of darkness"
      >
        <Range
          {...props.Range}
          addonEnd={<Icons.Sun name="Sun" size="20px" />}
          addonStart={<Icons.Moon name="Moon" size="20px" />}
        />
      </InputLabel>
    ),
    code: `
import { Range } from 'preshape';

<Range
  addonEnd={<Icons.Sun name="Sun" size="20px" />}
  addonStart={<Icons.Moon name="Moon" size="20px" />}
  value={50}
  min={0}
  max={100}
  step={1}
/>`,
  },
};

export default Item;
