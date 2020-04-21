import * as React from 'react' ;
import { TextArea, TextAreaProps, TextAreaLabel, TextAreaLabelProps } from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  TextArea: TextAreaProps;
  TextAreaLabel: TextAreaLabelProps;
}> = {
  name: 'TextArea',
  description: 'Standard multi line textarea input for data collection.',
  pictogram: require('../../../assets/pictogram-textarea.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <TextAreaLabel { ...props.TextAreaLabel }>
          <TextArea { ...props.TextArea } placeholder="Type into me" rows={ 5 } />
        </TextAreaLabel>
      </Showcase>
    ),
    state: {
      TextArea: {},
      TextAreaLabel: {
        label: 'TextArea label',
      },
    },
  },
  apis: [{
    module: '"TextArea/TextAreaLabel"',
    name: 'TextAreaLabelProps',
    rename: 'TextAreaLabel',
  }, {
    module: '"TextArea/TextArea"',
    name: 'TextAreaProps',
    rename: 'TextArea',
  }],
};

export default Item;
