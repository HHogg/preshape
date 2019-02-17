import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Code, Link, List, ListItem } from 'preshape';

export default class ComponentPropsEditorOneOf extends Component {
  static propTypes = {
    onEdit: PropTypes.func.isRequired,
    value: PropTypes.any,
    values: PropTypes.array.isRequired,
  };

  render() {
    const { onEdit, value, values } = this.props;

    return (
      <List>
        { values.map((v) => (
          <ListItem key={ v }>
            <Link
                active={ value === v }
                onClick={ () => onEdit(v) }
                size="x1">
              <Code>
                { typeof v === 'string' ? v : JSON.stringify(v) }
              </Code>
            </Link>
          </ListItem>
        )) }
      </List>
    );
  }
}
