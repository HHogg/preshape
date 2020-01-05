import * as React from 'react';
import TypeLabel from './TypeLabel';

export default (props) => {
  const { onStateChange, state, value } = props;

  return (
    <TypeLabel
        backgroundColor={ state === value ? 'accent-shade-2' : undefined }
        clickable
        onClick={ () => onStateChange(value) }>
      "{ value }"
    </TypeLabel>
  );
};
