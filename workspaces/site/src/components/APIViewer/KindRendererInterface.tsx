import * as React from 'react';
import { JSONOutput } from 'typedoc';
import { RendererContainer } from './Types';
import TypePropTable from './TypePropTable';

interface Props extends RendererContainer, JSONOutput.DeclarationReflection {}

export default (props: Props) => {
  return (
    <TypePropTable { ...props } />
  );
};
