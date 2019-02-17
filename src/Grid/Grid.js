import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import classnames from 'classnames';
import Flex from '../Flex/Flex';
import './Grid.css';

export default class Grid extends PureComponent {
  static propTypes = {
    alignChildren: PropTypes.oneOf(['start', 'middle', 'end']),
    autoFitWidthMax: PropTypes.string,
    autoFitWidthMin: PropTypes.string,
    className: PropTypes.string,
    columnCount: PropTypes.string,
    columnWidth: PropTypes.string,
    gap: PropTypes.oneOf(['x1', 'x2', 'x3', 'x4', 'x6', 'x8', 'x10', 'x12']),
  };

  render() {
    const {
      alignChildren,
      autoFitWidthMax,
      autoFitWidthMin,
      className,
      columnCount,
      columnWidth,
      gap,
      ...rest
    } = this.props;

    const classes = classnames('Grid', {
      [`Grid--align-${alignChildren}`]: alignChildren,
      [`Grid--gap-${gap}`]: gap,
    }, className);

    const style = {
      gridTemplateColumns:
        (columnCount && `repeat(${columnCount}, ${columnWidth || 'max-content'})`) ||
        ((autoFitWidthMin && `repeat(auto-fit, minmax(${autoFitWidthMin}, ${autoFitWidthMax || '1fr'})`) || null),
    };

    return (
      <Flex { ...rest } className={ classes } style={ style } />
    );
  }

}
