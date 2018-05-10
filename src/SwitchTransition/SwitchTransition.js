import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { matchPath, withRouter } from 'react-router';
import { Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import omit from 'lodash.omit';
import { routeTransitionTime } from '../variables';
import Base from '../Base/Base';
import './SwitchTransition.css';

const timeout = {
  enter: routeTransitionTime,
  exit: 0,
};

const getMatchedRoute = (children, pathname) =>
  React.Children.toArray(children).find(child => {
    return matchPath(pathname, {
      exact: child.props.exact,
      path: child.props.path,
    });
  }) || { key: 'no-match' };

class SwitchTransition extends Component {
  static propTypes = {
    Component: PropTypes.func,
    animation: PropTypes.oneOf(['Fade']),
    children: PropTypes.node.isRequired,
    location: PropTypes.shape({
      key: PropTypes.string,
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    animation: 'Fade',
  };

  constructor(props) {
    super(props);
    this.matches = 0;
    this.state = {
      key: props.location.key || '',
      match: getMatchedRoute(props.children, props.location.pathname),
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextMatch = getMatchedRoute(
      nextProps.children,
      nextProps.location.pathname,
    );

    if (this.state.match.key !== nextMatch.key) {
      this.setState({
        match: nextMatch,
        key: (nextProps.location.key || '') + ++this.matches,
      });
    }
  }

  render() {
    const {
      Component,
      animation,
      children,
      location,
      ...rest
    } = this.props;

    const props = omit(rest, [
      'history',
      'match',
      'staticContext',
    ]);

    return (
      <TransitionGroup component={ Component || Base } { ...props }>
        <CSSTransition
            classNames={ `SwitchTransition--${animation}-` }
            key={ this.state.key }
            timeout={ timeout }>
          <Switch location={ location }>
            { children }
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(SwitchTransition);
