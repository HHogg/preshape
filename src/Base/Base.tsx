/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import classnames from 'classnames';
import './Base.css';

export type Attributes<E, P = {}> = P & Omit<
  E extends SVGElement
    ? React.SVGAttributes<E>
    : React.AllHTMLAttributes<E>, keyof P>;

export type TypeColor =
  'black' |
  'white' |
  'highlight' |
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

/**
 * The core component that is the end of the chain for all other components.
 * It provides general utility behaviour and styling.
 */
export interface BaseProps {
  /** Quick way of absolutely position to common places */
  absolute?:
    'center' |
    'edge-to-edge' |
    'top' |
    'top-left' |
    'top-right' |
    'bottom' |
    'bottom-left' |
    'bottom-right';
  /** Background color, shades are taken from the current theme.*/
  backgroundColor?: TypeColor | 'overlay';
  /** Border color, shades are taken from the current theme. */
  borderColor?: TypeColor;
  /** Adds styling of a border radius to one of the size multiples */
  borderRadius?: 'full' | 'x1' | 'x2' | 'x3';
  /** Thickness of the border to be applied */
  borderSize?: 'x1' | 'x2';
  /** Adds styling to indicate that the element is clickable */
  clickable?: boolean;
  /** Applies relative positioning to contain child elements. */
  container?: boolean;
  /** Applies display styling */
  display?: 'block' | 'inline-block';
  /** Quick way of fixed position to common places */
  fixed?:
    'center' |
    'edge-to-edge' |
    'top' |
    'top-left' |
    'top-right' |
    'bottom' |
    'bottom-left' |
    'bottom-right';
  /** Fixed height applied through inline styling */
  height?: number | string;
  /** Margins applied for the global spacing variables */
  margin?: TypeSize;
  /** Max width applied through inline styling */
  maxHeight?: number | string;
  /** Max width applied through inline styling */
  maxWidth?: number | string;
  /** Max height applied through inline styling */
  minHeight?: number | string;
  /** Min width applied through inline style */
  minWidth?: number | string;
  /** Sets how overflown content is handled */
  overflow?: 'hidden';
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
  /** Text color, shades are taken from the current theme. */
  textColor?: TypeColor;
  /**
   * Theme applied to this element and inherited for child elements (until
   * a descendant theme is applied). Note the accent color remains consistent
   * to the theme applied on the HTML element.
   */
  theme?: TypeTheme;
  /** Fixed width applied through inline styling */
  width?: number | string;
  /** z-index number for layering elements.  */
  zIndex?: number;
}

type ReactElementProps = Omit<
  React.AllHTMLAttributes<Element> &
  React.SVGAttributes<Element>
, 'crossOrigin'>;

const Base: React.RefForwardingComponent<Element, BaseProps & ReactElementProps> = (props, ref) => {
  const {
    absolute,
    backgroundColor,
    borderColor,
    borderRadius,
    borderSize,
    children,
    className,
    clickable,
    container,
    display,
    fixed,
    height,
    maxHeight,
    maxWidth,
    minWidth,
    minHeight,
    overflow,
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
    [`Base--border-radius-${borderRadius}`]: borderRadius,
    [`Base--border-size-${borderSize}`]: borderSize,
    [`Base--display-${display}`]: display,
    [`Base--fixed-${fixed}`]: fixed,
    [`Base--margin-${margin}`]: margin,
    [`Base--overflow-${overflow}`]: overflow,
    [`Base--padding-horizontal-${paddingHorizontal}`]: paddingHorizontal,
    [`Base--padding-vertical-${paddingVertical}`]: paddingVertical,
    [`Base--text-color-${textColor}`]: textColor,
    [`Theme--${theme}`]: theme,
  }, className);

  return React.createElement(tag || 'div', {
    ...rest,
    className: classes,
    ref: ref,
    style: { height, maxHeight, minHeight, maxWidth, minWidth, width, zIndex, ...style },
  }, children);
};

export default React.forwardRef(Base);
