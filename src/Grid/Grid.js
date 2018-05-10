import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import Base from '../Base/Base';
import './Grid.css';

export default class Grid extends Component {
  static propTypes = {
    /**  */
    alignChildren: PropTypes.oneOf(['start', 'middle', 'end']),
    /**
     * Automatically try to fit as many columns on a row as possible. This
     * must be used with `columnWidth` and cannot be used with `columnCount`.
     */
    columnAutoFit: PropTypes.bool,
    /** An explicit number of columns to place on each row. This can be used
     * with `columnWidth`, otherwise the minimum content size is used. This cannot
     * be used with columnAutoFit.
     */
    columnCount: PropTypes.number,
    /** An explicit width of the columns. */
    columnWidth: PropTypes.string,
    /** Spacing applied between child grid items, values are global spacing variables. */
    gutter: PropTypes.oneOf(['x1', 'x2', 'x3', 'x4', 'x6', 'x8', 'x10', 'x12', 'x16']),
  };

  static defaultProps = {
    alignChildren: 'middle',
  };

  render() {
    const {
      alignChildren,
      columnAutoFit,
      columnCount,
      columnWidth,
      gutter,
      ...rest
    } = this.props;

    const style = {
      gridTemplateColumns:
        (Number.isInteger(columnCount) && `repeat(${columnCount}, ${columnWidth || 'min-content'})`) ||
        (columnAutoFit && columnWidth && `repeat(auto-fit, ${columnWidth}`) || null,
    };

    const classes = classnames('Grid', {
      [`Grid--gutter-${gutter}`]: gutter,
      [`Grid--align-${alignChildren}`]: alignChildren,
    });

    return (
      <Base { ...rest } className={ classes } style={ style } />
    );
  }
}
