import React from 'react';
import { JSONOutput } from 'typedoc';
import { Renderer } from './Types';
import TypeLabel from './TypeLabel';

interface Props extends Renderer, JSONOutput.DeclarationReflection {}

const KindRendererTypeLiteral = (props: Props) => {
  const isFunction = !!props.signatures;

  return <TypeLabel>{isFunction ? 'Function' : 'Object'}</TypeLabel>;
};

export default KindRendererTypeLiteral;
