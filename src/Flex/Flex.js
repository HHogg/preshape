import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './Flex.css';

export default class Flex extends Component {
  static propTypes = {
    /**
     * Short cut child alignment property for both alignChildrenHorizontal and
     * alignChildrenVertical.
     */
    alignChildren: PropTypes.oneOf(['start', 'middle', 'end']),
    /** Horizontal alignment of children flex items. */
    alignChildrenHorizontal: PropTypes.oneOf(['start', 'middle', 'end', 'around', 'between']),
    /** Vertical alignment of children flex items. */
    alignChildrenVertical: PropTypes.oneOf(['start', 'middle', 'end', 'around', 'between']),
    /** Flex item alignment property (changes with parent direction). */
    alignSelf: PropTypes.oneOf(['start', 'middle', 'end']),
    /** SKIP */
    className: PropTypes.string,
    /** Direction on which way to flex items. */
    direction: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Flex item property if it should grow with available space. */
    grow: PropTypes.bool,
    /** Spacing applied between child flex items, values are global spacing variables. */
    gutter: PropTypes.oneOf(['x1', 'x2', 'x3', 'x4', 'x6', 'x8', 'x10', 'x12', 'x16']),
    /** Initial width to flex from for a child item. */
    initial: PropTypes.oneOf(['content', 'container', 'none']),
    /** Flex item property if it should shrink. */
    shrink: PropTypes.bool,
    /** Flag to allow flex items to wrap over to new lines */
    wrap: PropTypes.bool,
  };

  render() {
    const {
      alignChildren,
      alignChildrenHorizontal = alignChildren,
      alignChildrenVertical = alignChildren,
      alignSelf,
      className,
      direction,
      grow,
      gutter,
      initial,
      shrink,
      wrap,
      ...rest
    } = this.props;

    const classes = classnames('Flex', {
      [`Flex--align-horz-${alignChildrenHorizontal}`]: alignChildrenHorizontal,
      [`Flex--align-self-${alignSelf}`]: alignSelf,
      [`Flex--align-vert-${alignChildrenVertical}`]: alignChildrenVertical,
      [`Flex--${direction}`]: direction,
      [`Flex--initial-${initial}`]: initial,
      [`Flex--gutter-${gutter}`]: gutter,
      'Flex--grow': grow,
      'Flex--shrink': shrink,
      'Flex--wrap': wrap,
    }, className);

    return (
      <Base { ...rest } className={ classes } />
    );
  }
}
