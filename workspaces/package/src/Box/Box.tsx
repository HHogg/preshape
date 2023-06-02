import classnames from 'classnames';
import {
  AllHTMLAttributes,
  CSSProperties,
  SVGAttributes,
  createElement,
  forwardRef,
} from 'react';
import './Box.css';
import {
  TypeBorderSize,
  TypeColor,
  TypePosition,
  TypeSize,
  TypeTheme,
} from '../types';

type IntrinsicAttributes = {} & Omit<AllHTMLAttributes<any>, 'wrap'> &
  SVGAttributes<any>;

/**
 * The core component that is the end of the chain for all other components.
 * It provides general utility behaviour and styling.
 */
export interface BoxProps extends IntrinsicAttributes {
  /** Quick way of absolutely position to common places */
  absolute?: TypePosition;
  /**
   * Short cut child alignment property for both alignChildrenHorizontal and
   * alignChildrenVertical.
   */
  alignChildren?: 'start' | 'middle' | 'end';
  /** Horizontal alignment of children flex items. */
  alignChildrenHorizontal?:
    | 'stretch'
    | 'start'
    | 'middle'
    | 'end'
    | 'around'
    | 'between';
  /** Vertical alignment of children flex items. */
  alignChildrenVertical?: 'start' | 'middle' | 'end' | 'around' | 'between';
  /** Flex item alignment property (changes with parent direction). */
  alignSelf?: 'start' | 'middle' | 'end';
  /** Background color, shades are taken from the current theme.*/
  backgroundColor?: TypeColor | 'overlay';
  /** Flex basis */
  basis?: CSSProperties['flexBasis'];
  /** Border color, shades are taken from the current theme. */
  borderColor?: TypeColor;
  /** Applies just the bottom border. To apply all border, just pass borderSize */
  borderBottom?: boolean;
  /** Applies just the left border. To apply all border, just pass borderSize */
  borderLeft?: boolean;
  /** Applies just the right border. To apply all border, just pass borderSize */
  borderRight?: boolean;
  /** Applies just the top border. To apply all border, just pass borderSize */
  borderTop?: boolean;
  /** Adds styling of a border radius to one of the size multiples */
  borderRadius?: 'full' | 'x1' | 'x2' | 'x3' | string | number;
  /** Thickness of the border to be applied */
  borderSize?: TypeBorderSize;
  /** Applies border style  */
  borderStyle?: 'solid' | 'dashed';
  /** Adds styling to indicate that the element is clickable */
  clickable?: boolean;
  /** Applies relative positioning to contain child elements. */
  container?: boolean;
  /** Applies display styling */
  display?: CSSProperties['display'];
  /** Applies a box shadow that gives the appearance of elevation */
  elevate?: 'x1' | 'x2' | 'x3' | boolean;
  /** Quick way of fixed position to common places */
  fixed?: TypePosition;
  /** Flex direction */
  flex?: 'horizontal' | 'vertical';
  /** Spacing applied between child flex items, values are global spacing variables. */
  gap?: TypeSize;
  /** Sets the horizontal distance between items to a multiple value. E.g. 'x1'. */
  gapHorizontal?: TypeSize;
  /** Sets the horizontal distance between items to a multiple value. E.g. 'x1'. */
  gapVertical?: TypeSize;
  /** Flex item property if it should grow with available space. */
  grow?: boolean | CSSProperties['flexGrow'];
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
  overflow?: CSSProperties['overflow'];
  /** Padding applied for the global spacing variables */
  padding?: TypeSize;
  /** Horizontal padding applied for the global spacing variables */
  paddingHorizontal?: TypeSize;
  /** Vertical pa?dding applied for the global spacing variables */
  paddingVertical?: TypeSize;
  /** Top padding applied for the global spacing variables */
  paddingTop?: TypeSize;
  /** Right padding applied for the global spacing variables */
  paddingRight?: TypeSize;
  /** Bottom padding applied for the global spacing variables */
  paddingBottom?: TypeSize;
  /** Left padding applied for the global spacing variables */
  paddingLeft?: TypeSize;
  /** Offset horizontal padding with a negative margin, applied for the global spacing variables */
  paddingOffsetHorizontal?: TypeSize;
  /** Offset right padding with a negative margin, applied for the global spacing variables */
  paddingOffsetLeft?: TypeSize;
  /** Offset right padding with a negative margin, applied for the global spacing variables */
  paddingOffsetRight?: TypeSize;
  /** Offset right padding with a negative margin, applied for the global spacing variables */
  paddingOffsetTop?: TypeSize;
  /** Offset right padding with a negative margin, applied for the global spacing variables */
  paddingOffsetBottom?: TypeSize;
  /** Reverses the flex direction */
  reverse?: boolean;
  /** Flex item property if it should shrink. */
  shrink?: boolean | CSSProperties['flexShrink'];
  /** HTML Element tag that will be rendered into the DOM */
  tag?: keyof JSX.IntrinsicElements;
  /** Text color, shades are taken from the current theme. */
  textColor?: TypeColor;
  /**
   * Theme applied to this element and inherited for child elements (until
   * a descendant theme is applied). Note the accent color remains consistent
   * to the theme applied on the HTML element.
   */
  theme?: TypeTheme;
  /** Transition speed */
  transitionDuration?: 'slow' | 'base' | 'fast';
  /** Quick prop to transition changing CSS properties. */
  transitionProperty?: string;
  /** Fixed width applied through inline styling */
  width?: number | string;
  /** Flag to allow flex items to wrap over to new lines */
  wrap?: boolean;
  /** z-index number for layering elements.  */
  zIndex?: CSSProperties['zIndex'];
}

