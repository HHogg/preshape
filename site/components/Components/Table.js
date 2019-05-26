import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'preshape';
import onEdit from '../Component/onEdit';
import DocumentationPage from '../Documentation/DocumentationPage';
import ComponentExample from '../Component/ComponentExample';
import ComponentPropsTable from '../Component/ComponentPropsTable';

const headers = [
  'Burger',
  'Energy (kal)',
  'Fat (g)',
  'Carbohydrate (g)',
  'Fibre (g)',
  'Protein (g)',
  'Salt (g)',
];

const data = [
  ['Big Tasty', 799, 46, 50, 4.3, 45, 3.4],
  ['Big Mac', 508, 25, 43, 3.6, 26, 2.3],
  ['Quarter Pounder', 518, 27, 37, 2.5, 31, 2.5],
  ['Double Cheeseburger', 445, 23, 32, 2.4, 26, 2.4],
  ['Cheeseburger', 301, 12, 31, 2.4, 16, 1.6],
  ['Hamburger', 250, 8.3, 30, 2.4, 13, 1.2],
];

export default class ComponentTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortDirection: -1,
      sortIndex: 1,
      TableHeaderCell: {
        sortable: true,
      },
    };
  }

  handleEdit(component, prop, value) {
    if (prop === 'sorted' || prop === 'sortable') {
      this.setState({
        ...onEdit(this.state, component, prop, value),
        sortDirection: value ? -1 : null,
        sortIndex: value ? 1 : null,
      });
    } else {
      this.setState(onEdit(this.state, component, prop, value));
    }
  }

  render() {
    const { sortDirection, sortIndex } = this.state;

    const sortedData = data.sort((a, b) => {
      if (sortIndex === 0) {
        if (sortDirection === -1) {
          return b[0].localeCompare(a[0]);
        } else {
          return a[0].localeCompare(b[0]);
        }
      } else if (sortDirection === -1) {
        return b[sortIndex] - a[sortIndex];
      } else {
        return a[sortIndex] - b[sortIndex];
      }
    });

    return (
      <DocumentationPage { ...this.props }>
        <ComponentExample scrollable>
          <Table { ...this.state.Table }>
            <TableHeader>
              <TableRow>
                { headers.map((header, index) => (
                  <TableHeaderCell
                      align={ index > 0 ? 'end' : 'start' }
                      key={ header }
                      onClick={ () => this.setState({
                        sortIndex: index,
                        sortDirection: index !== sortIndex ? -1
                          : (sortDirection === -1 ? 1 : -1),
                      }) }
                      sortable
                      sorted={ sortIndex === index }>
                    { header }
                  </TableHeaderCell>
                )) }
              </TableRow>
            </TableHeader>

            <TableBody>
              { sortedData.map((data) => (
                <TableRow key={ data[0] }>
                  { data.map((data, index) => (
                    <TableCell
                        align={ index > 0 ? 'end' : 'start' }
                        key={ index }
                        sorted={ sortIndex === index }>
                      { data }
                    </TableCell>
                  )) }
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </ComponentExample>

        <ComponentPropsTable
            components={ [
              /* require('!!@brandwatch/axiom-documentation-loader!../../../src/Table/Table'), */
              /* require('!!@brandwatch/axiom-documentation-loader!../../../src/Table/TableBody'), */
              /* require('!!@brandwatch/axiom-documentation-loader!../../../src/Table/TableCell'), */
              /* require('!!@brandwatch/axiom-documentation-loader!../../../src/Table/TableHeader'), */
              /* require('!!@brandwatch/axiom-documentation-loader!../../../src/Table/TableHeaderCell'), */
              /* require('!!@brandwatch/axiom-documentation-loader!../../../src/Table/TableRow'), */
            ] }
            onEdit={ (...args) => this.handleEdit(...args) }
            values={ this.state } />
      </DocumentationPage>
    );
  }
}
