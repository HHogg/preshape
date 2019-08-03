import * as React from 'react';
import { matchPath, withRouter, RouteComponentProps } from 'react-router';
import { Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import omit from 'lodash.omit';
import { routeTransitionTime } from '../variables';
import Base, { Props as BaseProps } from '../Base/Base';
import './SwitchTransition.css';

const { useEffect, useState } = React;

interface Props extends BaseProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component?: string | React.ComponentType<any>;
  animation?: 'Fade';
  children: React.ReactNode;
}

const timeout = {
  enter: routeTransitionTime,
  exit: 0,
};

const getMatchedRoute = (children: React.ReactNode, pathname: string) =>
  React.Children.toArray(children).find((child) =>
    React.isValidElement(child) && child.props && matchPath(pathname, {
      exact: child.props.exact,
      path: child.props.path,
    })
  ) || { key: 'no-match' };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
const SwitchTransition: React.FunctionComponent<Props & RouteComponentProps & TransitionGroup> = (props: Props & RouteComponentProps<any> & TransitionGroup) => {
  const {
    Component,
    animation,
    children,
    location,
    ...rest
  } = props;

  const [[key, match, matches], setKeyMatches] = useState([
    location.key || '',
    getMatchedRoute(props.children, props.location.pathname),
    0,
  ]);

  const restProps = omit(rest, [
    'history',
    'match',
    'staticContext',
  ]);

  useEffect(() => {
    const nextMatch = getMatchedRoute(children, location.pathname);

    if (match.key !== nextMatch.key) {
      setKeyMatches([
        `${location.key || ''}${matches + 1}`,
        nextMatch,
        matches + 1,
      ]);
    }
  }, [location]);

  return (
    <TransitionGroup component={ Component || Base } { ...restProps }>
      <CSSTransition
          classNames={ `SwitchTransition--${animation}-` }
          key={ key }
          timeout={ timeout }>
        <Switch location={ location }>
          { children }
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

SwitchTransition.defaultProps = {
  animation: 'Fade',
};

export default withRouter(SwitchTransition);
