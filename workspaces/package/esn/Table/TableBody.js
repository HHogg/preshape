import * as React from 'react';
import Box from '../Box/Box';
const TableBody = (props, ref) => {
    return (React.createElement(Box, Object.assign({}, props, { className: "Table__body", ref: ref, tag: "tbody" })));
};
export default React.forwardRef(TableBody);
//# sourceMappingURL=TableBody.js.map