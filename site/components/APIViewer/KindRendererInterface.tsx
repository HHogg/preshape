import * as React from 'react';
import { JSONOutput } from 'typedoc';
import { Renderer } from './Types';
import TypePropTable from './TypePropTable';

interface Props extends Renderer, JSONOutput.Reflection {}

export default (props: Props) => {
  return (
    <TypePropTable { ...props } />
  );
};
