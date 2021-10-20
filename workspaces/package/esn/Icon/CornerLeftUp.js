import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "corner-left-up_svg__feather corner-left-up_svg__feather-corner-left-up" },
        React.createElement("path", { d: "M14 9L9 4 4 9" }),
        React.createElement("path", { d: "M20 20h-7a4 4 0 01-4-4V4" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=CornerLeftUp.js.map