import { Label, LabelProps, Labels, LabelsProps } from 'preshape';
import { CatalogueItem } from '..';
import Pictogram from './pictograms/PictogramLabels';

const Item: CatalogueItem<{
  Label: LabelProps;
  Labels: LabelsProps;
}> = {
  name: 'Labels',
  description:
    'Keyword highlighting component, useful for giving specific data emphasis.',
  Pictogram,
  apis: [
    {
      module: '"Label/Labels"',
      name: 'LabelsProps',
      rename: 'Labels',
    },
    {
      module: '"Label/Label"',
      name: 'LabelProps',
      rename: 'Label',
    },
  ],
  showcase: {
    state: {
      Label: {},
      Labels: {},
    },
    Component: (props) => (
      <Labels {...props.Labels}>
        {Array.from({ length: 5 }).map((_, n) => (
          <Label {...props.Label} key={n}>
            Lorem ipsum
          </Label>
        ))}
      </Labels>
    ),
    code: `
import { Labels, Label } from 'preshape';

<Labels>
  <Label>Lorem ipsum</Label>
  <Label>Lorem ipsum</Label>
</Labels>`,
  },
};

export default Item;
