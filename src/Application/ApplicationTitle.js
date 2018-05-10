import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Appear from '../Appear/Appear';
import Base from '../Base/Base';
import Flex from '../Flex/Flex';

export default class ApplicationTitle extends Component {
  static propTypes = {
    children: PropTypes.node,
    maxWidth: PropTypes.string,
    visible: PropTypes.bool,
  };

  static defaultProps = {
    visible: true,
  };

  render() {
    const { children, maxWidth, ...rest } = this.props;

    return (
      <Appear { ...rest } Component={ Flex } animation="FadeSlideDown">
        <Base maxWidth={ maxWidth }>
          { children }
        </Base>
      </Appear>
    );
  }
}
