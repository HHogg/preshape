import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import './Base.css';

export default class Base extends Component {
  static propTypes = {
    /**
     * Component to be used as the final element, can be a custom React
     * Component or an element string.
     */
    Component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
    ]),
    /** Quick way of absolutely position to common places */
    absolute: PropTypes.oneOf([
      'fullscreen',
      'top',
      'top-left',
      'top-right',
      'bottom',
      'bottom-left',
      'bottom-right',
    ]),
    /**
     * Background colour to be applied, shades are taken from the current
     * theme. A value of true will reapply the current theme background.
     */
    backgroundColor: PropTypes.oneOf([
      true,
      'accent-shade-1',
      'accent-shade-2',
      'accent-shade-3',
      'shade-1',
      'shade-2',
      'shade-3',
      'text-shade-1',
      'text-shade-2',
      'text-shade-3',
    ]),
    /**
     * Border colour to be applied, shades are taken from the current
     * theme. A value of true will reapply the current colour value.
     */
    borderColor: PropTypes.oneOf([
      true,
      'shade-1',
      'shade-2',
      'shade-3',
    ]),
    /** Thickness of the border to be applied */
    borderSize: PropTypes.oneOf(['x1', 'x2']),
    /** SKIP */
    className: PropTypes.string,
    /** Adds styling to indicate that the element is clickable */
    clickable: PropTypes.bool,
    /**
     * Text colour to be applied. A value of true will reapply the current
     * themes text colour.
     */
    color: PropTypes.oneOf([
      true,
      'accent-shade-1',
      'accent-shade-2',
      'accent-shade-3',
      'background-shade-1',
      'background-shade-2',
      'background-shade-3',
      'negative',
      'positive',
      'shade-1',
      'shade-2',
      'shade-3',
    ]),
    /** Applies relative positioning to contain child elements. */
    container: PropTypes.bool,
    /** Applies display styling */
    display: PropTypes.oneOf(['block', 'inline-block']),
    /** Fixed height applied through inline styling */
    height: PropTypes.string,
    /** Forwarded React ref function */
    innerRef: PropTypes.func,
    /** Margins applied for the global spacing variables */
    margin: PropTypes.oneOf(['x0', 'x1', 'x2', 'x3', 'x4', 'x6', 'x8', 'x10', 'x12', 'x16']),
    /** Max width applied through inline styling */
    maxWidth: PropTypes.string,
    /** Max height applied through inline styling */
    minHeight: PropTypes.string,
    /** Min width applied through inline style */
    minWidth: PropTypes.string,
    /** Padding applied for the global spacing variables */
    padding: PropTypes.oneOf(['x0', 'x1', 'x2', 'x3', 'x4', 'x6', 'x8', 'x10', 'x12', 'x16']),
    /** Horizontal padding applied for the global spacing variables */
    paddingHorizontal: PropTypes.oneOf(['x0', 'x1', 'x2', 'x3', 'x4', 'x6', 'x8', 'x10', 'x12', 'x16']),
    /** Vertical padding applied for the global spacing variables */
    paddingVertical: PropTypes.oneOf(['x0', 'x1', 'x2', 'x3', 'x4', 'x6', 'x8', 'x10', 'x12', 'x16']),
    /** Applies overflow styling to enable/disable scrolling.  */
    scrollable: PropTypes.bool,
    /** SKIP */
    style: PropTypes.object,
    /**
     * Theme applied to this element and inherited for child elements (until
     * a descendant theme is applied).
     */
    theme: PropTypes.oneOf(['day', 'night']),
    /** Fixed width applied through inline styling */
    width: PropTypes.string,
    /** z-index number for layering elements.  */
    zIndex: PropTypes.string,
  };

  static defaultProps = {
    Component: 'div',
  };

  render() {
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
      innerRef,
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
      theme,
      width,
      zIndex,
      ...rest
    } = this.props;

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
    rest[typeof Component === 'string' ? 'ref' : 'innerRef'] = innerRef;

    return (
      <Component { ...rest }
          className={ classes }
          style={ { height, minHeight, maxWidth, minWidth, width, zIndex, ...style } } />
    );
  }
}
