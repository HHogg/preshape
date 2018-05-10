import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Flex } from 'preshape';
import ThemeIcon from '../ThemeIcon/ThemeIcon';

const animations = ['Color', 'Spin', 'Fade'];

export default class AnimationsIcons extends Component {
  static propTypes = {
    time: PropTypes.number.isRequired,
  };

  render() {
    return animations.map((animation) => (
      <Flex
          alignChildren="middle"
          borderColor
          borderSize="x2"
          direction="horizontal"
          grow
          key={ animation }
          padding="x4">
        <div
            className={ `AnimationExample__${animation}` }
            style={ { animationDuration: `${this.props.time}ms` } }>
          <ThemeIcon size="2rem" />
        </div>
      </Flex>
    ));
  }
}
