import * as React from 'react';
import Text from '../Text/Text';
import './Table.css';
const Table = (props, ref) => {
    return (React.createElement(Text, Object.assign({}, props, { className: "Table", ref: ref, tag: "table" })));
};
export default React.forwardRef(Table);
//# sourceMappingURL=Table.js.map