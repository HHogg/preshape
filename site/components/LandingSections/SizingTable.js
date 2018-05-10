import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import {
  Base,
  Code,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
} from 'preshape';

export default class SizingTable extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
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
      name,
      showCellVisual,
      showCellCSS,
      showCellJS,
      showCellValue,
      variables,
      ...rest
    } = this.props;

    return (
      <Fragment>
        <Text margin="x2" strong>{ name }</Text>
        <Table { ...rest }>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              { showCellVisual && <TableHeaderCell /> }
              { showCellCSS && <TableHeaderCell>CSS Custom Property</TableHeaderCell> }
              { showCellJS && <TableHeaderCell>JS Variable</TableHeaderCell> }
              { showCellValue && <TableHeaderCell>Value</TableHeaderCell> }
            </TableRow>
          </TableHeader>
          <TableBody>
            { variables.map(({ name, css, js, value }) => (
              <TableRow key={ name }>
                <TableCell align={ showCellVisual ? 'end' : 'start' } sorted>{ name }</TableCell>
                { showCellVisual && (
                  <TableCell>
                    <Base
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
      </Fragment>
    );
  }
}
