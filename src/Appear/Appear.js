import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';
import { transitionTimeFast, transitionTimeBase, transitionTimeSlow } from '../variables';
import Base from '../Base/Base';
import './Appear.css';

const isClient = typeof window !== 'undefined';

const times = {
  fast: transitionTimeFast,
  base: transitionTimeBase,
  slow: transitionTimeSlow,
};

export default class Appear extends Component {
  static propTypes = {
    /** Type of animation that is applied when appearing and disappearing. */
    animation: PropTypes.oneOf([
      'Fade',
      'FadeSlideUp',
      'FadeSlideRight',
      'FadeSlideDown',
      'FadeSlideLeft',
      'Pop',
      'ScaleYDown',
      'ScaleYUp',
    ]),
    /** SKIP */
    className: PropTypes.string,
    /**
     * Time (in milliseconds) that the appearance/disappearance animation is delayed for.
     */
    delay: PropTypes.number,
    /** SKIP */
    style: PropTypes.object,
    /** One of the global timing speeds, for how long the animations takes to complete */
    time: PropTypes.oneOf(['slow', 'base', 'fast']),
    /** Trigger for appearance/disappearance animation. */
    visible: PropTypes.bool,
  };

  static defaultProps = {
    animation: 'FadeSlideUp',
    delay: 0,
    time: 'fast',
    visible: true,
  };

  render() {
    const { animation, className, delay, time, visible, ...rest } = this.props;

    const classes = classnames(className, 'Appear', `Appear--${animation}`, `Appear--${time}`, {
      [`Appear--${animation}-appear`]: !isClient && visible,
    });

    const transition = {
      appear: `Appear--${animation}-appear`,
      appearActive: `Appear--${animation}-appear-active`,
      enter: `Appear--${animation}-enter`,
      enterActive: `Appear--${animation}-enter-active`,
      enterDone: `Appear--${animation}-enter-done`,
      exit: `Appear--${animation}-exit`,
      exitActive: `Appear--${animation}-exit-active`,
      exitDone: `Appear--${animation}-exit-done`,
    };

    const style = {
      ...this.props.style,
      animationDelay: `${delay}ms`,
      transitionDelay: `${delay}ms`,
    };

    return (
      <CSSTransition
          appear={ isClient && visible }
          classNames={ transition }
          in={ isClient && visible }
          timeout={ times[time] }>
        <Base { ...rest } className={ classes } style={ style } />
      </CSSTransition>
    );
  }
}
