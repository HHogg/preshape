import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "rotate-cw_svg__feather rotate-cw_svg__feather-rotate-cw" },
        React.createElement("path", { d: "M23 4v6h-6" }),
        React.createElement("path", { d: "M20.49 15a9 9 0 11-2.12-9.36L23 10" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=RotateCw.js.map