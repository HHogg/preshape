import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "life-buoy_svg__feather life-buoy_svg__feather-life-buoy" },
        React.createElement("circle", { cx: 12, cy: 12, r: 10 }),
        React.createElement("circle", { cx: 12, cy: 12, r: 4 }),
        React.createElement("path", { d: "M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M14.83 9.17l3.53-3.53M4.93 19.07l4.24-4.24" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=LifeBuoy.js.map