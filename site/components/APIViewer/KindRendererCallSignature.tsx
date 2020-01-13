import * as React from 'react';
import { JSONOutput } from 'typedoc';
import { Base } from 'preshape';
import { Renderer } from './Types';

interface Props extends Renderer, JSONOutput.ReferenceReflection {}

export default (props: Props) => {
  return (
    <Base>

    </Base>
  );
};
