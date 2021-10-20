import * as React from 'react';
import Text from '../Text/Text';
const TableCell = (props, ref) => {
    const { paddingHorizontal = 'x3', paddingVertical = 'x2', sorted, ...rest } = props;
    return (React.createElement(Text, Object.assign({}, rest, { className: "Table__cell", paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical, ref: ref, strong: sorted, tag: "td" })));
};
export default React.forwardRef(TableCell);
//# sourceMappingURL=TableCell.js.map