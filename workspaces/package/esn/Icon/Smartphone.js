import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "smartphone_svg__feather smartphone_svg__feather-smartphone" },
        React.createElement("rect", { x: 5, y: 2, width: 14, height: 20, rx: 2, ry: 2 }),
        React.createElement("path", { d: "M12 18h.01" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Smartphone.js.map