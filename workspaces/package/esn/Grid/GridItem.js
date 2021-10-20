import * as React from 'react';
import Box from '../Box/Box';
const GridItem = (props, ref) => {
    const { column, row, ...rest } = props;
    const style = {
        gridColumn: column,
        gridRow: row,
        ...rest.style,
    };
    return (React.createElement(Box, Object.assign({}, rest, { className: "GridItem", ref: ref, style: style })));
};
export default React.forwardRef(GridItem);
//# sourceMappingURL=GridItem.js.map