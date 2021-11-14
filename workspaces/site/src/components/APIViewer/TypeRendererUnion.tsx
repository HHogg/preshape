import React from 'react';
import { JSONOutput } from 'typedoc';
import TypeRenderer from './TypeRenderer';
import { Renderer } from './Types';

interface Props extends Renderer, JSONOutput.UnionType {}

const TypeRendererUnion = (props: Props) => {
  const { context, onStateChange, state, types } = props;
  const filteredTypes = types.filter(({ name }) => name !== 'undefined');

  if (filteredTypes.length === 1) {
    return (
      <TypeRenderer
        {...filteredTypes[0]}
        context={context}
        onStateChange={onStateChange}
        state={state}
      />
    );
  }

  return (
    <>
      {filteredTypes.map((type, index) => (
        <TypeRenderer
          {...type}
          context={context}
          key={index}
          onStateChange={onStateChange}
          state={state}
        />
      ))}
    </>
  );
};

export default TypeRendererUnion;
