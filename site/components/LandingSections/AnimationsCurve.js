import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { transitionTimingFunction, Base, Code, Flex, Text } from 'preshape';

const bezierCurveToPath = ([x1, y1, x2, y2]) =>
  `M 0 100 C ${x1 * 100} ${y1 * 100}, ${(1 - x2) * 100} ${(1 - y2) * 100}, 100 0`;

export default class AnimationsCurve extends Component {
  static propTypes = {
    time: PropTypes.number.isRequired,
  }

  render() {
    return (
      <Flex
          borderColor
          borderSize="x2"
          direction="vertical"
          grow
          gutter="x4"
          padding="x4">
        <Flex>
          <Base borderColor borderSize="x2">
            <div className="CubicBezier__svg-container">
              <svg
                  className="CubicBezier__svg"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100">
                <defs>
                  <pattern
                      height="10"
                      id="grid-horizontal"
                      patternUnits="userSpaceOnUse"
                      width="10">
                    <path
                        className="CubicBezier__grid-path"
                        d="M 0 10 L 10 10" />
                  </pattern>

                  <pattern
                      height="10"
                      id="grid-vertical"
                      patternUnits="userSpaceOnUse"
                      width="10">
                    <path
                        className="CubicBezier__grid-path"
                        d="M 10 0 L 10 10" />
                  </pattern>
                </defs>

                <rect fill="url(#grid-horizontal)" height="90" width="100" />
                <rect fill="url(#grid-vertical)" height="100" width="90" />

                <path
                    className="CubicBezier__path"
                    d={ bezierCurveToPath(transitionTimingFunction) } />

                <path
                    className="CubicBezier__path--accent"
                    d={ bezierCurveToPath(transitionTimingFunction) }
                    style={ { animationDuration: `${this.props.time * 2}ms` } } />
              </svg>
            </div>
          </Base>
        </Flex>

        <Flex alignChildren="middle" direction="vertical" grow>
          <Text align="middle" margin="x1" size="small" strong>
            cubic-bezier({ transitionTimingFunction.join(', ') })
          </Text>

          <Text align="middle" size="small">
            <Code inline>var(--transition-timing-function)</Code>
          </Text>
        </Flex>
      </Flex>
    );
  }
}
