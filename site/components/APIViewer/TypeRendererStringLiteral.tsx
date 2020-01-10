import * as React from 'react';
import TypeLabel from './TypeLabel';

export default (props) => {
  const { onStateChange, state, value } = props;

  return (
    <TypeLabel
        active={ state === value }
        clickable
        onClick={ () => onStateChange(value) }>
      "{ value }"
    </TypeLabel>
  );
};
