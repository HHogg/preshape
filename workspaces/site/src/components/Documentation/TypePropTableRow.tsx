import { Buttons, Label, TableCell, TableRow, Text } from 'preshape';
import { JSONOutput } from 'typedoc';
import TypeRenderer from './TypeRenderer';
import { ApiValueController } from './Types';
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
      <TableCell paddingVertical="x6">
        <Text margin="x3">
          <Text margin="x2" weight="x2">
            <Text size="x5" tag="span">
              {reflection.name}{' '}
            </Text>
            {!isOptional && (
              <Text tag="span" textColor="negative-shade-4">
                [Required]
              </Text>
            )}
          </Text>

          {comment && <Text margin="x2">{comment} </Text>}
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
