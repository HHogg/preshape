import * as React from 'react' ;
import { Label, LabelProps, Labels, LabelsProps } from 'preshape';
import { CatalogueItem } from '.';
import Showcase from '../Showcase';

const Item: CatalogueItem<{
  Label: LabelProps;
  Labels: LabelsProps;
}> = {
  name: 'Labels',
  description: 'Keyword highlighting component, useful for giving specific data emphasis.',
  pictogram: require('../../../assets/pictogram-labels.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <Labels { ...props.Labels }>
          { Array.from({ length: 5 }).map((_, n) => (
            <Label { ...props.Label } key={ n }>
              Lorem ipsum
            </Label>
          )) }
        </Labels>
      </Showcase>
    ),
    state: {
      Label: {},
      Labels: {},
    },
  },
  apis: [{
    module: '"Label/Labels"',
    name: 'LabelsProps',
    rename: 'Labels',
  }, {
    module: '"Label/Label"',
    name: 'LabelProps',
    rename: 'Label',
  }],
};

export default Item;
