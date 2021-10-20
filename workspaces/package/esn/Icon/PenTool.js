import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "pen-tool_svg__feather pen-tool_svg__feather-pen-tool" },
        React.createElement("path", { d: "M12 19l7-7 3 3-7 7-3-3z" }),
        React.createElement("path", { d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586" }),
        React.createElement("circle", { cx: 11, cy: 11, r: 2 })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=PenTool.js.map