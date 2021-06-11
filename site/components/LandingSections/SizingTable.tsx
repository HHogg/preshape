import * as React from 'react';
import {
  Box,
  Code,
  Table,
  TableProps,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'preshape';

export type TypeSizingVariables = {
  name: string;
  css: string;
  js: string;
  value: string;
}[];

export interface Props extends TableProps {
  name?: string;
  showCellCSS?: boolean;
  showCellJS?: boolean;
  showCellValue?: boolean;
  showCellVisual?: boolean;
  variables: TypeSizingVariables;
}

export default (props: Props) => {
  const {
    name,
    showCellVisual,
    showCellCSS,
    showCellJS,
    showCellValue,
    variables,
    ...rest
  } = props;

  return (
    <Table { ...rest }>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>{ name }</TableHeaderCell>
          { showCellVisual && <TableHeaderCell /> }
          { showCellCSS && <TableHeaderCell>CSS</TableHeaderCell> }
          { showCellJS && <TableHeaderCell>JS</TableHeaderCell> }
          { showCellValue && <TableHeaderCell>Value</TableHeaderCell> }
        </TableRow>
      </TableHeader>
      <TableBody>
        { variables.map(({ name, css, js, value }) => (
          <TableRow key={ name }>
            <TableCell align={ showCellVisual ? 'end' : 'start' } sorted>{ name }</TableCell>
            { showCellVisual && (
              <TableCell>
                <Box
                    backgroundColor="text-shade-1"
                    height="1rem"
                    width={ `var(${css})` } />
              </TableCell>
            ) }

            { showCellCSS && (
              <TableCell breakOn="none">
                <Code>var({ css })</Code>
              </TableCell>
            ) }

            { showCellJS && (
              <TableCell breakOn="none">
                <Code>{ js }</Code>
              </TableCell>
            ) }

            { showCellValue && (
              <TableCell breakOn="none">
                { value }
              </TableCell>
            ) }
          </TableRow>
        )) }
      </TableBody>
    </Table>
  );
};
