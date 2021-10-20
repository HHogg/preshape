import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "server_svg__feather server_svg__feather-server" },
        React.createElement("rect", { x: 2, y: 2, width: 20, height: 8, rx: 2, ry: 2 }),
        React.createElement("rect", { x: 2, y: 14, width: 20, height: 8, rx: 2, ry: 2 }),
        React.createElement("path", { d: "M6 6h.01M6 18h.01" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Server.js.map