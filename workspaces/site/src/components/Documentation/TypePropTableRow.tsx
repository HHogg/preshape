import { JSONOutput } from 'typedoc';
import { Buttons, Label, TableCell, TableRow, Text } from 'preshape';
import { ApiValueController } from './Types';
import TypeRenderer from './TypeRenderer';
import { getComment, getIsOptional, getTag } from './documentation';

interface Props extends ApiValueController {
  reflection: JSONOutput.DeclarationReflection;
  withDefault?: boolean;
}

const TypePropTableRow = (props: Props) => {
  const { reflection, onStateChange, state, withDefault } = props;
  const comment = getComment(reflection);
  const deflt = withDefault && getTag(reflection, 'default');
  const isOptional = getIsOptional(reflection);

  return (
    <TableRow id={reflection.name}>
      <TableCell paddingVertical="x4">
        <Text margin="x3">
          <Text margin="x1" strong>
            {reflection.name}{' '}
            {!isOptional && (
              <Text tag="span" textColor="negative-shade-4">
                [Required]
              </Text>
            )}
          </Text>

          {comment && <Text margin="x1">{comment} </Text>}
        </Text>

        <Buttons wrap>
          <TypeRenderer
            reflection={reflection}
            onStateChange={onStateChange}
            state={state}
            type={reflection.type}
          />
        </Buttons>
      </TableCell>

      {withDefault && (
        <TableCell paddingVertical="x4">
          {deflt && <Label>{deflt}</Label>}
        </TableCell>
      )}
    </TableRow>
  );
};

export default TypePropTableRow;
