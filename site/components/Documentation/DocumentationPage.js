import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Base, Markdown, Text } from 'preshape';

export default class DocumentationPage extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    description: PropTypes.string,
    name: PropTypes.string.isRequired,
  };

  render() {
    const { children, description, name } = this.props;

    return (
      <Fragment>
        <Base margin="x6">
          <Text margin="x2" size="title">{ name }</Text>
          { description && (
            <Text color="shade-3" margin="x1">
              <Markdown>{ description }</Markdown>
            </Text>
          ) }
        </Base>

        { children }
      </Fragment>
    );
  }
}
