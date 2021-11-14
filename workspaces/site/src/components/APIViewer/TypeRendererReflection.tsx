import React from 'react';
import { JSONOutput } from 'typedoc';
import { Renderer } from './Types';
import KindRenderer from './KindRenderer';

interface Props extends Renderer, JSONOutput.ReflectionType {}

const TypeRendererReflection = (props: Props) => {
  const { context, declaration, onStateChange, state } = props;

  return (
    <KindRenderer
      {...declaration}
      context={context}
      onStateChange={onStateChange}
      state={state}
    />
  );
};

export default TypeRendererReflection;
