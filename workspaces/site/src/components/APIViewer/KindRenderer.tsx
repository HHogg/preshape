import * as React from 'react';
import { JSONOutput } from 'typedoc';
import { Renderer } from './Types';
import KindRendererInterface from './KindRendererInterface';
import KindRendererCallSignature from './KindRendererCallSignature';
import KindRendererTypeAlias from './KindRendererTypeAlias';
import KindRendererTypeLiteral from './KindRendererTypeLiteral';

const KindMap: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: React.FC<any>;
} = {
  'Interface': KindRendererInterface,
  'Call signature': KindRendererCallSignature,
  'Type alias': KindRendererTypeAlias,
  'Type literal': KindRendererTypeLiteral,
};

interface Props extends Renderer, JSONOutput.Reflection {

}

export default (props: Props) => {
  const { kindString } = props;
  const Renderer = kindString && KindMap[kindString];

  if (!Renderer) {
    // eslint-disable-next-line no-console
    console.log(`No KindRenderer for '${kindString}'`);
    return null;
  }

  return (
    <Renderer { ...props } />
  );
};
