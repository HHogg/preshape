import {
  TextArea,
  TextAreaProps,
  TextAreaLabel,
  TextAreaLabelProps,
} from 'preshape';
import { CatalogueItem } from '..';
import { Pictogram } from './pictograms/PictogramTextarea';

const Item: CatalogueItem<{
  TextArea: TextAreaProps;
  TextAreaLabel: TextAreaLabelProps;
}> = {
  name: 'TextArea',
  description: 'Standard multi line textarea input for data collection.',
  Pictogram,
  apis: [
    {
      module: '"TextArea/TextAreaLabel"',
      name: 'TextAreaLabelProps',
      rename: 'TextAreaLabel',
    },
    {
      module: '"TextArea/TextArea"',
      name: 'TextAreaProps',
      rename: 'TextArea',
    },
  ],
  showcase: {
    state: {
      TextArea: {},
      TextAreaLabel: {
        label: 'TextAreaLabel label',
      },
    },
    Component: (props) => (
      <TextAreaLabel {...props.TextAreaLabel}>
        <TextArea {...props.TextArea} placeholder="Type into me" rows={5} />
      </TextAreaLabel>
    ),
    code: `
import { TextAreaLabel, TextArea } from 'preshape';

<TextAreaLabel label="TextArea label">
  <TextArea
    placeholder="Email address"
    onChange={handleChange}
    value={someValue} />
</TextAreaLabel>`,
  },
};

export default Item;
