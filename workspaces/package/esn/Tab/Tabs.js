import * as React from 'react';
import Box from '../Box/Box';
import './Tabs.css';
const Tabs = (props, ref) => {
    return (React.createElement(Box, Object.assign({}, props, { className: "Tabs", ref: ref })));
};
export default React.forwardRef(Tabs);
//# sourceMappingURL=Tabs.js.map