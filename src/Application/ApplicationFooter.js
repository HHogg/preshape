import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Appear from '../Appear/Appear';
import Base from '../Base/Base';
import Flex from '../Flex/Flex';

export default class ApplicationFooter extends Component {
  static propTypes = {
    children: PropTypes.node,
    maxWidth: PropTypes.string,
    visible: PropTypes.bool,
  };

  static defaultProps = {
    visible: true,
  };

  render() {
    const { children, maxWidth, visible, ...rest } = this.props;

    return (
      <Appear padding="x4" { ...rest }
          Component={ Flex }
          visible={ visible }>
        <Base maxWidth={ maxWidth }>
          { children }
        </Base>
      </Appear>
    );
  }
}
