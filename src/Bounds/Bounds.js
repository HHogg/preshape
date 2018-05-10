import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import ResizeObserver from 'resize-observer-polyfill';
import debounce from 'lodash.debounce';
import omit from 'lodash.omit';
import Base from '../Base/Base';

export default class Bounds extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    debounce: PropTypes.number,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    debounce: 250,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.addEventListener(this.props.debounce);
    this.handleChange();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.debounce !== nextProps.debounce) {
      this.removeEventListener();
      this.addEventListener(nextProps.debounce);
    }
  }

  componentWillUnmount() {
    this.removeEventListener();
  }

  addEventListener(debounceValue) {
    this.observer = new ResizeObserver(debounce((...args) =>
      this.handleChange(...args), debounceValue));
    this.observer.observe(this.bounds);
  }

  removeEventListener() {
    this.observer.unobserve(this.bounds);
    this.observer.disconnect();
    delete this.observer;
  }

  handleChange(entries) {
    const { onChange } = this.props;

    if (entries && this.observer) {
      const { width, height } = entries[0].contentRect;

      if (this.state.width !== width || this.state.height !== height) {
        this.setState({ width, height });

        if (onChange) {
          onChange({ width, height });
        }
      }
    }
  }

  render() {
    const { children, ...rest } = this.props;
    const { height, width } = this.state;

    return (
      <Base { ...omit(rest, ['debounce', 'onChange']) }
          ref={ (el) => this.bounds = findDOMNode(el) }>
        { children({ height, width }) }
      </Base>
    );
  }
}
