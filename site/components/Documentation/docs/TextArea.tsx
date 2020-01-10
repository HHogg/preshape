import * as React from 'react' ;
import { TextArea, TextAreaProps } from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  TextArea: TextAreaProps;
}> = {
  name: 'TextArea',
  description: 'Standard multiple line text area input for collection user feedback data.',
  pictogram: require('../../../assets/pictogram-textarea.svg').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <TextArea { ...props.TextArea } placeholder="Type into me" rows={ 5 } />
      </Showcase>
    ),
    state: {
      TextArea: {
        label: 'TextArea label',
      },
    },
  },
  apis: [{
    module: '"TextArea/TextArea"',
    name: 'TextAreaProps',
    rename: 'TextArea',
  }],
};

export default Item;
