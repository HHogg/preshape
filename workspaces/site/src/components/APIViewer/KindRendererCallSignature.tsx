import * as React from 'react';
import { JSONOutput } from 'typedoc';
import { Box } from 'preshape';
import { Renderer } from './Types';

interface Props extends Renderer, JSONOutput.ReferenceReflection {}

export default () => {
  return (
    <Box>
    </Box>
  );
};
