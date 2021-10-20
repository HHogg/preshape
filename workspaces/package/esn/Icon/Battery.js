import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "battery_svg__feather battery_svg__feather-battery" },
        React.createElement("rect", { x: 1, y: 6, width: 18, height: 12, rx: 2, ry: 2 }),
        React.createElement("path", { d: "M23 13v-2" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Battery.js.map