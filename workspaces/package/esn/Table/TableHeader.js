import * as React from 'react';
import Box from '../Box/Box';
const TableHeader = (props, ref) => {
    return (React.createElement(Box, Object.assign({}, props, { className: "Table__header", ref: ref, tag: "thead" })));
};
export default React.forwardRef(TableHeader);
//# sourceMappingURL=TableHeader.js.map