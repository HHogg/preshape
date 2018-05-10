import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Code, Label, Labels, TableRow, TableCell, Text } from 'preshape';
import ComponentPropsEditorBoolean from './ComponentPropsEditorBoolean';
import ComponentPropsEditorOneOf from './ComponentPropsEditorOneOf';
import ComponentPropsEditorNumber from './ComponentPropsEditorNumber';
import ComponentPropsEditorString from './ComponentPropsEditorString';

const typeNameMap = {
  arrayOf: 'ArrayOf',
  bool: 'Boolean',
  enum: 'OneOf',
  func: 'Function',
  node: 'Node',
  number: 'Number',
  object: 'Object',
  shape: 'Object',
  string: 'String',
  union: 'OneOfType',
};

const typeEditorMap = {
  bool: ComponentPropsEditorBoolean,
  enum: ComponentPropsEditorOneOf,
  number:ComponentPropsEditorNumber,
  string:ComponentPropsEditorString,
};

export default class ComponentPropsTableRow extends Component {
  static propTypes = {
    defaultValue: PropTypes.shape({
      value: PropTypes.any.isRequired,
    }),
    description: PropTypes.string.isRequired,
    hasDefaultColumn: PropTypes.bool.isRequired,
    hasEditorColumn: PropTypes.bool.isRequired,
    hasTypeColumn: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.shape({
      name: PropTypes.oneOf([
        'arrayOf',
        'bool',
        'enum',
        'func',
        'node',
        'number',
        'object',
        'shape',
        'string',
        'union',
      ]).isRequired,
    }).isRequired,
    value: PropTypes.any,
  };

  render() {
    const {
      name,
      defaultValue,
      description,
      hasDefaultColumn,
      hasEditorColumn,
      hasTypeColumn,
      required,
      type,
      value,
    } = this.props;

    const TypeEditor = typeEditorMap[type.name];
    const activeValue = value !== undefined && value !== null ? value :
      (defaultValue && defaultValue.value);

    return (
      <TableRow>
        <TableCell>
          <Text><Code>{ name }</Code> { required && <Text inline size="small" strong>[Required]</Text> }</Text>
          <Text color="shade-3" size="small">{ description }</Text>

          { (!hasTypeColumn || !hasEditorColumn) && (
            <Base margin="x2">
              { !hasTypeColumn && (
                <Text margin="x1" size="small">
                  <Text inline strong>Type:</Text> { typeNameMap[type.name] }
                </Text>
              ) }

              { !hasEditorColumn && TypeEditor && (
                <TypeEditor { ...this.props } value={ activeValue } />
              ) }
            </Base>
          ) }
        </TableCell>

        { hasTypeColumn && (
          <TableCell>
            <Labels>
              <Label>{ typeNameMap[type.name] }</Label>
            </Labels>
          </TableCell>
        ) }

        { hasDefaultColumn && (
          <TableCell>
            <Code>{ defaultValue && JSON.stringify(defaultValue.value) }</Code>
          </TableCell>
        ) }

        { hasEditorColumn && (
          <TableCell>
            { TypeEditor && <TypeEditor { ...this.props } value={ activeValue } /> }
          </TableCell>
        ) }
      </TableRow>
    );
  }
}
