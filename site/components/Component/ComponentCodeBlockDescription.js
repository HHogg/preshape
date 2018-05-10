import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, CodeBlock, Text } from 'preshape';

export default class ComponentCodeBlockDescription extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    language: PropTypes.string,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { children, language, title } = this.props;

    return (
      <Base padding="x6">
        <Text margin="x3" strong>
          <CodeBlock language={ language }>{ title }</CodeBlock>
        </Text>

        <Text color="shade-3">{ children }</Text>
      </Base>
    );
  }
}
