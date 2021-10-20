import * as React from 'react';
import Box from '../Box/Box';
const ListItem = (props, ref) => {
    const { children, separator = '/', ...rest } = props;
    return (React.createElement(Box, Object.assign({}, rest, { alignChildrenVertical: "middle", className: "ListItem", "data-separator": separator, flex: "horizontal", ref: ref, tag: "li" }),
        React.createElement(Box, null, children)));
};
export default React.forwardRef(ListItem);
//# sourceMappingURL=ListItem.js.map