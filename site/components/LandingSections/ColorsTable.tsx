import * as React from 'react' ;
import {
  Base,
  Code,
  Table,
  TableProps,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'preshape';

export type TypeColorVariables = {
  name: string;
  css: string;
  js: string;
  value: string;
}[];

export interface Props extends TableProps {
  showCellCSS?: boolean;
  showCellJS?: boolean;
  showCellValue?: boolean;
  showCellVisual?: boolean;
  variables: TypeColorVariables;
}

export default (props: Props) => {
  const {
    showCellCSS,
    showCellJS,
    showCellValue,
    showCellVisual,
    variables,
    ...rest
  } = props;

  return (
    <Table { ...rest }>
      <TableHeader>
        <TableRow>
          { showCellVisual && <TableHeaderCell /> }
          <TableHeaderCell sorted>Color</TableHeaderCell>
          { showCellCSS && <TableHeaderCell>CSS</TableHeaderCell> }
          { showCellJS && <TableHeaderCell>JS</TableHeaderCell> }
          { showCellValue && <TableHeaderCell>Value</TableHeaderCell> }
        </TableRow>
      </TableHeader>

      <TableBody>
        { variables.map(({ name, css, js, value }) => (
          <TableRow key={ value }>
            { showCellVisual && (
              <TableCell>
                <Base
                    borderSize="x1"
                    height="0"
                    padding="x2"
                    style={ { backgroundColor: value } }
                    width="0" />
              </TableCell>
            ) }

            <TableCell sorted>{ name }</TableCell>
            { showCellCSS && <TableCell><Code>var({ css })</Code></TableCell> }
            { showCellJS && <TableCell><Code>{ js }</Code></TableCell> }
            { showCellValue && <TableCell uppercase>{ value }</TableCell> }
          </TableRow>
        )) }
      </TableBody>
    </Table>
  );
};
