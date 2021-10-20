import * as React from 'react';
import Box from '../Box/Box';
const TabContent = (props, ref) => {
    const { backgroundColor = 'background-shade-1', ...rest } = props;
    return (React.createElement(Box, Object.assign({}, rest, { backgroundColor: backgroundColor, className: "TabContent", ref: ref })));
};
export default React.forwardRef(TabContent);
//# sourceMappingURL=TabContent.js.map