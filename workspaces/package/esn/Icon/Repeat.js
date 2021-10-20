import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "repeat_svg__feather repeat_svg__feather-repeat" },
        React.createElement("path", { d: "M17 1l4 4-4 4" }),
        React.createElement("path", { d: "M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4" }),
        React.createElement("path", { d: "M21 13v2a4 4 0 01-4 4H3" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Repeat.js.map