export const Box = forwardRef<any, BoxProps>((props, ref) => {
  const {
    absolute,
    alignChildren,
    alignChildrenHorizontal = alignChildren,
    alignChildrenVertical = alignChildren,
    alignSelf,
    backgroundColor,
    basis,
    borderBottom,
    borderColor,
    borderLeft,
    borderRadius,
    borderRight,
    borderSize,
    borderStyle,
    borderTop,
    children,
    className,
    clickable,
    container,
    display,
    elevate,
    fixed,
    flex,
    gap,
    gapHorizontal = gap,
    gapVertical = gap,
    grow,
    height,
    maxHeight,
    maxWidth,
    minWidth,
    minHeight,
    overflow,
    padding,
    paddingHorizontal = padding,
    paddingVertical = padding,
    paddingTop = paddingVertical,
    paddingBottom = paddingVertical,
    paddingRight = paddingHorizontal,
    paddingLeft = paddingHorizontal,
    paddingOffsetHorizontal,
    paddingOffsetRight = paddingOffsetHorizontal,
    paddingOffsetLeft = paddingOffsetHorizontal,
    paddingOffsetTop,
    paddingOffsetBottom,
    margin,
    reverse,
    shrink,
    style,
    tag,
    textColor,
    theme,
    transitionDuration = 'base',
    transitionProperty,
    width,
    wrap,
    zIndex,
    ...rest
  } = props;

  const border = borderTop || borderRight || borderBottom || borderLeft;

  const isPredefinedBorderRadius =
    borderRadius === 'full' ||
    borderRadius === 'x1' ||
    borderRadius === 'x2' ||
    borderRadius === 'x3';

  const classes = classnames(
    'Box',
    {
      'Box--border': border,
      'Box--border-top': borderTop,
      'Box--border-right': borderRight,
      'Box--border-bottom': borderBottom,
      'Box--border-left': borderLeft,
      'Box--clickable': clickable,
      'Box--container': container,
      'Box--elevate': elevate,
      'Box--flex-reverse': reverse,
      'Box--flex-wrap': wrap,
      'Box--max-width': maxWidth,
      [`Box--background-color-${backgroundColor}`]: backgroundColor,
      [`Box--border-color-${borderColor}`]: borderColor,
      [`Box--border-radius-${borderRadius}`]: isPredefinedBorderRadius,
      [`Box--border-size-${borderSize}`]: borderSize,
      [`Box--border-style-${borderStyle}`]: borderStyle,
      [`Box--elevate-${elevate}`]: typeof elevate === 'string',
      [`Box--position-absolute`]: absolute,
      [`Box--position-fixed`]: fixed,
      [`Box--position-${fixed || absolute}`]: fixed || absolute,
      [`Box--flex-${flex}`]: flex,
      [`Box--flex-align-horz-${alignChildrenHorizontal}`]:
        alignChildrenHorizontal,
      [`Box--flex-align-self-${alignSelf}`]: alignSelf,
      [`Box--flex-align-vert-${alignChildrenVertical}`]: alignChildrenVertical,
      [`Box--flex-gap-horizontal-${gapHorizontal}`]: gapHorizontal,
      [`Box--flex-gap-vertical-${gapVertical}`]: gapVertical,
      [`Box--margin-${margin}`]: margin,
      [`Box--padding-top-${paddingTop}`]: paddingTop,
      [`Box--padding-bottom-${paddingBottom}`]: paddingBottom,
      [`Box--padding-right-${paddingRight}`]: paddingRight,
      [`Box--padding-left-${paddingLeft}`]: paddingLeft,
      [`Box--padding-offset-right-${paddingOffsetRight}`]: paddingOffsetRight,
      [`Box--padding-offset-left-${paddingOffsetLeft}`]: paddingOffsetLeft,
      [`Box--padding-offset-top-${paddingOffsetTop}`]: paddingOffsetTop,
      [`Box--padding-offset-bottom-${paddingOffsetBottom}`]:
        paddingOffsetBottom,
      [`Box--text-color-${textColor}`]: textColor,
      [`Box--transition-${transitionDuration}`]: transitionProperty,
      [`Theme--${theme}`]: theme,
    },
    className
  );

  return createElement(
    tag ?? 'div',
    {
      ...rest,
      className: classes,
      ref: ref,
      style: {
        borderRadius: isPredefinedBorderRadius ? undefined : borderRadius,
        display,
        flexBasis: basis,
        flexGrow: grow === true ? '1' : grow,
        flexShrink: shrink === true ? '1' : shrink,
        height,
        maxHeight,
        minHeight,
        maxWidth,
        minWidth,
        overflow,
        transitionProperty,
        width,
        zIndex,
        ...style,
      },
    },
    children
  );
});
