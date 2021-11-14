import React, { FunctionComponent } from 'react';
import { JSONOutput } from 'typedoc';
import { Renderer, RendererContainer } from './Types';
import KindRendererInterface from './KindRendererInterface';
import KindRendererCallSignature from './KindRendererCallSignature';
import KindRendererTypeAlias from './KindRendererTypeAlias';
import KindRendererTypeLiteral from './KindRendererTypeLiteral';

const KindMap: {
  [key: string]:
    | FunctionComponent<Renderer & JSONOutput.DeclarationReflection>
    | FunctionComponent<RendererContainer & JSONOutput.DeclarationReflection>;
} = {
  Interface: KindRendererInterface,
  'Call signature': KindRendererCallSignature,
  'Type alias': KindRendererTypeAlias,
  'Type literal': KindRendererTypeLiteral,
};

type Props<K extends typeof KindMap> = JSONOutput.DeclarationReflection & {
  kindString: K;
} & (K extends 'Interface' | 'Call signature' ? RendererContainer : Renderer);

const KindRenderer = <K extends typeof KindMap>(props: Props<K>) => {
  const { kindString } = props;
  const Renderer = kindString && KindMap[kindString];

  if (!Renderer) {
    // eslint-disable-next-line no-console
    console.log(`No KindRenderer for '${kindString}'`);
    return null;
  }

  return <Renderer {...props} />;
};

export default KindRenderer;
