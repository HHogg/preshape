import * as React from 'react';
import classnames from 'classnames';
import { Attributes, TypeSize } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';
import './Grid.css';

export interface GridProps extends FlexProps {
  alignChildren?: 'start' | 'middle' | 'end';
  autoFitWidthMax?: string;
  autoFitWidthMin?: string;
  className?: string;
  columnCount?: string;
  columnWidth?: string;
  gap?: TypeSize;
}

const Grid = React.forwardRef<HTMLElement, Attributes<HTMLElement, GridProps>>((props, ref) => {
  const {
    alignChildren,
    autoFitWidthMax,
    autoFitWidthMin,
    className,
    columnCount,
    columnWidth,
    gap,
    ...rest
  } = props;

  const classes = classnames('Grid', {
    [`Grid--align-${alignChildren}`]: alignChildren,
    [`Grid--gap-${gap}`]: gap,
  }, className);

  const style = {
    gridTemplateColumns:
      (columnCount && `repeat(${columnCount}, ${columnWidth || 'max-content'})`) ||
      ((autoFitWidthMin && `repeat(auto-fit, minmax(${autoFitWidthMin}, ${autoFitWidthMax || '1fr'})`) || undefined),
  };

  return (
    <Flex { ...rest } className={ classes } ref={ ref } style={ style } />
  );
});

export default Grid;
