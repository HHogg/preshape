import * as React from 'react';
import classnames from 'classnames';
import Box from '../Box/Box';
import './Text.css';
const TagInlineMap = (props) => (props.strong && 'strong') ||
    (props.emphasis && 'em') ||
    (props.subscript && 'sub') ||
    (props.superscript && 'sup') ||
    'span';
const Text = (props, ref) => {
    const { align, breakOn, className, ellipsis, emphasis, heading, inline, monospace, size, strong, subscript, superscript, tag, titlecase, uppercase, weak, ...rest } = props;
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
    const finalTag = tag || (inline && TagInlineMap(props)) || 'div';
    return (React.createElement(Box, Object.assign({}, rest, { className: classes, ref: ref, tag: finalTag })));
};
export default React.forwardRef(Text);
//# sourceMappingURL=Text.js.map