import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Base, Link, Text } from 'preshape';

export default class LinkBox extends Component {
  static propTypes = {
    margin: PropTypes.string,
    theme: PropTypes.string,
  };

  render() {
    const { margin, theme, ...rest } = this.props;

    return (
      <Base borderColor borderSize="x2" margin={ margin }>
        <Text color theme={ theme }>
          <Link { ...rest }
              align="middle"
              backgroundColor
              display="block" />
        </Text>
      </Base>
    );
  }
}
