import * as React from 'react';
import classnames from 'classnames';
import Base, { Props as BaseProps, TypeBaseSize } from '../Base/Base';
import './Flex.css';

export interface Props extends BaseProps {
  /**
   * Short cut child alignment property for both alignChildrenHorizontal and
   * alignChildrenVertical.
   */
  alignChildren?: 'start' | 'middle' | 'end';
  /** Horizontal alignment of children flex items. */
  alignChildrenHorizontal?: 'start' | 'middle' | 'end' | 'around' | 'between';
  /** Vertical alignment of children flex items. */
  alignChildrenVertical?: 'start' | 'middle' | 'end' | 'around' | 'between';
  /** Flex item alignment property (changes with parent direction). */
  alignSelf?: 'start' | 'middle' | 'end';
  /** @Ignore */
  className?: string;
  /** Direction on which way to flex items. */
  direction?: 'horizontal' | 'vertical';
  /** Spacing applied between child flex items, values are global spacing variables. */
  gap?: TypeBaseSize;
  /** Flex item property if it should grow with available space. */
  grow?: boolean;
  /** Initial width to flex from for a child item. */
  initial?: 'content' | 'container' | 'none';
  /** Flex item property if it should shrink. */
  shrink?: boolean;
  /** Flag to allow flex items to wrap over to new lines */
  wrap?: boolean;

}

const Flex: React.FunctionComponent<Props> = (props: Props) => {
  const {
    alignChildren,
    alignChildrenHorizontal = alignChildren,
    alignChildrenVertical = alignChildren,
    alignSelf,
    className,
    direction,
    grow,
    gap,
    initial,
    shrink,
    wrap,
    ...rest
  } = props;

  const classes = classnames('Flex', {
    [`Flex--align-horz-${alignChildrenHorizontal}`]: alignChildrenHorizontal,
    [`Flex--align-self-${alignSelf}`]: alignSelf,
    [`Flex--align-vert-${alignChildrenVertical}`]: alignChildrenVertical,
    [`Flex--${direction}`]: direction,
    [`Flex--initial-${initial}`]: initial,
    [`Flex--gap-${gap}`]: gap,
    'Flex--grow': grow,
    'Flex--shrink': shrink,
    'Flex--wrap': wrap,
  }, className);

  return (
    <Base { ...rest } className={ classes } />
  );
};

export default Flex;
