import classnames from 'classnames';
import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import './Text.css';

export type TypeTextSize =
  | 'x1'
  | 'x2'
  | 'x3'
  | 'x4'
  | 'x5'
  | 'x6'
  | 'x7'
  | 'x8';

/**
 * A text component that can be used to display text.
 */
export interface TextProps extends Omit<BoxProps, 'size'> {
  /** Text alignment */
  align?: 'start' | 'middle' | 'end';
  /** How the block of text should break onto new lines. */
  breakOn?: 'all' | 'none' | 'word';
  /** Replaces the overflow of text with the ellipsis character */
  ellipsis?: boolean;
  /** Applies emphasis styling */
  emphasis?: boolean;
  /** Applies a heading font family style */
  heading?: boolean;
  /** Applies a monospace font family style */
  monospace?: boolean;
  /** Size of the text */
  size?: TypeTextSize;
  /** Applies strong weight styling */
  strong?: boolean;
  /** Applies subscript baseline styling */
  subscript?: boolean;
  /** Applies superscript baseline styling */
  superscript?: boolean;
  /** Applies title casing styling */
  titlecase?: boolean;
  /** Applies uppercasing styling */
  uppercase?: boolean;
  /** Applies weak weight styling */
  weak?: boolean;
}

export const Text = forwardRef<any, TextProps>((props, ref) => {
  const {
    align,
    breakOn,
    className,
    ellipsis,
    emphasis,
    heading,
    monospace,
    size,
    strong,
    subscript,
    superscript,
    titlecase,
    uppercase,
    weak,
    ...rest
  } = props;

  const classes = classnames(className, 'Text', {
    'Text--ellipsis': ellipsis,
    'Text--emphasis': emphasis,
    'Text--heading': heading,
    'Text--monospace': monospace,
    'Text--subscript': subscript,
    'Text--superscript': superscript,
    'Text--strong': strong,
    'Text--titlecase': titlecase,
    'Text--uppercase': uppercase,
    'Text--weak': weak,
    [`Text--align-${align}`]: align,
    [`Text--break-${breakOn}`]: breakOn,
    [`Text--size-${size}`]: size,
  });

  return <Box {...rest} className={classes} ref={ref} />;
});
