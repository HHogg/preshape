import * as React from 'react';
import classnames from 'classnames';
import Box, { Attributes, BoxProps, TypeSize } from '../Box/Box';
import './Grid.css';

export interface GridProps extends BoxProps {
  /** Controls the horizontal alignment of the items */
  alignChildren?: 'start' | 'middle' | 'end';
  /** Sets the distances between items to a multiple value. E.g. 'x1'. */
  gap?: TypeSize;
  /** Sets the horizontal distance between items to a multiple value. E.g. 'x1'. */
  gapHorizontal?: TypeSize;
  /** Sets the horizontal distance between items to a multiple value. E.g. 'x1'. */
  gapVertical?: TypeSize;
  /** Sets the primary repeat value */
  repeat?: number | string | 'auto-fill' | 'auto-fit';
  /** Sets the explicit width the repeated items will be resized */
  repeatWidth?: string | 'max-content' | 'min-content';
  /** Sets the maximum width the repeated items can be resized to */
  repeatWidthMax?: string;
  /** Sets the minimum width the repeated items can be resized to */
  repeatWidthMin?: string;
  /** Sets the implicit row size */
  rowSize?: string | 'max-content' | 'min-content';
}

const Grid: React.RefForwardingComponent<
  HTMLElement,
  Attributes<HTMLElement, GridProps>
> = (props, ref) => {
  const {
    alignChildren,
    className,
    gap,
    gapHorizontal = gap,
    gapVertical = gap,
    repeat = 'auto-fit',
    repeatWidth = 'max-content',
    repeatWidthMax = '1fr',
    repeatWidthMin,
    rowSize = 'max-content',
    ...rest
  } = props;

  const classes = classnames(
    'Grid',
    {
      [`Grid--align-${alignChildren}`]: alignChildren,
      [`Grid--gap-horizontal-${gapHorizontal}`]: gapHorizontal,
      [`Grid--gap-vertical-${gapVertical}`]: gapVertical,
    },
    className
  );

  const style = {
    gridTemplateColumns: `repeat(${repeat}, ${
      repeatWidthMin
        ? `minmax(${repeatWidthMin}, ${repeatWidthMax})`
        : repeatWidth
    })`,
    gridAutoRows: rowSize,
    ...rest.style,
  };

  return <Box {...rest} className={classes} ref={ref} style={style} />;
};

export default React.forwardRef(Grid);
