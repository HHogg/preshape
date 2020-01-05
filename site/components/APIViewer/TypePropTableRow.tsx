import * as React from 'react';
import { Label, TableCell, TableRow, Text } from 'preshape';
import TypeRenderer from './TypeRenderer';

export const getComment = (props) =>
  props.comment &&
  props.comment.shortText;

export const getIsOptional = (props) =>
  props.flags &&
  props.flags.isOptional;

export const getTag = (props, tagName: string) =>
  props.comment &&
  props.comment.tags &&
  (props.comment.tags.find(({ tag }) => tag === tagName) || {}).text;

export default (props) => {
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
              <Text inline textColor="negative-shade-2">
                [Required]
              </Text>
            ) }
          </Text>

          { comment && (
            <Text margin="x1">{ comment } </Text>
          ) }
        </Text>

        <TypeRenderer { ...type }
            onStateChange={ onStateChange }
            parent={ props }
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
