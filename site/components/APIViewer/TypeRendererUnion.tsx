import * as React from 'react';
import { Labels } from 'preshape';
import TypeRenderer from './TypeRenderer';

export default (props) => {
  const { onStateChange, state, types } = props;
  const filteredTypes = types.filter(({ name }) => name !== 'undefined');

  if (filteredTypes.length === 1) {
    return (
      <TypeRenderer { ...filteredTypes[0] }
          onStateChange={ onStateChange }
          parent={ props }
          state={ state } />
    );
  }

  return (
    <Labels>
      { filteredTypes.map((type, index) => (
        <TypeRenderer { ...type }
            key={ index }
            onStateChange={ onStateChange }
            parent={ props }
            state={ state } />
      )) }
    </Labels>
  );
};
