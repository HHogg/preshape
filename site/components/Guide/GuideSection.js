import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Markdown, Text } from 'preshape';

export default class GuideSection extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
  };

  render() {
    const { children, title, ...rest } = this.props;

    return (
      <Base { ...rest } id={ title } paddingVertical="x8">
        { title && (
          <Text size="heading"><Markdown>{ title }</Markdown></Text>
        ) }

        { children }
      </Base>
    );
  }
}
