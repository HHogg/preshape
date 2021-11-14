import React, { PropsWithChildren } from 'react';
import { JSONOutput } from 'typedoc';
import { Renderer } from './Types';
import { getById } from './documentation';
import { getTag } from './utils';
import KindRenderer from './KindRenderer';
import TypeLabel from './TypeLabel';

interface Props extends Renderer, JSONOutput.ReferenceType {}

const TypeRendererReference = (props: PropsWithChildren<Props>) => {
  const { context, id, name, onStateChange, state } = props;

  if (id && context) {
    const api = getById(id);
    const referenceTag = getTag(context, 'reference');

    if (api && (!referenceTag || !referenceTag.startsWith('false'))) {
      return (
        <KindRenderer
          {...api}
          context={context}
          onStateChange={onStateChange}
          state={state}
        />
      );
    }
  }

  return <TypeLabel>{name}</TypeLabel>;
};

export default TypeRendererReference;
