import * as React from 'react';
import { JSONOutput } from 'typedoc';
import { Renderer } from './Types';
import TypeLabel from './TypeLabel';

interface Props extends Renderer, JSONOutput.LiteralType {}

const TypeRendererLiteral = (props: Props) => {
  const { onStateChange, state, value } = props;

  return (
    <TypeLabel
      active={state === value}
      clickable
      onClick={() => onStateChange(value)}
    >
      "{value}"
    </TypeLabel>
  );
};

export default TypeRendererLiteral;
