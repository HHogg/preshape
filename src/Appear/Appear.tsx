import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';
import { transitionTimeFast, transitionTimeBase, transitionTimeSlow } from '../variables';
import Base, { Props as BaseProps } from '../Base/Base';
import './Appear.css';

const isClient = typeof window !== 'undefined';

const times = {
  fast: transitionTimeFast,
  base: transitionTimeBase,
  slow: transitionTimeSlow,
};

export interface Props extends BaseProps {
  /** Type of animation that is applied when appearing and disappearing. */
  animation?:
    'Fade' |
    'FadeSlideUp' |
    'FadeSlideRight' |
    'FadeSlideDown' |
    'FadeSlideLeft' |
    'Pop' |
    'ScaleYDown' |
    'ScaleYUp';
  /**
   * Time (in milliseconds) that the appearance/disappearance animation is delayed for.
   */
  delay?: number;
  /** Called back for after appearance */
  onEntered?: () => void;
  /** Called back for after disappearance */
  onExited: () => void;
  /** One of the global timing speeds, for how long the animations takes to complete */
  time: 'slow' | 'base' | 'fast';
  /** Trigger for appearance/disappearance animation. */
  visible?: boolean;
}

const Appear: React.FunctionComponent<Props> = (props: Props) => {
  const {
    animation = 'FadeSlideUp',
    className,
    delay = 0,
    onEntered,
    onExited,
    time = 'fast',
    visible = true,
    ...rest
  } = props;

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
    ...props.style,
    animationDelay: `${delay}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <CSSTransition
        appear={ isClient && visible }
        classNames={ transition }
        in={ isClient && visible }
        onEntered={ onEntered }
        onExited={ onExited }
        timeout={ times[time] }>
      <Base { ...rest } className={ classes } style={ style } />
    </CSSTransition>
  );
};

export default Appear;
