import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "unlock_svg__feather unlock_svg__feather-unlock" },
        React.createElement("rect", { x: 3, y: 11, width: 18, height: 11, rx: 2, ry: 2 }),
        React.createElement("path", { d: "M7 11V7a5 5 0 019.9-1" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Unlock.js.map