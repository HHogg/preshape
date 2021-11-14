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
  shape?: 'line' | 'square';
  showCellCSS?: boolean;
  showCellJS?: boolean;
  showCellValue?: boolean;
  showCellVisual?: boolean;
  variables: TypeSizingVariables;
}

const SizingTable = (props: Props) => {
  const {
    name,
    shape = 'line',
    showCellVisual,
    showCellCSS,
    showCellJS,
    showCellValue,
    variables,
    ...rest
  } = props;

  return (
    <Table {...rest} margin="x8" size="x3">
      <TableHeader>
        <TableRow>
          <TableHeaderCell colSpan={showCellVisual ? 2 : 1}>
            {name}
          </TableHeaderCell>
          {showCellCSS && <TableHeaderCell>CSS</TableHeaderCell>}
          {showCellJS && <TableHeaderCell>JS</TableHeaderCell>}
          {showCellValue && <TableHeaderCell>Value</TableHeaderCell>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {variables.map(({ name, css, js, value }) => (
          <TableRow key={name}>
            <TableCell align={showCellVisual ? 'end' : 'start'} sorted>
              {name}
            </TableCell>
            {showCellVisual && (
              <TableCell>
                {shape === 'line' && (
                  <Box
                    backgroundColor="text-shade-1"
                    height="1rem"
                    width={`var(${css})`}
                  />
                )}

                {shape === 'square' && (
                  <Box
                    backgroundColor="text-shade-1"
                    borderRadius={name}
                    height={`calc(var(${css}) * 4)`}
                    width={`calc(var(${css}) * 4)`}
                  />
                )}
              </TableCell>
            )}

            {showCellCSS && (
              <TableCell breakOn="none">
                <Code>var({css})</Code>
              </TableCell>
            )}

            {showCellJS && (
              <TableCell breakOn="none">
                <Code>{js}</Code>
              </TableCell>
            )}

            {showCellValue && <TableCell breakOn="none">{value}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SizingTable;
