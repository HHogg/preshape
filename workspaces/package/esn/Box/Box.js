/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import classnames from 'classnames';
import './Box.css';
const Box = (props, ref) => {
    const { absolute, alignChildren, alignChildrenHorizontal = alignChildren, alignChildrenVertical = alignChildren, alignSelf, backgroundColor, basis, borderBottom, borderColor, borderLeft, borderRadius, borderRight, borderSize, borderTop, children, className, clickable, container, display, elevate, fixed, flex, gap, grow, height, maxHeight, maxWidth, minWidth, minHeight, overflow, padding, paddingHorizontal = padding, paddingVertical = padding, margin, reverse, scrollable, shrink, style, tag, textColor, theme, width, wrap, zIndex, ...rest } = props;
    const border = borderTop || borderRight || borderBottom || borderLeft;
    const classes = classnames('Box', {
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
        'Box--scrollable': scrollable,
        [`Box--absolute-${absolute}`]: absolute,
        [`Box--background-color-${backgroundColor}`]: backgroundColor,
        [`Box--border-color-${borderColor}`]: borderColor,
        [`Box--border-radius-${borderRadius}`]: borderRadius,
        [`Box--border-size-${borderSize}`]: borderSize,
        [`Box--display-${display}`]: display,
        [`Box--fixed-${fixed}`]: fixed,
        [`Box--flex-${flex}`]: flex,
        [`Box--flex-align-horz-${alignChildrenHorizontal}`]: alignChildrenHorizontal,
        [`Box--flex-align-self-${alignSelf}`]: alignSelf,
        [`Box--flex-align-vert-${alignChildrenVertical}`]: alignChildrenVertical,
        [`Box--flex-gap-${gap}`]: gap,
        [`Box--margin-${margin}`]: margin,
        [`Box--overflow-${overflow}`]: overflow,
        [`Box--padding-horizontal-${paddingHorizontal}`]: paddingHorizontal,
        [`Box--padding-vertical-${paddingVertical}`]: paddingVertical,
        [`Box--text-color-${textColor}`]: textColor,
        [`Theme--${theme}`]: theme,
    }, className);
    return React.createElement(tag || 'div', {
        ...rest,
        className: classes,
        ref: ref,
        style: {
            flexBasis: basis,
            flexGrow: grow === true ? '1' : grow,
            flexShrink: shrink === true ? '1' : shrink,
            height: height,
            maxHeight: maxHeight,
            minHeight: minHeight,
            maxWidth: maxWidth,
            minWidth: minWidth,
            width: width,
            zIndex: zIndex,
            ...style,
        },
    }, children);
};
export default React.forwardRef(Box);
//# sourceMappingURL=Box.js.map