import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  transitionTimeSlow,
  transitionTimeBase,
  transitionTimeFast,
  Code,
  Text,
} from 'preshape';
import LinkBox from '../LinkBox/LinkBox';

const times = [{
  name: 'Slow',
  variable: '--transition-time--slow',
  time: transitionTimeSlow,
}, {
  name: 'Base',
  variable: '--transition-time--base',
  time: transitionTimeBase,
}, {
  name: 'Fast',
  variable: '--transition-time--fast',
  time: transitionTimeFast,
}];

export default class AnimationsControls extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    time: PropTypes.number.isRequired,
  };

  render() {
    return times.map(({ name, variable, time }) => (
      <LinkBox
          active={ time == this.props.time }
          key={ time }
          margin="x2"
          onClick={ () => this.props.onChange(time) }
          padding="x2">
        <Text>{ name } ({ time }ms)</Text>
        <Code size="x1" weak>var({ variable })</Code>
      </LinkBox>
    ));
  }
}
