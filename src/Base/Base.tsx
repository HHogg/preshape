import * as React from 'react';
import classnames from 'classnames';
import './Base.css';

export type TypeBaseSize = 'x0' | 'x1' | 'x2' | 'x3' | 'x4' | 'x6' | 'x8' | 'x10' | 'x12' | 'x16';

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
  backgroundColor?:
    true |
    'accent-shade-1' |
    'accent-shade-2' |
    'accent-shade-3' |
    'shade-1' |
    'shade-2' |
    'shade-3' |
    'text-shade-1' |
    'text-shade-2' |
    'text-shade-3';
  /**
   * Border colour to be applied, shades are taken from the current
   * theme. A value of true will reapply the current colour value.
   */
  borderColor?:
    true |
    'shade-1' |
    'shade-2' |
    'shade-3';
  /** Thickness of the border to be applied */
  borderSize?: 'x1' | 'x2';
  /** @Ignore */
  className?: string;
  /** Adds styling to indicate that the element is clickable */
  clickable?: boolean;
  /**
   * Text colour to be applied. A value of true will reapply the current
   * themes text colour.
   */
  color?:
    true |
    'accent-shade-1' |
    'accent-shade-2' |
    'accent-shade-3' |
    'background-shade-1' |
    'background-shade-2' |
    'background-shade-3' |
    'negative' |
    'positive' |
    'shade-1' |
    'shade-2' |
    'shade-3';
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
   * Theme applied to this element and inherited for child elements (until
   * a descendant theme is applied).
   */
  theme?: 'day' | 'night';
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
    color,
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
    [`Base--text-color-${color}`]: color,
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

  if (typeof Component === 'string' && Component === 'canvas') {
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

Base.defaultProps = {
  Component: 'div',
};

export default Base;
