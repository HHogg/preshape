import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "at-sign_svg__feather at-sign_svg__feather-at-sign" },
        React.createElement("circle", { cx: 12, cy: 12, r: 4 }),
        React.createElement("path", { d: "M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=AtSign.js.map