import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Base,
  Code,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'preshape';

export default class ColorsTable extends Component {
  static propTypes = {
    showCellCSS: PropTypes.bool,
    showCellJS: PropTypes.bool,
    showCellValue: PropTypes.bool,
    showCellVisual: PropTypes.bool,
    variables: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      css: PropTypes.string,
      js: PropTypes.string,
      value: PropTypes.string,
    })).isRequired,
  };

  render() {
    const {
      showCellCSS,
      showCellJS,
      showCellValue,
      showCellVisual,
      variables,
      ...rest
    } = this.props;

    return (
      <Table { ...rest }>
        <TableHeader>
          <TableRow>
            { showCellVisual && <TableHeaderCell /> }
            <TableHeaderCell sorted>Colour</TableHeaderCell>
            { showCellCSS && <TableHeaderCell>CSS Variable</TableHeaderCell> }
            { showCellJS && <TableHeaderCell>JS Variable</TableHeaderCell> }
            { showCellValue && <TableHeaderCell>Value</TableHeaderCell> }
          </TableRow>
        </TableHeader>

        <TableBody>
          { variables.map(({ name, css, js, value }) => (
            <TableRow key={ value }>
              { showCellVisual && (
                <TableCell>
                  <Base
                      borderColor
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
  }
}
