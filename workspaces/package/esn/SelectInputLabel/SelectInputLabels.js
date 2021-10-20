import * as React from 'react';
import Box from '../Box/Box';
import './SelectInputLabels.css';
const BulletPoints = (props, ref) => {
    return (React.createElement(Box, Object.assign({}, props, { borderRadius: "x2", className: "SelectInputLabels", ref: ref })));
};
export default React.forwardRef(BulletPoints);
//# sourceMappingURL=SelectInputLabels.js.map