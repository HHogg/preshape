import * as React from 'react';
import Box from '../Box/Box';
import './Range.css';
const Range = (props, ref) => {
    const { padding, paddingHorizontal = 'x3', paddingVertical = 'x2', ...rest } = props;
    return (React.createElement(Box, Object.assign({}, rest, { basis: "0", className: "Range", grow: true, paddingHorizontal: padding || paddingHorizontal, paddingVertical: padding || paddingVertical, ref: ref, tag: "input", type: "range" })));
};
export default React.forwardRef(Range);
//# sourceMappingURL=Range.js.map