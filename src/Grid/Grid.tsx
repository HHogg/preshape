import * as React from 'react';
import classnames from 'classnames';
import { TypeBaseSize } from '../Base/Base';
import Flex, { Props as FlexProps } from '../Flex/Flex';
import './Grid.css';

export interface Props extends FlexProps {
  alignChildren?: 'start' | 'middle' | 'end';
  autoFitWidthMax?: string;
  autoFitWidthMin?: string;
  className?: string;
  columnCount?: string;
  columnWidth?: string;
  gap?: TypeBaseSize;
}

const Grid: React.FunctionComponent<Props> = (props: Props) => {
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
    <Flex { ...rest } className={ classes } style={ style } />
  );
};

export default Grid;
