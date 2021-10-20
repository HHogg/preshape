import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "user-minus_svg__feather user-minus_svg__feather-user-minus" },
        React.createElement("path", { d: "M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
        React.createElement("circle", { cx: 8.5, cy: 7, r: 4 }),
        React.createElement("path", { d: "M23 11h-6" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=UserMinus.js.map