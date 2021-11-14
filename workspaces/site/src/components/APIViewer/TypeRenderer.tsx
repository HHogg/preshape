/* eslint-disable no-console */
import React, { FunctionComponent } from 'react';
import { Type, TypeKind, TypeKindMap } from 'typedoc';
import { Renderer } from './Types';
import TypeRendererIntrinsic from './TypeRendererIntrinsic';
import TypeRendererReference from './TypeRendererReference';
import TypeRendererReflection from './TypeRendererReflection';
import TypeRendererLiteral from './TypeRendererLiteral';
import TypeRendererUnion from './TypeRendererUnion';

const typeMap: {
  [K in TypeKind]: FunctionComponent<Renderer & TypeKindMap[K]>;
} = {
  intrinsic: TypeRendererIntrinsic,
  literal: TypeRendererLiteral,
  reference: TypeRendererReference,
  reflection: TypeRendererReflection,
  union: TypeRendererUnion,
};

interface Props extends Renderer, Type {}

const TypeRenderer = (props: Props) => {
  const Renderer = typeMap[props.type];

  if (!Renderer) {
    console.log(`No TypeRenderer for '${props.type}'`);
    console.log(props);
    return null;
  }

  return <Renderer {...props} />;
};

export default TypeRenderer;
