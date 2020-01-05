/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import classnames from 'classnames';
import './Base.css';

export type Attributes<E = Element, P = {}> = P & Omit<
E extends SVGElementTagNameMap[keyof SVGElementTagNameMap]
  ? React.SVGAttributes<E>
  : E extends HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
    ? React.AllHTMLAttributes<E>
    : HTMLAttributes & SVGAttributes, keyof P>;

export type HTMLAttributes = React.AllHTMLAttributes<any>;
export type SVGAttributes = React.SVGAttributes<any>;

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

export type TypeSize =
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

export type TypeHTMLTags = keyof HTMLElementTagNameMap;
export type TypeSVGTags = keyof Omit<SVGElementTagNameMap, TypeHTMLTags>;
export type TypeAllElementTags = TypeHTMLTags | TypeSVGTags;

export type TypeTheme =
  'day' |
  'night';

export interface BaseProps {
  /** Quick way of absolutely position to common places */
  absolute?:
    'center' |
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
  backgroundColor?: TypeColor;
  /**
   * Border colour to be applied, shades are taken from the current
   * theme. A value of true will reapply the current theme value.
   */
  borderColor?: TypeColor;
  /** Thickness of the border to be applied */
  borderSize?: 'x1' | 'x2';
  /** Adds styling to indicate that the element is clickable */
  clickable?: boolean;
  /** Applies relative positioning to contain child elements. */
  container?: boolean;
  /** Applies display styling */
  display?: 'block' | 'inline-block';
  /** Quick way of absolutely position to common places */
  fixed?:
    'center' |
    'fullscreen' |
    'top' |
    'top-left' |
    'top-right' |
    'bottom' |
    'bottom-left' |
    'bottom-right';
  /** Fixed height applied through inline styling */
  height?: React.CSSProperties;
  /** Margins applied for the global spacing variables */
  margin?: TypeSize;
  /** Max width applied through inline styling */
  maxWidth?: number | string;
  /** Max height applied through inline styling */
  minHeight?: number | string;
  /** Min width applied through inline style */
  minWidth?: number | string;
  /** Padding applied for the global spacing variables */
  padding?: TypeSize;
  /** Horizontal padding applied for the global spacing variables */
  paddingHorizontal?: TypeSize;
  /** Vertical pa?dding applied for the global spacing variables */
  paddingVertical?: TypeSize;
  /** Applies overflow styling to enable/disable scrolling.  */
  scrollable?: boolean;
  /**
   * Any valid HTML or SVG element tag.
   *
   * @reference false
   */
  tag?: TypeAllElementTags;
  /**
   * Text colour to be applied. A value of true will reapply the current
   * themes text colour.
   */
  textColor?: TypeColor;
  /**
   * Theme applied to this element and inherited for child elements (until
   * a descendant theme is applied).
   */
  theme?: TypeTheme;
  /** Fixed width applied through inline styling */
  width?: number | string;
  /** z-index number for layering elements.  */
  zIndex?: number;
}

const Base = React.forwardRef<Element, Attributes<Element, BaseProps>>((props, ref) => {
  const {
    absolute,
    backgroundColor,
    borderColor,
    borderSize,
    children,
    className,
    clickable,
    container,
    display,
    fixed,
    height,
    maxWidth,
    minWidth,
    minHeight,
    padding,
    paddingHorizontal = padding,
    paddingVertical = padding,
    margin,
    scrollable,
    style,
    tag,
    textColor,
    theme,
    width,
    zIndex,
    ...rest
  } = props;

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
    [`Base--fixed-${fixed}`]: fixed,
    [`Base--margin-${margin}`]: margin,
    [`Base--padding-horizontal-${paddingHorizontal}`]: paddingHorizontal,
    [`Base--padding-vertical-${paddingVertical}`]: paddingVertical,
    [`Base--text-color-${textColor}`]: textColor,
    [`Theme--${theme}`]: theme,
  }, className);

  return React.createElement(tag || 'div', {
    ...rest,
    className: classes,
    ref: ref,
    style: { height, minHeight, maxWidth, minWidth, width, zIndex, ...style },
  }, children);
});

export default Base;
