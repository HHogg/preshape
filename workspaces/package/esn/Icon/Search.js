import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "search_svg__feather search_svg__feather-search" },
        React.createElement("circle", { cx: 11, cy: 11, r: 8 }),
        React.createElement("path", { d: "M21 21l-4.35-4.35" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Search.js.map