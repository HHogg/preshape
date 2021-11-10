import * as React from 'react';
import { JSONOutput } from 'typedoc';
import { Box } from 'preshape';
import { Renderer } from './Types';
import TypeLabel from './TypeLabel';

interface Props extends Renderer, JSONOutput.Reflection {}

export default (props: Props) => {
  const isFunction = !!props.signatures;

  return (
    <TypeLabel>
      { isFunction ? 'Function' : 'Object' }
    </TypeLabel>
  );
};
