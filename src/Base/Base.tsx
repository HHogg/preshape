import * as React from 'react';
import classnames from 'classnames';
import './Base.css';

export type TypeBaseSize =
  'x0' |
  'x1' |
  'x2' |
  'x3' |
  'x4' |
  'x6' |
  'x8' |
  'x10' |
  'x12' |
  'x16';

export type TypeColor =
  'accent-shade-1' |
  'accent-shade-2' |
  'accent-shade-3' |
  'background-shade-1' |
  'background-shade-2' |
  'background-shade-3' |
  'dark-shade-1' |
  'dark-shade-2' |
  'dark-shade-3' |
  'light-shade-1' |
  'light-shade-2' |
  'light-shade-3' |
  'negative-shade-1' |
  'negative-shade-2' |
  'negative-shade-3' |
  'positive-shade-1' |
  'positive-shade-2' |
  'positive-shade-3' |
  'text-shade-1' |
  'text-shade-2' |
  'text-shade-3';

export type TypeTheme =
  'day' |
  'night';

export interface Props {
  /**
   * Component to be used as the final element, can be a custom React
   * Component or an element string.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component?: string | React.ComponentType<any>;
  /** Quick way of absolutely position to common places */
  absolute?:
    'fullscreen' |
    'top' |
    'top-left' |
    'top-right' |
    'bottom' |
    'bottom-left' |
    'bottom-right';
  /**
   * Background colour to be applied, shades are taken from the current
   * theme. A value of true will reapply the current theme background.
   */
  backgroundColor?: true | TypeColor;
  /**
   * Border colour to be applied, shades are taken from the current
   * theme. A value of true will reapply the current theme value.
   */
  borderColor?: true | TypeColor;
  /** Thickness of the border to be applied */
  borderSize?: 'x1' | 'x2';
  /** @Ignore */
  className?: string;
  /** Adds styling to indicate that the element is clickable */
  clickable?: boolean;
  /** Applies relative positioning to contain child elements. */
  container?: boolean;
  /** Applies display styling */
  display?: 'block' | 'inline-block';
  /** Fixed height applied through inline styling */
  height?: number | string;
  /** Forwarded React ref function */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  innerRef?: React.Ref<any>;
  /** Margins applied for the global spacing variables */
  margin?: TypeBaseSize;
  /** Max width applied through inline styling */
  maxWidth?: number | string;
  /** Max height applied through inline styling */
  minHeight?: number | string;
  /** Min width applied through inline style */
  minWidth?: number | string;
  /** Padding applied for the global spacing variables */
  padding?: TypeBaseSize;
  /** Horizontal padding applied for the global spacing variables */
  paddingHorizontal?: TypeBaseSize;
  /** Vertical pa?dding applied for the global spacing variables */
  paddingVertical?: TypeBaseSize;
  /** @ignore */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: React.Ref<any>;
  /** Applies overflow styling to enable/disable scrolling.  */
  scrollable?: boolean;
  /** @Ignore */
  style?: React.CSSProperties;
  /**
   * Text colour to be applied. A value of true will reapply the current
   * themes text colour.
   */
  textColor?: true | TypeColor;
  /**
   * Theme applied to this element and inherited for child elements (until
   * a descendant theme is applied).
   */
  theme?: TypeTheme;
  /** Fixed width applied through inline styling */
  width?: number | string;
  /** z-index number for layering elements.  */
  zIndex?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const Base: React.FunctionComponent<Props> = (props: Props) => {
  const {
    Component,
    absolute,
    backgroundColor,
    borderColor,
    borderSize,
    className,
    clickable,
    container,
    display,
    maxWidth,
    minWidth,
    minHeight,
    padding,
    paddingHorizontal = padding,
    paddingVertical = padding,
    margin,
    scrollable,
    style,
    textColor,
    theme,
    zIndex,
    ...rest
  } = props;

  const FinalComponent = Component || 'div';
  const classes = classnames('Base', {
    'Base--clickable': clickable,
    'Base--container': container,
    'Base--max-width': maxWidth,
    'Base--scrollable': scrollable,
    [`Base--absolute-${absolute}`]: absolute,
    [`Base--background-color-${backgroundColor}`]: backgroundColor,
    [`Base--border-color-${borderColor}`]: borderColor,
    [`Base--border-size-${borderSize}`]: borderSize,
    [`Base--display-${display}`]: display,
    [`Base--margin-${margin}`]: margin,
    [`Base--padding-horizontal-${paddingHorizontal}`]: paddingHorizontal,
    [`Base--padding-vertical-${paddingVertical}`]: paddingVertical,
    [`Base--text-color-${textColor}`]: textColor,
    [`Theme--${theme}`]: theme,
  }, className);

  // Work around for findDOMNode area causing constant renders. Forwards
  // refs for component compositions.
  if (typeof FinalComponent === 'string') {
    rest.ref = props.innerRef;
    delete rest.innerRef;
  }

  let height;
  let width;

  if (typeof Component === 'string' && Component !== 'canvas') {
    if (rest.height !== undefined) {
      height = rest.height;
      delete rest.height;
    }

    if (rest.width !== undefined) {
      width = rest.width;
      delete rest.width;
    }
  }

  return (
    <FinalComponent { ...rest }
        className={ classes }
        style={ { height, minHeight, maxWidth, minWidth, width, zIndex, ...style } } />
  );
};

export default Base;
