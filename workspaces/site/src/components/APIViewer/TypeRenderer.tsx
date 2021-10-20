/* eslint-disable no-console */
import * as React from 'react';
import { JSONOutput } from 'typedoc';
import { Renderer } from './Types';
import TypeRendererIntrinsic from './TypeRendererIntrinsic';
import TypeRendererReference from './TypeRendererReference';
import TypeRendererReflection from './TypeRendererReflection';
import TypeRendererStringLiteral from './TypeRendererStringLiteral';
import TypeRendererUnion from './TypeRendererUnion';

const TypeMap: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.FC<any>;
} = {
  intrinsic: TypeRendererIntrinsic,
  reference: TypeRendererReference,
  reflection: TypeRendererReflection,
  stringLiteral: TypeRendererStringLiteral,
  union: TypeRendererUnion,
};

interface Props extends Renderer, JSONOutput.UnknownType {}

export default (props: Props) => {
  const Renderer = TypeMap[props.type];

  if (!Renderer) {
    console.log(`No TypeRenderer for '${props.type}'`);
    console.log(props);
    return null;
  }

  return (
    <Renderer { ...props } />
  );
};
