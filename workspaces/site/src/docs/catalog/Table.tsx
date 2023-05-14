import { useState } from 'react';
import {
  Table,
  TableProps,
  TableBody,
  TableBodyProps,
  TableCell,
  TableCellProps,
  TableHeader,
  TableHeaderProps,
  TableHeaderCell,
  TableHeaderCellProps,
  TableRow,
  TableRowProps,
} from 'preshape';
import { CatalogueItem } from '..';
import Pictogram from './pictograms/PictogramTable';

const headers = [
  'Burger',
  'Energy (kal)',
  'Fat (g)',
  'Carbohydrate (g)',
  'Fibre (g)',
  'Protein (g)',
  'Salt (g)',
];

const data: [string, number, number, number, number, number, number][] = [
  ['Big Tasty', 799, 46, 50, 4.3, 45, 3.4],
  ['Big Mac', 508, 25, 43, 3.6, 26, 2.3],
  ['Quarter Pounder', 518, 27, 37, 2.5, 31, 2.5],
  ['Double Cheeseburger', 445, 23, 32, 2.4, 26, 2.4],
  ['Cheeseburger', 301, 12, 31, 2.4, 16, 1.6],
  ['Hamburger', 250, 8.3, 30, 2.4, 13, 1.2],
];

const Item: CatalogueItem<{
  Table: TableProps;
  TableBody: TableBodyProps;
  TableCell: TableCellProps;
  TableHeader: TableHeaderProps;
  TableHeaderCell: TableHeaderCellProps;
  TableRow: TableRowProps;
}> = {
  name: 'Table',
  description:
    'Standard table layout components. Useful for presenting, comparing and sorting raw tabular data',
  Pictogram,
  apis: [
    {
      module: '"Table/Table"',
      name: 'TableProps',
      rename: 'Table',
    },
    {
      module: '"Table/TableHeader"',
      name: 'TableHeaderProps',
      rename: 'TableHeader',
    },
    {
      module: '"Table/TableHeaderCell"',
      name: 'TableHeaderCellProps',
      rename: 'TableHeaderCell',
    },
    {
      module: '"Table/TableBody"',
      name: 'TableBodyProps',
      rename: 'TableBody',
    },
    {
      module: '"Table/TableRow"',
      name: 'TableRowProps',
      rename: 'TableRow',
    },
    {
      module: '"Table/TableCell"',
      name: 'TableCellProps',
      rename: 'TableCell',
    },
  ],
  showcase: {
    state: {
      Table: {},
      TableBody: {},
      TableCell: {},
      TableHeader: {},
      TableHeaderCell: {
        sortable: true,
      },
      TableRow: {},
    },
    Component: (props) => {
      const [[sortIndex, sortDirection], setState] = useState([1, -1]);

      const sortedData = data.sort((a, b) => {
        if (sortIndex === 0) {
          if (sortDirection === -1) {
            return b[0].localeCompare(a[0]);
          } else {
            return a[0].localeCompare(b[0]);
          }
        } else if (sortDirection === -1) {
          return (b[sortIndex] as number) - (a[sortIndex] as number);
        } else {
          return (a[sortIndex] as number) - (b[sortIndex] as number);
        }
      });

      return (
        <Table {...props.Table} size="x2">
          <TableHeader {...props.TableHeader}>
            <TableRow {...props.TableRow}>
              {headers.map((header, index) => (
                <TableHeaderCell
                  {...props.TableHeaderCell}
                  align={index > 0 ? 'end' : 'start'}
                  breakOn="none"
                  key={header}
                  onClick={() =>
                    setState([
                      index,
                      index !== sortIndex ? -1 : sortDirection === -1 ? 1 : -1,
                    ])
                  }
                  sortable
                  sorted={sortIndex === index}
                >
                  {header}
                </TableHeaderCell>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody {...props.TableBody}>
            {sortedData.map((data) => (
              <TableRow {...props.TableRow} clickable key={data[0]}>
                {data.map((data, index) => (
                  <TableCell
                    {...props.TableCell}
                    align={index > 0 ? 'end' : 'start'}
                    key={index}
                    sorted={sortIndex === index}
                  >
                    {data}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    },
    code: `
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'preshape';

<Table size="x2">
  <TableHeader>
    <TableRow>
      <TableHeaderCell sortable sorted>...</TableHeaderCell>
      <TableHeaderCell sortable>...</TableHeaderCell>
    </TableRow>
  </TableHeader>

  <TableBody>
    <TableRow clickable>
      <TableCell sorted>...</TableCell>
      <TableCell>...</TableCell>
    </TableRow>
  </TableBody>
</Table>
`,
  },
};

export default Item;
