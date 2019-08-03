
import * as React from 'react';
import classnames from 'classnames';
import Base, { Props as BaseProps } from '../Base/Base';
import './Text.css';

export type TypeTextSize = 'x1' | 'x2' | 'x3' | 'x4' | 'x5';

export interface Props extends BaseProps {
  /**
   * Component to be used as the final element, can be a custom React
   * Component or an element string. If none is provided then a suitable
   * semantic element will be determined from the props.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component?: string | React.ComponentType<any>;
  /** Text alignment */
  align?: 'start' | 'middle' | 'end';
  /** How the block of text should break onto new lines. */
  breakOn?: 'all' | 'none' | 'word';
  /** @Ignore */
  className?: string;
  /** Replaces the overflow of text with the ellipsis character */
  ellipsis?: boolean;
  /** Applies emphasis styling */
  emphasis?: boolean;
  /** Applies a heading font family style */
  heading?: boolean;
  /** Text default to block display, this will apply inline display. */
  inline?: boolean;
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

const ComponentMap: {
  [K in TypeTextSize]: string;
} = {
  x1: 'p',
  x2: 'p',
  x3: 'h3',
  x4: 'h2',
  x5: 'h1',
};

const InlineComponentMap = (props: Props) =>
  (props.strong && 'strong') ||
  (props.emphasis && 'em') ||
  (props.subscript && 'sub') ||
  (props.superscript && 'sup') ||
  'span';

const Text: React.FunctionComponent<Props> = (props: Props) => {
  const {
    Component,
    align,
    breakOn,
    className,
    ellipsis,
    emphasis,
    heading,
    inline,
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

  const FinalComponent = Component || (inline
    ? InlineComponentMap(props)
    : (size && ComponentMap[size]));

  return (
    <Base { ...rest }
        Component={ FinalComponent }
        className={ classes } />
  );
};

export default Text;
