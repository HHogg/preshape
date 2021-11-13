import * as React from 'react';
import { JSONOutput } from 'typedoc';
import { Renderer } from './Types';
import TypeRenderer from './TypeRenderer';

interface Props extends Renderer, JSONOutput.DeclarationReflection {}

export default (props: Props) => {
  const { context, onStateChange, state, type } = props;

  return (
    <TypeRenderer { ...type }
        context={ context }
        onStateChange={ onStateChange }
        state={ state } />
  );
};
