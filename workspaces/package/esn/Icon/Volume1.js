import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "volume-1_svg__feather volume-1_svg__feather-volume-1" },
        React.createElement("path", { d: "M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Volume1.js.map