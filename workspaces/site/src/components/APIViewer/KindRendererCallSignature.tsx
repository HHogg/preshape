import * as React from 'react';
import { JSONOutput } from 'typedoc';
import { Box } from 'preshape';
import { RendererContainer } from './Types';

interface Props extends RendererContainer, JSONOutput.DeclarationReflection {}

export default () => {
  return (
    <Box>
    </Box>
  );
};
