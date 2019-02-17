import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Base,
  Code,
  Responsive,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
} from 'preshape';
import { widthLarge, widthMedium, widthSmall } from '../Root';
import ComponentPropsTableRow from './ComponentPropsTableRow';

export default class ComponentPropsTable extends Component {
  static propTypes = {
    components: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired,
    values: PropTypes.object,
  };

  render() {
    const { components, onEdit, values } = this.props;

    return (
      <Responsive queries={ [widthSmall, widthMedium, widthLarge] }>
        { (match) => components.map(({ name, props }) => (
          <Base key={ name } margin="x6">
            <Text margin="x2" size="x3"><Code>{ `<${name}>` }</Code></Text>
            <Table margin="x2">
              <TableHeader>
                <TableRow>
                  <TableHeaderCell width="50%">Property</TableHeaderCell>

                  { match(widthSmall) && (
                    <TableHeaderCell width="10%">Type</TableHeaderCell>
                  ) }

                  { match(widthLarge) && (
                    <TableHeaderCell width="10%">Default</TableHeaderCell>
                  ) }

                  { match(widthMedium) && (
                    <TableHeaderCell width="30%">Editor</TableHeaderCell>
                  ) }
                </TableRow>
              </TableHeader>

              <TableBody>
                { Object.entries(props).map(([prop, props]) => (
                  <ComponentPropsTableRow { ...props }
                      hasDefaultColumn={ match(widthLarge) }
                      hasEditorColumn={ match(widthMedium) }
                      hasTypeColumn={ match(widthSmall) }
                      key={ prop }
                      name={ prop }
                      onEdit={ (value) => onEdit(name, prop, value) }
                      value={ (values[name] || {})[prop] } />
                )) }

                { Object.entries(props).length === 0 && (
                  <TableRow>
                    <TableCell colSpan="4">
                      <Text align="middle" size="x1">
                        This component has no specific props.
                      </Text>
                    </TableCell>
                  </TableRow>
                ) }
              </TableBody>
            </Table>
          </Base>
        )) }
      </Responsive>
    );
  }
}
