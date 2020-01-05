import * as React from 'react';
import TypeLabel from './TypeLabel';

export default (props) => {
  return (
    <TypeLabel hasInfo>
      { props.signatures ? 'Function' : 'Object' }
    </TypeLabel>
  );
};
