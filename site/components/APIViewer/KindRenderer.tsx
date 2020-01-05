import * as React from 'react';
import KindRendererFunction from './KindRendererFunction';
import KindRendererInterface from './KindRendererInterface';
import KindRendererSignature from './KindRendererSignature';
import KindRendererTypeAlias from './KindRendererTypeAlias';
import KindRendererTypeLiteral from './KindRendererTypeLiteral';

const KindMap = {
  'Function': KindRendererFunction,
  'Interface': KindRendererInterface,
  'Signature': KindRendererSignature,
  'Type alias': KindRendererTypeAlias,
  'Type literal': KindRendererTypeLiteral,
};

export default (props) => {
  const { kindString } = props;
  const Renderer = KindMap[kindString];

  if (!Renderer) {
    // eslint-disable-next-line no-console
    console.log(`No KindRenderer for '${kindString}'`);
    return null;
  }

  return (
    <Renderer { ...props } />
  );
};
