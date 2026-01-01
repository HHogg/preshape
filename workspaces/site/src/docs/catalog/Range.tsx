import { MoonIcon, SunIcon } from 'lucide-react';
import { InputLabel, Range, RangeProps } from 'preshape';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramRange';
import { useState } from 'react';

const Item: CatalogueItem<{
  Range: RangeProps<[number, number]>;
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
      Range: {
        addonEnd: <SunIcon name="Sun" size="20px" />,
        addonStart: <MoonIcon name="Moon" size="20px" />,
        min: 0,
        max: 100,
        step: 1,
        value: [50, 75],
        onChange: () => null,
      },
    },
    Component: (props) => {
      const [singleValue, setSingleValue] = useState<number>(
        (props.Range.value as [number, number])[0]
      );
      const [doubleValue, setDoubleValue] = useState<[number, number]>(
        props.Range.value as [number, number]
      );

      return (
        <>
          <InputLabel
            description="This doesn't update anything."
            label="Level of darkness"
            margin="x3"
          >
            <Range
              addonEnd={props.Range.addonEnd}
              addonStart={props.Range.addonStart}
              min={props.Range.min}
              max={props.Range.max}
              step={props.Range.step}
              value={singleValue}
              onChange={(value) => setSingleValue(value)}
            />
          </InputLabel>

          <InputLabel
            description="This doesn't update anything."
            label="Level of darkness"
            margin="x3"
          >
            <Range
              addonEnd={props.Range.addonEnd}
              addonStart={props.Range.addonStart}
              min={props.Range.min}
              max={props.Range.max}
              step={props.Range.step}
              value={singleValue}
              onChange={(value) => setSingleValue(value)}
              trackFillColor="text-shade-1"
            />
          </InputLabel>

          <InputLabel
            description="This doesn't update anything."
            label="Level of darkness"
            margin="x3"
          >
            <Range
              addonEnd={props.Range.addonEnd}
              addonStart={props.Range.addonStart}
              min={props.Range.min}
              max={props.Range.max}
              step={props.Range.step}
              value={doubleValue}
              onChange={(value) => setDoubleValue(value)}
              thumbColor="accent-shade-4"
              trackFillColor="accent-shade-4"
            />
          </InputLabel>
        </>
      );
    },
    code: `
import { Range } from 'preshape';

<Range
  addonEnd={<SunIcon name="Sun" size="20px" />}
  addonStart={<MoonIcon name="Moon" size="20px" />}
  value={50}
  min={0}
  max={100}
  step={1}
/>`,
  },
};

export default Item;
