import * as React from 'react';
import { JSONOutput } from 'typedoc';
import { Label, TableCell, TableRow, Text } from 'preshape';
import { Renderer } from './Types';
import TypeRenderer from './TypeRenderer';
import { getComment, getIsOptional, getTag } from './utils';

interface Props extends Renderer, JSONOutput.Reflection {
  withDefault?: boolean;
}

export default (props: Props) => {
  const { name, onStateChange, state, type, withDefault } = props;
  const comment = getComment(props);
  const deflt = withDefault && getTag(props, 'default');
  const isOptional = getIsOptional(props);

  return (
    <TableRow>
      <TableCell>
        <Text margin="x3">
          <Text margin="x1" strong>
            { name } { !isOptional && (
              <Text inline textColor="negative-shade-4">
                [Required]
              </Text>
            ) }
          </Text>

          { comment && (
            <Text margin="x1">{ comment } </Text>
          ) }
        </Text>

        <TypeRenderer { ...type }
            context={ props }
            onStateChange={ onStateChange }
            state={ state } />
      </TableCell>

      { withDefault && (
        <TableCell>
          { deflt && (
            <Label>
              { deflt }
            </Label>
          ) }
        </TableCell>
      ) }
    </TableRow>
  );
};
