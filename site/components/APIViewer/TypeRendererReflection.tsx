import * as React from 'react';
import KindRenderer from './KindRenderer';

export default (props) => {
  const {
    declaration,
    onStateChange,
    state,
  } = props;

  return (
    <KindRenderer { ...declaration }
        onStateChange={ onStateChange }
        parent={ props }
        state={ state } />
  );
};
