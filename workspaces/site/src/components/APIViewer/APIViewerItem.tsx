import React from 'react';
import { Box, Text } from 'preshape';
import { JSONOutput } from 'typedoc';
import { StatePrimitive } from './Types';
import KindRenderer from './KindRenderer';

interface Props extends JSONOutput.Reflection {
  onStateChange: (value?: StatePrimitive) => void;
  state: StatePrimitive;
}

const ApiViewerItem = (props: Props) => {
  const { comment, name } = props;

  return (
    <Box margin="x8">
      <Box margin="x4">
        <Text size="x4" strong>
          {name}
        </Text>
        {comment && comment.shortText && <Text>{comment.shortText}</Text>}
      </Box>

      <KindRenderer {...props} context={props} />
    </Box>
  );
};

export default ApiViewerItem;
