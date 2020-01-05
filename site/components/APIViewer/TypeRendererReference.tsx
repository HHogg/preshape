import * as React from 'react';
import { Label, Text } from 'preshape';
import { getById } from './documentation';
import { getTag } from './TypePropTableRow';
import KindRenderer from './KindRenderer';

export default (props) => {
  const { onStateChange, parent, state } = props;
  const api = getById(props.id);
  const referenceTag = getTag(parent, 'reference');

  if (api && (!referenceTag || !referenceTag.startsWith('false'))) {
    return (
      <KindRenderer { ...api }
          onStateChange={ onStateChange }
          parent={ props }
          state={ state } />
    );
  }

  return (
    <Label>
      { props.name }
    </Label>
  );
};
