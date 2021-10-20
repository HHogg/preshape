import * as React from 'react';
import Box from '../Box/Box';
const BulletPoint = (props, ref) => {
    const { children, ...rest } = props;
    return (React.createElement(Box, Object.assign({}, rest, { className: "BulletPoints__point", ref: ref, tag: "li" }),
        React.createElement(Box, { className: "BulletPoints__point-content" }, children)));
};
export default React.forwardRef(BulletPoint);
//# sourceMappingURL=BulletPoint.js.map