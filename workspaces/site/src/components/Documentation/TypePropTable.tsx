import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
} from 'preshape';
import { APIItemProps } from './ComponentDocumentation';
import TypePropTableRow from './TypePropTableRow';
import { getTag } from './documentation';

type Props = APIItemProps

const TypePropTable = (props: Props) => {
  const { reflection, onStateChange, state } = props;
  const { children = [] } = reflection;
  const nonhereditaryProps = children.filter((child) => !child.inheritedFrom);
  const hasADefault = nonhereditaryProps.some((child) =>
    getTag(child, 'default')
  );

  return (
    <Table margin="x4" size="x3">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Properties</TableHeaderCell>

          {hasADefault && <TableHeaderCell>Default</TableHeaderCell>}
        </TableRow>
      </TableHeader>

      <TableBody>
        {nonhereditaryProps.map((prop) => (
          <TypePropTableRow
            reflection={prop}
            key={prop.name}
            onStateChange={(value) =>
              onStateChange({ ...state, [prop.name]: value })
            }
            state={state && state[prop.name]}
            withDefault={hasADefault}
          />
        ))}

        {!nonhereditaryProps.length && (
          <TableRow>
            <TableCell colSpan={2}>
              <Text align="middle" strong>
                There are no properties.
              </Text>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TypePropTable;
