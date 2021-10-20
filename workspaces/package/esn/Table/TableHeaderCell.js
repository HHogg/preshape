import * as React from 'react';
import Link from '../Link/Link';
import Text from '../Text/Text';
const TableHeaderCell = (props, ref) => {
    const { children, paddingHorizontal = 'x3', paddingVertical = 'x2', sortable, sorted, ...rest } = props;
    return (React.createElement(Text, Object.assign({}, rest, { className: "Table__header-cell", paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical, ref: ref, strong: true, tag: "th", uppercase: true }), sortable ? (React.createElement(Link, { active: sorted }, children)) : (children)));
};
export default React.forwardRef(TableHeaderCell);
//# sourceMappingURL=TableHeaderCell.js.map