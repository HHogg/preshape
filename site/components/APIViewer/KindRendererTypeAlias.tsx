import * as React from 'react';
import TypeRenderer from './TypeRenderer';

export default (props) => {
  const { onStateChange, state, type } = props;

  return (
    <TypeRenderer { ...type }
        onStateChange={ onStateChange }
        parent={ props }
        state={ state } />
  );
};
