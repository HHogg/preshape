import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "rotate-ccw_svg__feather rotate-ccw_svg__feather-rotate-ccw" },
        React.createElement("path", { d: "M1 4v6h6" }),
        React.createElement("path", { d: "M3.51 15a9 9 0 102.13-9.36L1 10" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=RotateCcw.js.map