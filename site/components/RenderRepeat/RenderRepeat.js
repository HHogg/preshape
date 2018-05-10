import PropTypes from 'prop-types';
import { Component } from 'react';

export default class RenderRepeat extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
  };

  render() {
    const { children, count } = this.props;

    return Array.from({ length: count })
      .map((_, index) => children(index));
  }
}
