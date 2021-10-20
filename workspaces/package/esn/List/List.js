import * as React from 'react';
import classnames from 'classnames';
import Box from '../Box/Box';
import './List.css';
const List = (props, ref) => {
    const { gap = 'x1', ...rest } = props;
    const classes = classnames('List', `List--${gap}`);
    return (React.createElement(Box, Object.assign({}, rest, { alignChildrenVertical: "middle", className: classes, flex: "horizontal", gap: gap, ref: ref, tag: "ul", wrap: true })));
};
export default React.forwardRef(List);
//# sourceMappingURL=List.js.map