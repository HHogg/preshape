import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
} from 'preshape';
import { JSONOutput } from 'typedoc';
import { RendererContainer } from './Types';
import { getTag } from './utils';
import TypePropTableRow from './TypePropTableRow';

interface Props extends RendererContainer, JSONOutput.Reflection {

}

export default (props: Props) => {
  const { children = [], onStateChange, state } = props;
  const uninheritedProps = children
  .filter((child) => !child.inheritedFrom);

  const hasADefault = uninheritedProps
    .some((child) => getTag(child, 'default'));

  return (
    <Table margin="x4" size="x1">
      <TableHeader>
        <TableRow>
          <TableHeaderCell>
            Properties
          </TableHeaderCell>

          { hasADefault && (
            <TableHeaderCell>
              Default
            </TableHeaderCell>
          ) }
        </TableRow>
      </TableHeader>

      <TableBody>
        { uninheritedProps.map((child) => (
          <TypePropTableRow { ...child }
              key={ child.name }
              onStateChange={ (value) => onStateChange({ ...state, [child.name]: value }) }
              state={ state && state[child.name] }
              withDefault={ hasADefault } />
        )) }

        { !uninheritedProps.length && (
          <TableRow>
            <TableCell colSpan={ 2 }>
              <Text align="middle" strong>
                There are no properties.
              </Text>
            </TableCell>
          </TableRow>
        ) }
      </TableBody>
    </Table>
  );
};
