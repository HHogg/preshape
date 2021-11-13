/* eslint-disable no-console */
import * as React from 'react';
import { Type, TypeKind, TypeKindMap } from 'typedoc';
import { Renderer } from './Types';
import TypeRendererIntrinsic from './TypeRendererIntrinsic';
import TypeRendererReference from './TypeRendererReference';
import TypeRendererReflection from './TypeRendererReflection';
import TypeRendererLiteral from './TypeRendererLiteral';
import TypeRendererUnion from './TypeRendererUnion';

const TypeMap: {
  [K in TypeKind]: React.FunctionComponent<Renderer & TypeKindMap[K]>;
} = {
  intrinsic: TypeRendererIntrinsic,
  literal: TypeRendererLiteral,
  reference: TypeRendererReference,
  reflection: TypeRendererReflection,
  union: TypeRendererUnion,
};

interface Props extends Renderer, Type {}

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
