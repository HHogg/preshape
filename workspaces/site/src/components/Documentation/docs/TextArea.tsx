import React from 'react';
import {
  TextArea,
  TextAreaProps,
  TextAreaWrapper,
  TextAreaWrapperProps,
} from 'preshape';
import Showcase from '../Showcase';
import { CatalogueItem } from '.';

const Item: CatalogueItem<{
  TextArea: TextAreaProps;
  TextAreaWrapper: TextAreaWrapperProps;
}> = {
  name: 'TextArea',
  description: 'Standard multi line textarea input for data collection.',
  pictogram: require('../../SVGs/PictogramTextarea').default,
  type: 'component',
  showcase: {
    Component: (props) => (
      <Showcase>
        <TextAreaWrapper {...props.TextAreaWrapper}>
          <TextArea {...props.TextArea} placeholder="Type into me" rows={5} />
        </TextAreaWrapper>
      </Showcase>
    ),
    state: {
      TextArea: {},
      TextAreaWrapper: {
        label: 'TextAreaWrapper label',
      },
    },
  },
  apis: [
    {
      module: '"TextArea/TextAreaWrapper"',
      name: 'TextAreaWrapperProps',
      rename: 'TextAreaWrapper',
    },
    {
      module: '"TextArea/TextArea"',
      name: 'TextAreaProps',
      rename: 'TextArea',
    },
  ],
};

export default Item;
