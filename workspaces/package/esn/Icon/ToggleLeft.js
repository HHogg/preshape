import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "toggle-left_svg__feather toggle-left_svg__feather-toggle-left" },
        React.createElement("rect", { x: 1, y: 5, width: 22, height: 14, rx: 7, ry: 7 }),
        React.createElement("circle", { cx: 8, cy: 12, r: 3 })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=ToggleLeft.js.map