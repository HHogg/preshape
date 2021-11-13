import * as React from 'react';
import { JSONOutput } from 'typedoc';
import { Renderer } from './Types';
import TypeLabel from './TypeLabel';

interface Props extends Renderer, JSONOutput.LiteralType {

}

export default (props: Props) => {
  const {
    onStateChange,
    state,
    value,
  } = props;

  return (
    <TypeLabel
        active={ state === value }
        clickable
        onClick={ () => onStateChange(value) }>
      "{ value }"
    </TypeLabel>
  );
};
