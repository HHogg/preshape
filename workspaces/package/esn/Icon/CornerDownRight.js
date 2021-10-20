import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "corner-down-right_svg__feather corner-down-right_svg__feather-corner-down-right" },
        React.createElement("path", { d: "M15 10l5 5-5 5" }),
        React.createElement("path", { d: "M4 4v7a4 4 0 004 4h12" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=CornerDownRight.js.map