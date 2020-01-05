/* eslint-disable no-console */
import * as React from 'react';
import TypeRendererIntrinsic from './TypeRendererIntrinsic';
import TypeRendererReference from './TypeRendererReference';
import TypeRendererReflection from './TypeRendererReflection';
import TypeRendererStringLiteral from './TypeRendererStringLiteral';
import TypeRendererUnion from './TypeRendererUnion';

const TypeMap = {
  intrinsic: TypeRendererIntrinsic,
  reference: TypeRendererReference,
  reflection: TypeRendererReflection,
  stringLiteral: TypeRendererStringLiteral,
  union: TypeRendererUnion,
};

export default (props) => {
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
